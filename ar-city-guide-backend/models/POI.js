const mongoose = require('mongoose');
const poiSchema = new mongoose.Schema({
    name: {type: String, required : true},
    description: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    category: {type: String, required: true},
    averageRating: {type: Number, default: 0},
});
module.exports = mongoose.model('POI', poiSchema);