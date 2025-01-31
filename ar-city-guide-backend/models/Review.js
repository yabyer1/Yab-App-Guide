const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User',  required: true},
    poiId: {type: mongoose.Schema.Types.ObjectId, ref: 'POI',  required: true},
    poiId: {type: String, required: true, unique: true},
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Review', reviewSchema);