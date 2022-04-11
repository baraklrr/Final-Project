require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

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
      servers: [
        { url: "http://localhost:" + process.env.SWAGGER_PORT || 8001 },
      ],
    },
    apis: ["./app/routes/*.js"],
  };
  const specs = swaggerJsDoc(options);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
}

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync(); //For production
// force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   initial();
// });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Xcount application." });
});

// routes
require("./app/routes/turorial.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}

module.exports = app