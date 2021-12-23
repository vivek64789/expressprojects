const jwt = require('jsonwebtoken');

const Customer = require('../models/Customer');

module.exports.verifyToken = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "mysecretkey", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            console.log(authData.customerId);
            Customer.findOne({_id:authData.customerId}, (err, customer) => {
                if (err) {
                    res.sendStatus(403);
                } else {
                    req.customer = customer;
                    console.log(customer);
                    next();
                }
            })
           
        }
    });
    }catch(err){
        res.sendJson(403, {
            message: "Invalid token",
            error: err,
        })
    }
}