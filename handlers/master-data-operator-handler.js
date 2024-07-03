const masterOperatorController = require('../controllers/master-data-operator-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllOperator(req,res){
    await handleResponseParams(req,res,masterOperatorController.getAllOperator,0)
}

async function handleInsertOperator(req,res){
    await handleResponseJson(req,res,masterOperatorController.insertOperator)
}

async function handleGetOperator(req,res){
    await handleResponseParams(req,res,masterOperatorController.getOperator,1)
}

async function handleDeleteOperator(req,res){
    await handleResponseJson(req,res,masterOperatorController.deleteOperator,0)
}

async function handleUpdateOperator(req,res){
    await handleResponseJson(req,res,masterOperatorController.updateOperator)
}

async function handleBulkInsertOperator(req,res){
    await handleResponseParams(req,res, masterOperatorController.bulkInsertOperator, 0)
}

async function handleSearchOperator(req,res){
    await handleResponseJson(req,res, masterOperatorController.getOperatorByUnit, 0)
}

async function handleOperatorById(req,res){
    await handleResponseParams(req,res, masterOperatorController.getOperatorById, 2)
}

module.exports = {
    handleGetAllOperator,
    handleInsertOperator,
    handleGetOperator,
    handleDeleteOperator,
    handleUpdateOperator,
    handleBulkInsertOperator,
    handleSearchOperator,
    handleOperatorById
}