const Schedule = require("../models/event")

exports.getData = () => async (req,res,next) => {
  let Schedules
  try{
    Schedules = await Schedule.findAll({})
  } catch(e) {
    console.log(e)
    res.status(500).json({
      error: "Server Error!!"
    })
  }

  res.status(200).json(Schedules)
}

exports.getDataFilter = () => async (req,res,next) => {
  let {date} = req.params
  let Schedules
  try{
    Schedules = await Schedule.findAll({where: {date: date}})
  } catch(e) {
    console.log(e)
    res.status(500).json({
      error: "Server Error!!"
    })
  }

  res.status(200).json(Schedules)
}
