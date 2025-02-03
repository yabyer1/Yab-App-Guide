const jwt = require('jsonwebtoken');
const authMiddleWare = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer', '').trim();
    if(!token) return res.status(401).json({message: 'Access denied'});
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.userId = decoded.userId;
        next();
    }
    catch(err){
             res.status(401).json({message: 'Invalid Token'});
    }
}
module.exports = authMiddleWare;