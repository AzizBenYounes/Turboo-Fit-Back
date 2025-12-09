const User = require("../models/User")

exports.getAllUsers = async (req,res) => {
    try {
        const listUsers = await User.find();
        res.status(200).json({success:{msg:"list of users"},listUsers});

    } catch (error) {
        res.status(400).json({errors: {msg:"Unable to find users"}});
    }

};