// const app = require("./app");
// const routes = require("./routes/router");
("use strict");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./routers");
// const helmet = require("helmet");

var allowedOrigins = ["https://example.com"];
/* var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Operation not allowed'))
    }
  }
} */

const app = express();

// app.use(helmet());
/* app.use(cors(corsOptions)); */

// module.exports = app;

app.use("/", routes);
/* app.use("/api/", routes);  //for API backend*/

//start server locally
app.listen(2000, function () {
  console.log("Server started. Go to http://localhost:2000/");
});
