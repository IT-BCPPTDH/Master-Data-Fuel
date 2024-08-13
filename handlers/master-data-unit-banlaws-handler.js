const masterController = require('../controllers/master-data-unit-banlaws.controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllUnitBanlaws(req,res){
    await handleResponseParams(req,res,masterController.getAllUnitBanlaw,0)
}

async function handleInsertUnitBanlaws(req,res){
    await handleResponseJson(req,res,masterController.insertUnitBanlaw)
}

async function handleGetUnitBanlaws(req,res){
    await handleResponseParams(req,res,masterController.getDetailUnitBanlaw,1)
}

async function handleDeleteUnitBanlaws(req,res){
    await handleResponseParams(req,res,masterController.deleteUnitBanlaw,1)
}

async function handleUpdateUnitBanlaws(req,res){
    await handleResponseJson(req,res,masterController.updateUnitBanlaw)
}

async function handleBulkInsertUnitBanlaws(req,res){
    await handleResponseParams(req,res,masterController.bulkInsert,0)
}

module.exports = {
    handleGetAllUnitBanlaws,
    handleInsertUnitBanlaws,
    handleGetUnitBanlaws,
    handleDeleteUnitBanlaws,
    handleUpdateUnitBanlaws,
    handleBulkInsertUnitBanlaws
}