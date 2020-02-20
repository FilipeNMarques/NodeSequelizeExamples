'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('techs', {
         id: {
           type:  Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           alloNull: false
         },
         name:{
           type: Sequelize.STRING,
           allowNull: false,
           
       
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

      return queryInterface.dropTable('techs');
 
  }
};
