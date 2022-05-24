module.exports = {
  secret: "xcount-secret-key",
  jwtExpiration: 3600, // 1 hour
  jwtRefreshExpiration: 100, // 24 hours
  /* for test */
  // jwtExpiration: 60,          // 1 minute
  // jwtRefreshExpiration: 120,  // 2 minutes
};
