const masterController = require('../controllers/master-data-hauler-cap-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllHaulerCap(req,res){
    await handleResponseParams(req,res,masterController.getAllHaulerCap,0)
}

async function handleInsertHaulerCap(req,res){
    await handleResponseJson(req,res,masterController.insertHaulerCap)
}

async function handleGetHaulerCap(req,res){
    await handleResponseParams(req,res,masterController.getDetailHaulerCap,1)
}

async function handleDeleteHaulerCap(req,res){
    await handleResponseParams(req,res,masterController.deleteHaulerCap,1)
}

async function handleUpdateHaulerCap(req,res){
    await handleResponseJson(req,res,masterController.updateHaulerCap)
}

async function handleBulkInsertHaulerCap(req,res){
    await handleResponseJson(req,res,masterController.bulkInsert)
}

module.exports = {
    handleGetAllHaulerCap,
    handleInsertHaulerCap,
    handleGetHaulerCap,
    handleDeleteHaulerCap,
    handleUpdateHaulerCap,
    handleBulkInsertHaulerCap
}