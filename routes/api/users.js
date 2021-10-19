const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');


router.post(
    '/', 
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required').isLength({ min: 6})
    ], 
    (req,res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array() });
        }
        console.log(req.body);
        res.send("users router");
    })

module.exports = router;