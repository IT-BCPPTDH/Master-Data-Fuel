const masterController = require('../controllers/master-data-station-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllStation(req,res){
    await handleResponseParams(req,res,masterController.getAllStation,0)
}

async function handleInsertStation(req,res){
    await handleResponseJson(req,res,masterController.insertStation)
}

async function handleGetStation(req,res){
    await handleResponseParams(req,res,masterController.getDetailStation,1)
}

async function handleDeleteStation(req,res){
    await handleResponseParams(req,res,masterController.deleteStation,1)
}

async function handleUpdateStation(req,res){
    await handleResponseJson(req,res,masterController.updateStation)
}

async function handleBulkInsertStation(req,res){
    await handleResponseParams(req,res,masterController.bulkInsert,0)
}

async function handleStationByName(req,res){
    await handleResponseParams(req,res,masterController.getByName,1)
}

module.exports = {
    handleGetAllStation,
    handleInsertStation,
    handleGetStation,
    handleDeleteStation,
    handleUpdateStation,
    handleBulkInsertStation,
    handleStationByName
}