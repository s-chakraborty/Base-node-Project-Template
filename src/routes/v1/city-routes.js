const express = require('express');

const { CityController } = require('../../controllers');
//const { AirplaneMiddleware } = require('../../middlewares');

const { CityMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/', 
            CityMiddleware.validateCreateRequest,
            CityController.createCity);


router.delete('/:id',
             CityController.deleteCity);


router.patch('/:id',
            CityController.updateCity);

        

module.exports = router;