
"use strict";

/*

  Dogmatic: A highly opinionated everything library

*/

/*

  //// Dependencies

*/

var path        = require("path");



/*

  //// Globals

*/

var Dogmatic = module.exports = {
  Views : require("dogmatic-views")
};



/*

  //// Setup

*/

Dogmatic.Views.root(path.join(__dirname, "..", ".."));
