const Cheers = require('../models/cheers')
exports.getData = () => async (req,res,next) => {
    let cheers
    try{
        cheers = await Cheers.findAll({})
    } catch(e) {
        console.log(e)
        res.status(500).json({
            error: "Server Error!"
        })
    }

    res.status(200).json(cheers)
}

exports.update = () => async (req,res,next) => {
    let {country} = req.body
    try{
        let cheers = await Cheers.findOne({where: {country: country}})
        await Cheers.update({cheers: cheers.cheers + 1},{where: {country: country}})
    } catch(e) {
        console.log(e)
        res.status(500).json({
            error: "Server Error!"
        })
    }

    res.status(200).json({
        message: "Successfully Cheered!"
    })
}