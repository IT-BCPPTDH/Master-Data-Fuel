const masterController = require('../controllers/master-data-bucket-cap-controller')
const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleGetAllBucketCap(req,res){
    await handleResponseParams(req,res,masterController.getAllBucketCap,0)
}

async function handleInsertBucketCap(req,res){
    await handleResponseJson(req,res,masterController.insertBucketCap)
}

async function handleGetBucketCap(req,res){
    await handleResponseParams(req,res,masterController.getDetailBucket,1)
}

async function handleDeleteBucketCap(req,res){
    await handleResponseParams(req,res,masterController.deleteBucketCap,1)
}

async function handleUpdateBucketCap(req,res){
    await handleResponseJson(req,res,masterController.updateBucketCap)
}

async function handleBulkInsertBucketCap(req,res){
    await handleResponseJson(req,res,masterController.bulkInsert)
}

module.exports = {
    handleGetAllBucketCap,
    handleInsertBucketCap,
    handleGetBucketCap,
    handleDeleteBucketCap,
    handleUpdateBucketCap,
    handleBulkInsertBucketCap
}