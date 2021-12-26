var session = require("express-session");

module.exports = (app) => {
  app.use(
    session({
      secret: "thisIsVeryMuchHiddenSoWowMuchProtected",
      resave: false,
      saveUninitialized: true,
    })
  );
};
