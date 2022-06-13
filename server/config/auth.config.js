module.exports = {
  secret: "xcount-secret-key",
  jwtExpiration: 60 * 60 * 5, // 3600 seconds = 1 hour
  jwtRefreshExpiration: 100, // 24 hours
  /* for test */
  // jwtExpiration: 60,          // 1 minute
  // jwtRefreshExpiration: 120,  // 2 minutes
};
