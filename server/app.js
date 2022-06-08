const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const { db, initial } = require("./models");
const cors = require("cors");
global.__basedir = __dirname;
var corsOptions = {
  origin: "http://localhost:8080",
};

if (process.env.NODE_ENV == "development") {
  const swaggerUI = require("swagger-ui-express");
  const swaggerJsDoc = require("swagger-jsdoc");
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "xCount API",
        version: "1.0.0",
        description: "A simple Express Library API",
      },
      servers: [{ url: "http://localhost:" + port }],
    },
    apis: ["./routes/*.js"],
  };
  const specs = swaggerJsDoc(options);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
}

const forceSync = async () => {
  await db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
  await db.sequelize
    .sync({ force: true })
    .then(() => {
      console.log("Drop and re-sync db.");
      initial();
      console.log("initial db.");
    })
    .catch((err) => {
      console.log(err);
    });
  await db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1"); // setting the flag back for security
};

forceSync();

//middleware
app.use(cors(corsOptions));
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

const { authRouter } = require("./routes/auth.routes");
app.use("/api/auth", authRouter);

const indexRouter = require("./routes/index.routes");
app.use("/", indexRouter);

const incomeRouter = require("./routes/income.routes");
app.use("/api/income", incomeRouter);

const expenseRouter = require("./routes/expense.routes");
app.use("/api/expense", expenseRouter);
require("./routes/transaction.routes")(app);

//server
app.listen(port, () => {
  console.log("app listening on port " + port);
});
