const { check, validationResult } = require("express-validator");

exports.registerValidation = () =>  [
    check("email", "enter a valid email").isEmail(),
    check("password", "enter a password with min 7 characters max 15").isLength({ min:7, max:15 }),
];
exports.loginValidation = () =>  [
    check("email", "enter a valid email").isEmail(),
    check("password", "enter a password with min 7 characters max 15").isLength({ min:7, max:15 }),
];
exports.validation = (req, res, next ) => {
    const errors = validationResult(req)
    errors.isEmpty()? next(): res.status(400).json({errors: errors.array()});
};