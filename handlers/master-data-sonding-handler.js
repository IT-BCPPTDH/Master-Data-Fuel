const masterController = require('../controllers/master-data-sonding-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllSondingMaster(req,res){
    await handleResponseParams(req,res,masterController.getAllSondingMaster,0)
}

async function handleInsertSondingMaster(req,res){
    await handleResponseJson(req,res,masterController.insertSondingMaster)
}

async function handleGetSondingMaster(req,res){
    await handleResponseParams(req,res,masterController.getDetailSondingMaster,1)
}

async function handleDeleteSondingMaster(req,res){
    await handleResponseParams(req,res,masterController.deleteSondingMaster,1)
}

async function handleUpdateSondingMaster(req,res){
    await handleResponseJson(req,res,masterController.updateSondingMaster)
}

async function handleBulkInsertSondingMaster(req,res){
    await handleResponseParams(req,res,masterController.bulkInsert,0)
}

async function handleByStation(req,res){
    await handleResponseParams(req,res,masterController.getByStation,1)
}

module.exports = {
    handleGetAllSondingMaster,
    handleInsertSondingMaster,
    handleGetSondingMaster,
    handleDeleteSondingMaster,
    handleUpdateSondingMaster,
    handleBulkInsertSondingMaster,
    handleByStation
}