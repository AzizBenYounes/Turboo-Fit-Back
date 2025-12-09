const jwt = require('jsonwebtoken');
const User = require('../models/User');
const isAuth = async (req, res, next) => {
    try {
        //token exists?
        
        const token = req.headers["authorization"];
        if( !token ) {
            return res.status(400).json({ errors: {msg:"No Token"}});
        }
        //user that matches this toke
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        const foundUser = await User.findOne({ _id: decode.id });
            if  (!foundUser) {
            return res.status(400).json({ errors :{ msg: "user not found" } });
        }
        req.user = foundUser;
        next();
    } catch (error) {
        res.status(400).json({ errors: { msg: "impossible to verify" }, error });
    }
};
        module.exports = isAuth;