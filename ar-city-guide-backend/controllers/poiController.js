const POI = require('../models/POI');
const getPOIs = async (req, res) => {
    const latitude = parseFloat(req.query.latitude);
    const longitude = parseFloat(req.query.longitude);
    const radius = parseFloat(req.query.radius);
    const category = req.query.category;
    if(isNaN(latitude) ||  isNaN(longitude) || isNaN(radius)){
        return res.status(400).json({ message: "invalid latitude, longitdue, or radius"});
    }
    try{
        const pois = await POI.find(
            {
                category,
                location: {
                    $geoWithin : {
                        $centerSphere: [[longitude, latitude], radius / 6378.1]
                    }
                }

            }
        );
        res.json(pois);
    } catch(err){
        res.status(500).json({message: 'Server Error'});
    }
};
module.exports = {getPOIs};