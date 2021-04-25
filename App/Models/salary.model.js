    module.exports = (sequelize, Sequelize) => {
        const Salary = sequelize.define("salary", {
          transactionid:{
            type: Sequelize.UUID
          },
          employeeid: {
            type: Sequelize.INTEGER
          },
          grosspay: {
            type: Sequelize.INTEGER
          },
          statetax: {
            type: Sequelize.INTEGER
          },
          federaltax: {
            type: Sequelize.INTEGER
          },
          healthinsurance: {
            type: Sequelize.INTEGER
          },
          socialsecuritytax: {
            type: Sequelize.INTEGER
          },
          reimbursements: {
            type: Sequelize.INTEGER
          },
          bonus: {
            type: Sequelize.INTEGER
          },
          payablesalary: {
            type: Sequelize.INTEGER
          },
          month: {
            type: Sequelize.INTEGER
          },
          year:{
            type: Sequelize.INTEGER
          }

        });
      
        return Salary;
      };