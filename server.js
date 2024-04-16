const express = require("express");
//paths
const path = require("path");
const controller = require("./controllers");
//handlebars
const exphbs = require("express-handlebars");
//sequelize
const sequelize = require("./config/connection");
//creating session variables
const session = require("express-session");
const SequlizeStore = require("connect-session-sequelize")(session.Store);
