const express = require('express');
const router = express.Router();
const parcels = require('./parcels.route');

router.use('/api/v1/parcels', parcels)
router.all('/', (req, res) => {
    res.json({ message: "welcome to the awesome api"});
});

module.exports = router;