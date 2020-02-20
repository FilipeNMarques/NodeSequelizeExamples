const User = require('../Models/User')
const Address = require('../Models/Address');

module.exports = {

  async index(req, res) {
    const {user_id} = req.params
    
  const user = await User.findByPk(user_id, {
    include: {association: 'addresses'}
  });

  return res.status(200).json(user)

  },


  async store(req, res) {
    const {user_id} = req.params
    const {zipcode, street, number} = req.body

    const user = User.findByPk(user_id)

    if(!user) {
      return res.status(400).json({Error: "User not found"})
    }
    const address = await Address.create({user_id, zipcode, street, number})
  
    return res.status(200).json(address)
  }


}