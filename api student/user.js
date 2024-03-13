const seq = require('./config');
const Sequelize = require('sequelize');

const User = seq.define("students",{
    name : Sequelize.STRING,
    clas : Sequelize.INTEGER
},
{
  freezeTableName : true,
  timestamps : false 
})



module.exports = User;

