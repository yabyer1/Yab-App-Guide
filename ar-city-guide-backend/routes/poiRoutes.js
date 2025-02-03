const express = require('express');
const { getPOIs } = require('../controllers/poiController');
const router = express.Router();
router.post('/', getPOIs);
module.exports = router;