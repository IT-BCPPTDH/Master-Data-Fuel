const masterController = require('../controllers/master-data-station-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllStation(req,res){
    await handleResponseParams(req,res,masterController.getAllStation,0)
}

// async function handleInsertSite(req,res){
//     await handleResponseJson(req,res,masterController.insertSite)
// }

// async function handleGetSite(req,res){
//     await handleResponseParams(req,res,masterController.getDetailSite,1)
// }

// async function handleDeleteSite(req,res){
//     await handleResponseParams(req,res,masterController.deleteSite,1)
// }

// async function handleUpdateSite(req,res){
//     await handleResponseJson(req,res,masterController.updateSite)
// }

async function handleBulkInsertStation(req,res){
    await handleResponseParams(req,res,masterController.bulkInsert,0)
}

async function handleStationByName(req,res){
    await handleResponseParams(req,res,masterController.getByName,1)
}

module.exports = {
    handleGetAllStation,
    // handleInsertSite,
    // handleGetSite,
    // handleDeleteSite,
    // handleUpdateSite,
    handleBulkInsertStation,
    handleStationByName
}