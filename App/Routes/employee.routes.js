module.exports = app => {
    const employees = require("../Controllers/employee.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Employee
    router.post("/", employees.createEmployee);
  
    // Retrieve all Employees
    router.get("/", employees.getAllEmployees);
  
    // Retrieve all published Tutorials
    //router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Employee with id
    router.get(`/:id`, employees.getEmployeeById);
  
    // Update a Employee with id
    router.put("/:id", employees.updateEmployee);
  
    // Delete a Employee with id
    router.delete("/:id", employees.deleteEmployee);
  
    // Delete all Tutorials
    //router.delete("/", tutorials.deleteAll);
  
    app.use('/api/employees', router);
  };
  