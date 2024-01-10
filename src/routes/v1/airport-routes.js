const express = require('express');

const { AirportController } = require('../../controllers');
const { AirportMiddleware } = require('../../middlewares');

const router = express.Router();

// /api/v1/airplanes POST
router.post('/', 
        AirportMiddleware.validateCreateRequest,
        AirportController.createAirport);

router.get('/',
        AirportController.getAirports);

router.get('/:id',
        AirportController.getAirport);

router.delete('/:id',
        AirportController.deleteAirport);

router.patch('/:id',
        AirportMiddleware.validateUpdateRequest,
        AirportController.updateAirport);
        
module.exports = router;