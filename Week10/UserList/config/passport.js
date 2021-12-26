const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userM = require("../model/user.M");
const bcrypt = require("bcrypt");
module.exports = (app) => {
  passport.use(
    
    new LocalStrategy({ session: true }, async (username, password, done) => {
      console.log(username,password);
      let user;
      try {
        user = await userM.getUser(username);
        user = user[0];
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        const challengeResult = await bcrypt.compare(password, user.f_Password);
        console.log(challengeResult);
        if (!challengeResult) return done(null, false, { message: "Incorrect password." });
       
        return done(null, user);
      } catch (error) {
        console.log(error);
        return done(error);
      }
    })
  );
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(async (user, done) => {
    try {
      return done(null, user);
    } catch (error) {
      done(new Error("error", error));
    }
  });
  app.use(passport.initialize());
  app.use(passport.session());
};
