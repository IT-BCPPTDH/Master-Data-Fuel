const masterController = require('../controllers/master-data-elipses-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllMasterElipses(req,res){
    await handleResponseParams(req,res,masterController.getAllMasterElipse,0)
}

async function handleInsertMasterElipses(req,res){
    await handleResponseJson(req,res,masterController.insertMasterElipse)
}

async function handleGetMasterElipses(req,res){
    await handleResponseParams(req,res,masterController.getDetailMasterElipse,1)
}

async function handleDeleteMasterElipses(req,res){
    await handleResponseParams(req,res,masterController.deleteMasterElipse,1)
}

async function handleUpdateMasterElipses(req,res){
    await handleResponseJson(req,res,masterController.updateMasterElipse)
}

async function handleBulkInsertMasterElipses(req,res){
    await handleResponseParams(req,res,masterController.bulkInsert,0)
}

module.exports = {
    handleGetAllMasterElipses,
    handleInsertMasterElipses,
    handleGetMasterElipses,
    handleDeleteMasterElipses,
    handleUpdateMasterElipses,
    handleBulkInsertMasterElipses
}