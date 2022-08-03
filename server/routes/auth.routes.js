const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const express = require("express");
const authRouter = express.Router();
const authJwt = require("../middleware/authJwt");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The Authontication API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *      type: object
 *      required:
 *        - email
 *        - username
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          description: The user email
 *        username:
 *          type: string
 *          description: The user name
 *        password:
 *          type: string
 *          description: The user password
 *      example:
 *        email: 'bob@gmail.com'
 *        username : 'bob123'
 *        password: '123456'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Tokens:
 *       type: object
 *       required:
 *         - accessToken
 *         - refreshToken
 *       properties:
 *         accessToken:
 *           type: string
 *           description: The JWT access token
 *         refreshToken:
 *           type: string
 *           description: The JWT refresh token
 *       example:
 *         accessToken: '123cd123x1xx1'
 *         refreshToken: '134r2134cr1x3c'
 */

authRouter.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: registers a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         authRouterlication/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *       responses:
 *         200:
 *           description: The new user
 *           content:
 *             authRouterlication/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 */
authRouter.post(
  "/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  controller.signup
);

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: sign in a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         authRouterlication/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The acess & refresh tokens
 *         content:
 *           authRouterlication/json:
 *             schema:
 *               $ref: '#/components/schemas/Tokens'
 */
authRouter.post("/signin", controller.signin);


/**
 * @swagger
 * /api/auth/update:
 *   post:
 *     summary: update a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         authRouterlication/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: gets new value from user and updates
 *         content:
 *           authRouterlication/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
authRouter.put ("/update",
[authJwt.verifyToken],
 controller.updateUser);


/**
 * @swagger
 * /api/auth/signout:
 *   post:
 *     summary: logout a user
 *     tags: [Auth]
 *     description: need to provide the refresh token in the auth header
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: logout completed successfully
 */
authRouter.post("/signout", controller.signout);

/**
 * @swagger
 * /api/auth/refreshtoken:
 *     post:
 *       summary: get a new access token using the refresh token
 *       tags: [Auth]
 *       description: need to provide the refresh token in the auth header
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: The access & refresh tokens
 *           content:
 *             authRouterlication/json:
 *               schema:
 *                 $ref: '#/components/schemas/Tokens'
 */
authRouter.post("/refreshtoken", controller.refreshToken);

module.exports = { authRouter };
