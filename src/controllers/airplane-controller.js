const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');
const { response } = require('express');

/**
 * POST : /airplanes 
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
async function createAirplane(req, res) {
    try {
        
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success:  true,
                    message: 'successfully created an airplane',
                    data: airplane,
                    error: {}
                });
    } catch (error) {
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success:  false,
            message: "not succesfull",
            data: {},
            error: {}
        });
    }
}

module.exports = {
    createAirplane
}