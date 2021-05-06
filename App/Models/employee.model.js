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
      grosspay: {
        type: Sequelize.INTEGER
      },
      statetax: {
        type: Sequelize.DECIMAL(3,2)
      },
      federaltax: {
        type: Sequelize.DECIMAL(3,2)
      },
      healthinsurance: {
        type: Sequelize.DECIMAL(3,2)
      },
      socialsecuritytax: {
        type: Sequelize.DECIMAL(3,2)
      },
      reimbursements: {
        type: Sequelize.INTEGER
      },
      bonus: {
        type: Sequelize.INTEGER
      },
      payablesalary: {
        type: Sequelize.DECIMAL(20,2)
      },
    },
    {
    tableName: 'employees',
    timestamps: false,
    }
    );
  
    return Employee;
  };