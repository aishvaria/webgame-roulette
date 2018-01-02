'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
 return queryInterface.createTable(
 'users',
 {
 player_id: {
 type: Sequelize.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },

 username: {
 type: Sequelize.STRING,
 allowNull: false
 },

 email: {
 type:Sequelize.STRING,
 allowNull: false
 },

 password: {
 type:Sequelize.STRING,
 allowNull: false
 }
 }
 );
},
down: (queryInterface, Sequelize) => {
return queryInterface.dropTable('users');
}
};
