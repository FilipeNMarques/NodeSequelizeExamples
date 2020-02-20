const Tech = require('../Models/Tech')
const User = require('../Models/User')


module.exports={

  async index(req, res){
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      include: {association: 'techs', through: { attributes: [] }}
    })

    return res.status(200).json(user.techs)

  },


  async store(req, res){
    const {user_id} = req.params;
    const {name} = req.body

    const user = await User.findByPk(user_id)

    if(!user){
      return res.status(400).json({Error: "User not found"})
    }

    const [ tech ] = await Tech.findOrCreate({
      where: { name }
    });
    await user.addTech(tech)

    return res.json(tech)
  },

  async delete(req, res) {
    const {user_id} = req.params;
    const {name} = req.body

    const user = await User.findByPk(user_id)

    if(!user){
      return res.status(400).json({Error: "User not found"})
    }
    const tech = await Tech.findOne({
      where: {name}
    })

    await user.removeTech(tech)

    return res.status(200).json({Removed: 'ok'})
  }
}