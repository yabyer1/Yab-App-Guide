const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async(req, res) => {
    const {name, email, password} = req.body;
    try{
    let user = await User.findOne({email});
    if(user) return res.status(400).json({message: 'User already exists'});
    user = new User({name, email, password});
    await user.save();
    const token = jwt.sign({userId: user._id}, process.env.JWT_Secret, {expiresIn: '1h'});
    res.status(201).json({token});
    }
    catch(err){
        res.status(500).json({message: 'Server Error'});
    }
};
    const login = async(req, res) => {
        const {email, password} = req.body;
        try{
            const user = await User.findOne({email});
            if(!user)
                return res.status(400).json({message: 'Invalid credentials'});
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) return res.status(400).json({message: 'Invalid credentials'});
            const token = jwt.sign({userId: user._id}, process.env.JWT_Secret, {expiresIn: '1h'});
            res.json({token});

        } catch(err){
            res.status(500).json({message: 'Seerver Error'});
        }
    };
module.exports = {register, login};


