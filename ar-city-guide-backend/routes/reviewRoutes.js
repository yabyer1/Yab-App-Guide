const express = require('express');
const authMiddleWare   = require('../middleware/authMiddleware');
const {addReview} = require('../controllers/reviewController');
const router = express.Router();
router.post('/', authMiddleWare, addReview);
module.exports = router;