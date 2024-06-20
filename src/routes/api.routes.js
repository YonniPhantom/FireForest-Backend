const express = require('express');
const router = express.Router();

const { predict } = require('../middlewares/api.middleware');

router.post('/predict', predict);

module.exports = router; 