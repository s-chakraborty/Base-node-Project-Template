const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');
const { SuccessResponse,ErrorResponse } = require('../utils/common');


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
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function getAirplanes(req,res){
    try {
        const airplane = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}


async function getAirplane(req,res){
    try {
        const airplanes = await AirplaneService.getAirplane(req.params.id.body);
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}


async function deleteAirplane(req,res){
    try {
        const airplane = await AirplaneService.deleteAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.ACCEPTED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function updateAirplane(req,res) {
    try{
        requestBody = {};
        requestData = req.body;
        if(req.body.modelNumber){
            requestBody.modelNumber = requestData.modelNumber;
        }
        if(req.body.capacity){
            requestBody.capacity = requestData.capacity;
        }
        
        const airplane = await AirplaneService.updateAirplane(req.params.id, requestBody);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.ACCEPTED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane
}