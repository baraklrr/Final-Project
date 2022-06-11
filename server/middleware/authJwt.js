const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const e = require("express");

const { TokenExpiredError } = jwt;
const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    console.log("Token was expired!");
    return res
      .status(401)
      .send({ message: "Access Token was expired!", errorCode: "190" });
  }
  console.log("User Unauthorized!");
  console.log(err);
  return res.status(401).send({ message: "Unauthorized!" });
};
/**
 *
 * @param {e.Request} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const verifyToken = (req, res, next) => {
  console.log("*******************  verifyToken *****************");
  const token = req.headers["x-access-token"];
  console.log(
    '===================req.headers["x-access-token"]================='
  );
  console.log(req.headers["x-access-token"]);
  console.log(token.startsWith('"'));

  console.log("====================================");
  // const authHeader = accToken; //req.get("x-access-token"); //("Authorization");
  // if (!authHeader) {
  //   return res.status(401).json({ message: "not authenticated" });
  // }
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  try {
    const decoded = jwt.verify(token, config.secret);
    console.log("==================decoded==================");
    console.log(decoded);
    console.log("====================================");
    res.locals.userId = decoded.id;
    next();
  } catch (error) {
    console.log("==================error==================");
    console.log(error);
    console.log("====================================");
    return catchError(error, res);
  }
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!",
      });
      return;
    });
  });
};

isModerator = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Moderator Role!",
      });
    });
  });
};

isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }

        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Moderator or Admin Role!",
      });
    });
  });
};

const authJwt = {
  verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin,
};
module.exports = authJwt;
