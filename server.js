const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin:  'https://hr-payroll-frontend.herokuapp.com' 
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./App/Models/index.js");

db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to hr payroll application." });
});
require("./App/Routes/auth.routes.js")(app);
require("./App/Routes/employee.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});