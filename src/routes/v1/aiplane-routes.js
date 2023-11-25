const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');

const router = express.Router();

// /api/v1/airplanes POST
router.post('/', 
        AirplaneMiddleware.validateCreateRequest,
        AirplaneController.createAirplane);

router.get('/',
        AirplaneController.getAirplanes);

router.get('/:id',
        AirplaneController.getAirplane);

router.delete('/:id',
        AirplaneController.deleteAirplane);

router.patch('/:id',
        AirplaneMiddleware.validateUpdateRequest,
        AirplaneController.updateAirplane);
        
module.exports = router;