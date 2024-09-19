const masterController = require('../controllers/master-data-unit-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllUnit(req,res){
    await handleResponseParams(req,res,masterController.getAllUnit,0)
}

async function handleInsertUnit(req,res){
    await handleResponseJson(req,res,masterController.insertUnit)
}

async function handleGetUnit(req,res){
    await handleResponseParams(req,res,masterController.getDetailUnit,1)
}

async function handleDeleteUnit(req,res){
    await handleResponseParams(req,res,masterController.deleteUnit,1)
}

async function handleUpdateUnit(req,res){
    await handleResponseJson(req,res,masterController.updateUnit)
}

async function handleBulkInsertUnit(req,res){
    await handleResponseJson(req,res,masterController.bulkInsert)
}

async function handleConditionalUnit(req,res){
    await handleResponseJson(req,res,masterController.conditionalUnit)
}

async function handleUnitRole(req,res){
    await handleResponseParams(req,res,masterController.updateSetupUnit, 0)
}

async function handleGetUnitHLV(req,res){
    await handleResponseParams(req,res,masterController.getAllUnitLV, 0)
}

module.exports = {
    handleGetAllUnit,
    handleInsertUnit,
    handleGetUnit,
    handleDeleteUnit,
    handleUpdateUnit,
    handleBulkInsertUnit,
    handleConditionalUnit,
    handleUnitRole,
    handleGetUnitHLV
}