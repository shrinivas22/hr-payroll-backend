
const { sequelize } = require("../Models");
const db = require("../Models");
const employee = db.employee;
const Op = db.Sequelize.Op;


function calcPayable(emp) {

    var grossPay = emp.grosspay == "" ? 0 : emp.grosspay;
    var stateTax = (emp.statetax == "" ? 0 : emp.statetax / 100) * grossPay;
    var federalTax = (emp.federaltax == "" ? 0 : emp.federaltax / 100) * grossPay;
    var reimbursements = emp.reimbursements == "" ? 0 : emp.reimbursements;
    var rating = emp.rating == "" ? 0 : emp.rating;
    var bonus = emp.bonus == "" ? 0 : emp.bonus*rating;
    var healthInsurance = (emp.healthinsurance == "" ? 0 : emp.healthinsurance / 100) * grossPay;
    var socialSecurityTax = (emp.socialsecuritytax == "" ? 0 : emp.socialsecuritytax / 100) * grossPay;
    var deductions = stateTax + federalTax + healthInsurance + socialSecurityTax;
    var payableSalary = grossPay - deductions + reimbursements + bonus;
    return [payableSalary, bonus]
}

exports.createEmployee = (req, res) => {
    var emp = req.body;
    emp.payablesalary = calcPayable(emp)[0];
    emp.bonus= calcPayable(emp)[1];
    console.log('--------------------->' + emp.payablesalary, emp);
    employee.create(emp)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Employee."
            });
        });
};


exports.updateEmployee = (req, res) => {
    var emp = req.body;
    emp.payablesalary = calcPayable(emp)[0];
    emp.bonus= calcPayable(emp)[1];
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
                    err.message || "Some error occurred while Updating the Employee."
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
                    err.message || "Some error occurred while deleting the Employee."
            });
        });
};

exports.getAllEmployees = (req, res) => {
    console.log('Inside getAllEmployees');
    employee
        .findAll()
        .then(employees => {
            console.log(`get all employees output: ${JSON.stringify(employees)}`);
            res.json(employees);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving employees."
            });
        });
}

exports.getEmployeeById = (req, res) => {
    console.log('Inside getAllEmployees');
    var employeeId = req.params.id;
    employee
        .findByPk(employeeId)
        .then(employees => {
            console.log(`get all employees output: ${JSON.stringify(employees)}`);
            res.json(employees);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the employee."
            });
        });
};

