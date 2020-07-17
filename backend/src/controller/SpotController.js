const { store } = require("./SessionController");

const Spot = require('../model/Spot');
const User = require("../model/User");

module.exports = {
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },


    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user } = req.headers;

        const user_to_Done = await User.findById(user);
        if (!user_to_Done){
            return res.status(400).json({
                error : "User does not exists!"
            })
        }

        const spot = await Spot.create({

            user : user,
            thumbnail: filename,
            company: company,
            techs: techs.split(',').map(tech => tech.trim()),
            price: price
        })


        return res.json( spot );
    }

};