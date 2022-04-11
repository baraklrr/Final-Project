const app = require("../server");
const request = require("supertest");
// const { response } = require('../server')
// const User = require('../models/user_model')
// const { DESCRIBE } = require('sequelize/types/lib/query-types')

// const email = 'test@a.com'
// const pwd = '123456'

// beforeAll(done=>{
//     User.remove({'email' : email}, (err)=>{
//         done()
//     })
// })

// afterAll(done=>{
//     User.remove({'email' : email}, (err)=>{
//         //mongoosse.connection.close()
//         done()
//     })
// })

const username = 'alon'
const pwd = '123456'
let accessToken = ''
let refreshToken = ''

beforeAll((done) => {
  done();
});

afterAll((done) => {
  done();
});

describe("Test", () => {
  // test("simple get", async () => {
  //   const response = await request(app).get("/");
  //   expect(response.statusCode).toEqual(200);
  // });
  test("post sign in", async () => {
    const response = await request(app).post("/api/auth/signin").send({
        'username' : username,
        'password' : pwd
    });
    expect(response.statusCode).toEqual(200);
    accessToken = response.body.accessToken
    refreshToken = response.body.refreshToken
    expect(accessToken).not.toEqual(null);
    expect(refreshToken).not.toEqual(null);
  });
});