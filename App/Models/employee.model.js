
  
module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employees", {
      id:{
        type: Sequelize.INTEGER,primaryKey: true, autoIncrement: true, allowNull: false
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      SSN: {
        type: Sequelize.STRING, allowNull: false
      },
      designation:{
        type: Sequelize.STRING
      },
      department:{
        type: Sequelize.STRING
      },
      rating:{
        type: Sequelize.INTEGER,
      },
      // image:{
      //   type: Sequelize.BLOB('long')
      // },
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
    },
    {
    tableName: 'employees',
    timestamps: false,
    }
    );
  
    return Employee;
  };