
const sequelize = require("sequelize");

const seq = new sequelize(
    'devesh',
    'root',
    '123456',
    {
        host: 'localhost',
        dialect: 'mysql'
    });

seq.authenticate()
    .then(() => {
        console.log("conected")
    })

    .catch((err) => {
        console.error("not connect", err);

    })

module.exports = seq;
