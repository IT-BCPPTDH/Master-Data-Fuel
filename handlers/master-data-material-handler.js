const masterController = require('../controllers/master-data-material-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllMaterial(req,res){
    await handleResponseParams(req,res,masterController.getAllMaterial,0)
}

async function handleInsertMaterial(req,res){
    await handleResponseJson(req,res,masterController.insertMaterial)
}

async function handleGetMaterial(req,res){
    await handleResponseParams(req,res,masterController.getDetailMaterial,1)
}

async function handleDeleteMaterial(req,res){
    await handleResponseParams(req,res,masterController.deleteMaterial,1)
}

async function handleUpdateMaterial(req,res){
    await handleResponseJson(req,res,masterController.updateMaterial)
}

async function handleBulkInsertMaterial(req,res){
    await handleResponseJson(req,res,masterController.bulkInsert)
}

module.exports = {
    handleGetAllMaterial,
    handleInsertMaterial,
    handleGetMaterial,
    handleDeleteMaterial,
    handleUpdateMaterial,
    handleBulkInsertMaterial
}