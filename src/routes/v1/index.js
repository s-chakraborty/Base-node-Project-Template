const express = require('express');

const {InfoController} = require('../../controllers')

const router = express.Router();

const airPlaneRoutes = require('./aiplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');

router.use('/airplane',airPlaneRoutes);

router.use('/city',cityRoutes);

router.use('/airport',airportRoutes);

router.get('/info',InfoController.info);


module.exports = router;