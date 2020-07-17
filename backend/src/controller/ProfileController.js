const Spots = require('../model/Spot')
const User = require('../model/User')
module.exports ={
    async show(req, res){
        const { user } = req.headers;

        const user_to_Done = await User.findById(user);
        if(!user_to_Done){
            return res.status(400).json({error : "User does not exists!"});
        }

        const   spots = await Spots.find({ user : user });

        return res.json(spots);

    }
}