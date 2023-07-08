const express = require('express');

const {InfoController} = require('../../controllers')

const router = express.Router();

const airPlaneRoutes = require('./aiplane-routes');

router.use('/airplane',airPlaneRoutes);

router.get('/info',InfoController.info);

module.exports = router;