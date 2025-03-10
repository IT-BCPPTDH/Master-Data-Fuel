const masterOperatorController = require('../controllers/master-operator-fuel')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllOperatorFuel(req,res){
    await handleResponseParams(req,res,masterOperatorController.getFuelOperator,0)
}

async function handleInsertOperatorFuel(req,res){
    await handleResponseJson(req,res,masterOperatorController.insertFuelOperator)
}

async function handleGetOperator(req,res){
    await handleResponseParams(req,res,masterOperatorController.getFuelOperatorId,1)
}

async function handleDeleteOperatorFuel(req,res){
    await handleResponseParams(req,res,masterOperatorController.deleteFuelOperator,1)
}

async function handleUpdateOperatorFuel(req,res){
    await handleResponseJson(req,res,masterOperatorController.updateFuelOperator)
}

module.exports = {
    handleGetAllOperatorFuel,
    handleInsertOperatorFuel,
    handleGetOperator,
    handleDeleteOperatorFuel,
    handleUpdateOperatorFuel
}