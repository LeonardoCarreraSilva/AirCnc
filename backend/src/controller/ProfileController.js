const Spots = require('../model/Spot')

module.exports ={
    async show(req, res){
        const { user } = req.headers;
        const   spots = await Spots.find({ user : user });

        return res.json(spots);

    }
}