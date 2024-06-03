const masterController = require('../controllers/master-data-prod-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllProdBudget(req,res){
    await handleResponseParams(req,res,masterController.getAllProdBudget,0)
}

async function handleInsertProdBudget(req,res){
    await handleResponseJson(req,res,masterController.insertProdBudget)
}

async function handleGetProdBudget(req,res){
    await handleResponseParams(req,res,masterController.getDetailProdBudget,1)
}

async function handleDeleteProdBudget(req,res){
    await handleResponseParams(req,res,masterController.deleteProdBudget,1)
}

async function handleUpdateProdBudget(req,res){
    await handleResponseJson(req,res,masterController.updateProdBudget)
}

async function handleBulkInsertProdBudget(req,res){
    await handleResponseJson(req,res,masterController.bulkInsert)
}

module.exports = {
    handleGetAllProdBudget,
    handleInsertProdBudget,
    handleGetProdBudget,
    handleDeleteProdBudget,
    handleUpdateProdBudget,
    handleBulkInsertProdBudget
}