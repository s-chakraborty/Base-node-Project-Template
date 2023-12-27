const express = require('express');

const {InfoController} = require('../../controllers')

const router = express.Router();

const airPlaneRoutes = require('./aiplane-routes');
const cityRoutes = require('./city-routes');

router.use('/airplane',airPlaneRoutes);

router.use('/city',cityRoutes);

router.get('/info',InfoController.info);


module.exports = router;