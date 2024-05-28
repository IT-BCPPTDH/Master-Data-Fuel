const masterController = require('../controllers/master-data-controller.js')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')


async function handleGetAllActivity(req,res){
    await handleResponseParams(req,res,masterController.getAllActivity,0)
}

async function handleGetAllUnit(req,res){
    await handleResponseParams(req,res,masterController.getAllUnit,0)
}




module.exports = {
    handleGetAllActivity,
    handleGetAllUnit
}