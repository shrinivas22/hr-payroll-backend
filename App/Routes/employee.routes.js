const { authJwt } = require("../Middlewares");

module.exports = app => {
  const employees = require("../Controllers/employee.controller.js");
  var router = require("express").Router();

  // Create a new Employee
  router.post("/", [authJwt.verifyToken], employees.createEmployee);

  // Retrieve all Employees
  router.get("/", [authJwt.verifyToken], employees.getAllEmployees);

  // Retrieve a single Employee with id
  router.get(`/:id`, [authJwt.verifyToken], employees.getEmployeeById);

  // Update a Employee with id
  router.put("/:id", [authJwt.verifyToken], employees.updateEmployee);

  // Delete a Employee with id
  router.delete("/:id", [authJwt.verifyToken], employees.deleteEmployee);

  app.use('/api/employees', function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  }, router);
};
