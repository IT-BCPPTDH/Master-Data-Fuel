const masterController = require('../controllers/master-data-site-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllSite(req,res){
    await handleResponseParams(req,res,masterController.getAllSite,0)
}

async function handleInsertSite(req,res){
    await handleResponseJson(req,res,masterController.insertSite)
}

async function handleGetSite(req,res){
    await handleResponseParams(req,res,masterController.getDetailSite,1)
}

async function handleDeleteSite(req,res){
    await handleResponseParams(req,res,masterController.deleteSite,1)
}

async function handleUpdateSite(req,res){
    await handleResponseJson(req,res,masterController.updateSite)
}

async function handleBulkInsertSite(req,res){
    await handleResponseJson(req,res,masterController.bulkInsert)
}

module.exports = {
    handleGetAllSite,
    handleInsertSite,
    handleGetSite,
    handleDeleteSite,
    handleUpdateSite,
    handleBulkInsertSite
}