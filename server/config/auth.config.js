module.exports = {
  secret: "xcount-secret-key",
  jwtExpiration: 60 * 60 * 24, // 3600 seconds = 1 hour
  jwtRefreshExpiration: 1000 * 24, // 24 hours
  /* for test */
  // jwtExpiration: 60,          // 1 minute
  // jwtRefreshExpiration: 120,  // 2 minutes
};
