const Sequelize = require('sequelize');

// Creating new Object of Sequelize
const sequelize = new Sequelize(
    // database name
	'nivas', 
    // database username
	'root',
    // database password
	'LNGupta@123', {
		dialect: 'mysql',		
		host: 'localhost'
	}
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.oddNums = require("../models/model.js")(sequelize, Sequelize);
// db.sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   });
db.sequelize.sync();
module.exports = db;
