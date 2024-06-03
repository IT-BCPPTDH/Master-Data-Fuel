const masterActivityController = require('../controllers/master-data-activity-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllActivity(req,res){
    await handleResponseParams(req,res,masterActivityController.getAllActivity,0)
}

async function handleInsertActivity(req,res){
    await handleResponseJson(req,res,masterActivityController.insertActivity)
}

async function handleGetActivity(req,res){
    await handleResponseParams(req,res,masterActivityController.getActivity,1)
}

async function handleDeleteActivity(req,res){
    await handleResponseParams(req,res,masterActivityController.deleteActivity,1)
}

async function handleUpdateActivity(req,res){
    await handleResponseJson(req,res,masterActivityController.updateActivity)
}

async function handleBulkInsertActivity(req,res){
    await handleResponseJson(req,res,masterActivityController.bulkInsertActivity)
}

module.exports = {
    handleGetAllActivity,
    handleInsertActivity,
    handleGetActivity,
    handleDeleteActivity,
    handleUpdateActivity,
    handleBulkInsertActivity
}