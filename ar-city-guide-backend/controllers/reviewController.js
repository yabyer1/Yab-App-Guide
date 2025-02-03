const Review = require('../models/Review');
const addReview = async (req, res) => {
    const {poiId, rating, comment} = req.body;
    try{
            const review = new Review({userId: req.userId}, poiId, rating, comment);
            await review.save();
            res.status(201).json(review);
    }
    catch(err){
                res.status(500).json({message: 'Server Error'});
    }
};
module.exports(addReview);