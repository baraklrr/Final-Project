jest.mock("jsonwebtoken");
jest.mock("bcryptjs");
const SequelizeMock = require("sequelize-mock");
const mockDb = new SequelizeMock();
let userModelMock;
let refreshTokenModelMock;
let roleModelMock;
jest.mock("../models", () => {
  const _userDbModel = mockDb.define(
    "user",
    {
      username: "b",
      email: "b@gmail.com",
      password: "123456",
      phoneNumber: "0324567890",
      businessName: "my Business",
      businesslogoImg: "",
      businessAddress: "abc tlv",
      businessPhoneNumber: "046578954",
      roles: ["moderator", "user"],
    },
    {
      timestamps: false,
      instanceMethods: {
        setRoles: function () {
          return Promise.resolve();
        },
        getRoles: function () {
          return _userDbModel.roles;
        },
      },
    }
  );
  const _refreshTokenDbModel = mockDb.define("refreshToken", {
    token: "123123123123qweqwe123123",
    expiryDate: "2022-08-10",
  });
  _refreshTokenDbModel.createToken = jest.fn();
  const _roleDbModel = mockDb.define("role", {
    name: "user",
  });
  userModelMock = _userDbModel;
  refreshTokenModelMock = _refreshTokenDbModel;
  roleModelMock = _roleDbModel;
  return {
    db: {
      Sequelize: { Op: { and: "AND", or: "OR" } },
      user: _userDbModel,
      role: _roleDbModel,
      refreshToken: _refreshTokenDbModel,
    },
  };
});

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

jwt.verify.mockReturnValue({ id: "rgfh4hs6hfh54sg46" });
bcrypt.compareSync.mockReturnValue({ id: "rgfh4hs6hfh54sg46" });
bcrypt.hashSync.mockReturnValue("rgfh4hs6hfh54sg46");

const authController = require("../controllers/auth.controller");

describe("authController.signup", () => {
  it("signup", (done) => {
    const mockUserBodyParams = {
      businessAddress: undefined,
      businessName: undefined,
      businessPhoneNumber: undefined,
      businesslogoImg: undefined,
      username: "b",
      email: "b@gmail.com",
      password: "123456",
      phoneNumber: undefined,
    };
    bcrypt.hashSync.mockReturnValueOnce(mockUserBodyParams.password);

    const userCreateSpy = jest.spyOn(userModelMock, "create");
    const mokcUserRecord = userModelMock.build(
      {
        id: 1,
        ...mockUserBodyParams,
      },
      { timestamps: false }
    );
    userModelMock.$queryInterface.$useHandler(function (query) {
      if (query === "create") {
        return mokcUserRecord;
      }
    });
    const req = {
      body: mockUserBodyParams,
    };
    let res = {
      status: () => {
        return res;
      },
      send: (input) => {
        expect(userCreateSpy).toBeCalledWith(mockUserBodyParams);
        try {
          expect(input).toBeDefined();
          expect(input.user.dataValues).toEqual(mokcUserRecord.dataValues);
          done();
        } catch (error) {
          done(error);
        }
      },
    };
    authController.signup(req, res);
  });
});

// describe("authController.signin", () => {
//   it("signin", (done) => {
//     const mockToken = "fake-token-123";
//     const mockRefreshToken = "fake-refresh-token-123";
//     const mockUserBodyParams = {
//       username: "b",
//       password: "123456",
//       //email: "b@gmail.com",
//       // phoneNumber: "0324567890",
//       // businessName: "my Business",
//       // businesslogoImg: "",
//       // businessAddress: "abc tlv",
//       // businessPhoneNumber: "046578954",
//       // roles: ["moderator", "user"],
//     };
//     const mockUserParams = {
//       username: "b",
//       email: "b@gmail.com",
//       password: "123456",
//       phoneNumber: "0324567890",
//       businessName: "my Business",
//       businesslogoImg: "",
//       businessAddress: "abc tlv",
//       businessPhoneNumber: "046578954",
//       roles: ["moderator", "user"],
//     };
//     bcrypt.hashSync.mockReturnValueOnce(true);

//     const userFindOneSpy = jest.spyOn(userModelMock, "findOne");
//     jwt.sign.mockReturnValueOnce(mockToken);
//     refreshTokenModelMock.createToken.mockResolvedValueOnce(mockRefreshToken);
//     const mokcUserRecord = userModelMock.build(
//       {
//         mockUserParams,
//       },
//       { timestamps: false }
//     );
//     userModelMock.$queryInterface.$useHandler(function (query) {
//       if (query === "findOne") {
//         return mokcUserRecord;
//       }
//     });
//     const req = {
//       body: mockUserBodyParams,
//     };
//     let res = {
//       cookie: jest.fn(),
//       status: () => {
//         return res;
//       },
//       send: (input) => {
//         expect(userFindOneSpy).toBeCalledWith({ where: { username: "b" } });
//         try {
//           expect(input).toBeDefined();
//           expect(input?.body).toEqual(mockUserParams);

//           // expect(input).toEqual({
//           //   id: 1,
//           //   username: "b",
//           //   email: "b@gmail.com",
//           //   roles: ["user"],
//           //   accessToken: token,
//           //   refreshToken: refreshToken,
//           //   mockUserBodyParams,
//           // });
//           done();
//         } catch (error) {
//           done(error);
//         }
//       },
//     };
//     authController.signin(req, res);
//   });
// });
