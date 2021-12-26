const express = require('express');
var cookieParser = require('cookie-parser')
const exphbs = require("express-handlebars");
const exphbs_sections = require("express-handlebars-sections");


const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs',
    helpers: {
      ifEqual(s1, s2, options) {
        if (s1 === s2) return options.fn(this);
        return options.inverse(this);
      },
    },
});


module.exports = (app) => {
  
  exphbs_sections(hbs);
  app.engine("hbs", hbs.engine);
  app.set("view engine", "hbs");
  app.set("views", "./views");
};
