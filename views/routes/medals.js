const Medals = require('../models/Medals')
exports.getMedals = () => async (req, res, next) => {
  let MedalList
  try{
    MedalList = await Medals.findAll()
  } catch(e) {
    console.log(e)
    res.status(500).json({
      error: "Error with the database"
    })
  }
  res.status(200).json(MedalList)
}

exports.increaseMedal = () => async (req,res,next) => {
  let {country, medal} = req.body
  try{
    if(medal === 'gold') {
      let data = await Medals.findOne({where: {country: country}})
      await Medals.update({gold: data.gold+1}, {where: {country: country}})
    }
    if(medal === 'silver') {
      let data =await  Medals.findOne({where: {country: country}})
      await Medals.update({silver: data.silver+1}, {where: {country: country}})
    }
    if(medal === 'bronze') {
      let data = await Medals.findOne({where: {country: country}})
      await Medals.update({bronze: data.bronze+1}, {where: {country: country}})
    }
  } catch(e) {
    console.log(e)
  }

  res.status(200).json({
    message: "Successfully updated the medal!"
  })
}
