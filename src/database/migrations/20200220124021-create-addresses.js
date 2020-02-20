'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('addresses', {
         id: {
           type:  Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           alloNull: false
         },
         user_id:{
           type: Sequelize.INTEGER,
           allowNull: false,
           references: {model: 'users', key: 'id'},
           onUpdate: 'CASCADE',
           onDelete: 'CASCADE',
         },
         zipcode: {
           type: Sequelize.STRING,
           alloNull: false
         },
         street: {
           type: Sequelize.STRING,
           alloNull: false,
         
         },
         number: {
          type: Sequelize.INTEGER,
          alloNull: false,
        
        },
         created_at:{
           type: Sequelize.DATE,
           alloNull:false,
         },
         updated_at:{
           type: Sequelize.DATE,
           alloNull: false
         }
        
        });
 
  },

  down: (queryInterface) => {

      return queryInterface.dropTable('addresses');
 
  }
};
