
const { sequelize } = require("../Models");
const db = require("../Models");
const employee = db.employee;
const Op = db.Sequelize.Op;

//var Employee = sequelize.model()
// let basedir=require('path').resolve(__dirname, '..');
// let normalizedPath = require('path').join(basedir, "Models")
//     require('fs').readdirSync(normalizedPath).forEach((file) => {
//         sequelize.import('./models/' + file)
//     })

//require('fs').readdirSync(normalizedPath).sequelize.import('../Models/' + file)

//let {User, Permissions} = sequelize.models

function calcPayable(emp) {

    var grossPay = emp.grosspay == "" ? 0 : emp.grosspay;
    var stateTax = (emp.statetax == "" ? 0 : emp.statetax / 100) * grossPay;
    var federalTax = (emp.federaltax == "" ? 0 : emp.federaltax / 100) * grossPay;
    var reimbursements = emp.reimbursements == "" ? 0 : emp.reimbursements;
    var bonus = emp.bonus == "" ? 0 : emp.bonus;
    var healthInsurance = (emp.healthinsurance == "" ? 0 : emp.healthinsurance / 100) * grossPay;
    var socialSecurityTax = (emp.socialsecuritytax == "" ? 0 : emp.socialsecuritytax / 100) * grossPay;
    var deductions = stateTax + federalTax + healthInsurance + socialSecurityTax;
    var payableSalary = grossPay - deductions + reimbursements + bonus;
    return payableSalary
}

exports.createEmployee = (req, res) => {
    json: req
    var emp = req.body;

    emp.payablesalary = calcPayable(emp);

    console.log('--------------------->' + emp.payablesalary, emp);
    employee.create(emp)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};


exports.updateEmployee = (req, res) => {
    json: req
    var emp = req.body;
    emp.payablesalary = calcPayable(emp);
    var id = req.params.id;
    console.log('update--------------------->' + emp);
    employee.update(emp, {
        where: { id: id }
    })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.deleteEmployee = (req, res) => {
    var employeeId = req.params.id;

    employee
        .destroy({ where: { id: employeeId } })
        .then(stats => {
            console.log(`Delete output: ${JSON.stringify(stats)}`);
            res.json({ message: 'Record deleted successfully' });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.getAllEmployees = (req, res) => {
    console.log('Inside getAllEmployees');
    employee
        .findAll()
        .then(employees => {
            employees.forEach(element => {
                console.log(element.image);
                if(element.image!=null)
                    element.image = element.image.toString('base64');
                console.log(element.image);
            })

            console.log(`get all employees output: ${JSON.stringify(employees)}`);
            res.json(employees);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
}
exports.getEmployeeById = (req, res) => {
    console.log('Inside getAllEmployees');
    var employeeId = req.params.id;
    employee
        .findByPk(employeeId)
        .then(employees => {
            console.log(employees.image);
            if(element.image!=null)
                employees.image = employees.image.toString('base64');
            console.log(employees.image);
            console.log(`get all employees output: ${JSON.stringify(employees)}`);
            res.send(employees);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving employees."
            });
        });
};






// module.exports = function (app, models) {

//     var employeeModel = models.employeeModel;


//     app.get("/api/test", (req, res) => { res.send('server is alive and listening for requests'); });
//     app.post("/api/add", createEmployee);
//     app.get("/api/main", getAllEmployees);
//     app.delete("/api/main/:employeeId", deleteEmployee);
//     app.get("/api/main/:employeeId", getEmployeeById);
//     app.put("/api/main/:employeeId", updateEmployee);





// };