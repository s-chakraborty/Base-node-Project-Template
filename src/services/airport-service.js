const { StatusCodes }  = require('http-status-codes');

const  { AirportRepository }  = require('../repositories');

const  AppError  = require('../utils/errors/app-error');



const airportRepository = new AirportRepository();


async function createAirport(data){
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err)=> {
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new airport object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirports(){
    try {
        const airport = await airportRepository.getAll();
        return airport;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id){
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        throw new AppError('Cannot fetch data of the required airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function deleteAirport(id){
    try {
        const airport = await airportRepository.destroy(id);
        return airport;
    } catch (error) {
        throw new AppError('Cannot fetch data of the required airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function updateAirport(id,data){
    try{    
        const airport = await airportRepository.update(id,data);
        if(!airplane[0]){
            throw new AppError('Requested id is not present', StatusCodes.NOT_FOUND);
        }
        return airport;
    } catch(error) {
        console.log(error);
        throw new AppError('Cannot fetch data of the required airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports ={
    createAirport,
    getAirports,
    getAirport,
    deleteAirport,
    updateAirport
}