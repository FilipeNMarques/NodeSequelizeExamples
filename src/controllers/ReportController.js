const {Op} = require("sequelize")
const User = require('../Models/User')

module.exports ={
  async show(req, res){

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email:{
          [Op.iLike] : "%@gmail.com"
        }
      },
      include: [
        {association: 'addresses', where: {street: 'Rua 31 de março'}},
        {
          association: 'techs',
          required: false,
          where: {
            name:{
              [Op.iLike]: 'React%'
            }
          }
        }
      ]
    })
    return res.json(users)
  }
}