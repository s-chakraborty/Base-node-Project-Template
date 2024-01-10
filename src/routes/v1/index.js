const express = require('express');

const {InfoController} = require('../../controllers')

const router = express.Router();

const airPlaneRoutes = require('./aiplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');

router.use('/airplane',airPlaneRoutes);

router.use('/city',cityRoutes);

router.use('/airport',airportRoutes);

router.use('/flight',flightRoutes);

router.get('/info',InfoController.info);


module.exports = router;