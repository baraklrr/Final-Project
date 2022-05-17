const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const { db, initial } = require("./models");

const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081",
};

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Drop and re-sync db.");
    initial;
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(cors(corsOptions));
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

const { authRouter } = require("./routes/auth.routes");
app.use("/api/auth", authRouter);

const indexRouter = require("./routes/index_routes");
app.use("/", indexRouter);

const incomeRouter = require("./routes/income_routes");
app.use("/api/income", incomeRouter);

//server
app.listen(port, () => {
  console.log("app listening on port " + port);
});
