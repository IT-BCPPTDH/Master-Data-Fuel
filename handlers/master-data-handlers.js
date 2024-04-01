const { getAllActivity, getAllUnit } = require('../controllers/master-data-controller.js')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')


module.exports = {
    handleGetAllActivity,
    handleGetAllUnit
}

async function handleGetAllActivity(req,res){
    await handleResponseParams(req,res,getAllActivity,0)
}

async function handleGetAllUnit(req,res){
    await handleResponseParams(req,res,getAllUnit,0)
}

