const masterController = require('../controllers/master-data-location-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllLocation(req,res){
    await handleResponseParams(req,res,masterController.getAllLocation,0)
}

async function handleInsertLocation(req,res){
    await handleResponseJson(req,res,masterController.insertLocation)
}

async function handleGetLocation(req,res){
    await handleResponseParams(req,res,masterController.getDetailLocation,1)
}

async function handleDeleteLocation(req,res){
    await handleResponseParams(req,res,masterController.deleteLocation,1)
}

async function handleUpdateLocation(req,res){
    await handleResponseJson(req,res,masterController.updateLocation)
}

async function handleBulkInsertLocation(req,res){
    await handleResponseJson(req,res,masterController.bulkInsert)
}

module.exports = {
    handleGetAllLocation,
    handleInsertLocation,
    handleGetLocation,
    handleDeleteLocation,
    handleUpdateLocation,
    handleBulkInsertLocation
}