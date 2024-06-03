const masterController = require('../controllers/master-data-truck-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllTruckFactor(req,res){
    await handleResponseParams(req,res,masterController.getAllTruckFactor,0)
}

async function handleInsertTruckFactor(req,res){
    await handleResponseJson(req,res,masterController.insertTruckFactor)
}

async function handleGetTruckFactor(req,res){
    await handleResponseParams(req,res,masterController.getDetailTruckFactor,1)
}

async function handleDeleteTruckFactor(req,res){
    await handleResponseParams(req,res,masterController.deleteTruckFactor,1)
}

async function handleUpdateTruckFactor(req,res){
    await handleResponseJson(req,res,masterController.updateTruckFactor)
}

async function handleBulkInsertTruckFactor(req,res){
    await handleResponseJson(req,res,masterController.bulkInsert)
}

module.exports = {
    handleGetAllTruckFactor,
    handleInsertTruckFactor,
    handleGetTruckFactor,
    handleDeleteTruckFactor,
    handleUpdateTruckFactor,
    handleBulkInsertTruckFactor
}