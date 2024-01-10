const { StatusCodes } = require('http-status-codes');

const { AirportService } = require('../services');
const { SuccessResponse,ErrorResponse } = require('../utils/common');


async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.data = airport;
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

async function getAirports(req,res){
    try {
        const airport = await AirportService.getAirports();
        SuccessResponse.data = airport;
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


async function getAirport(req,res){
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
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


async function deleteAirport(req,res){
    try {
        const airport = await AirportService.deleteAirport(req.params.id);
        SuccessResponse.data = airport;
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

async function updateAirport(req,res) {
    try{
        requestBody = {};
        requestData = req.body;
        if(req.body.name){
            requestBody.name = requestData.name;
        }
        if(req.body.code){
            requestBody.code = requestData.code;
        }
        if(req.body.address){
            requestBody.address = requestData.address;
        }
        if(req.body.cityId){
            requestBody.cityId = requestData.cityId;
        }
        const airport = await AirportService.updateAirport(req.params.id, requestBody);
        SuccessResponse.data = airport;
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
    createAirport,
    getAirports,
    getAirport,
    deleteAirport,
    updateAirport
}