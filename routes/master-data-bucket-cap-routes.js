const masterDataHandler = require('../handlers/master-data-bucket-cap-handler')

module.exports = (app) => {
    app.get('/master/bucket-cap',(req,res) => masterDataHandler.handleGetAllBucketCap(req,res));
    app.post('/master/bucket-cap/insert',(req,res) => masterDataHandler.handleInsertBucketCap(req,res));
    app.get('/master/bucket-cap/detail/:id',(req,res) => masterDataHandler.handleGetBucketCap(req,res));
    app.patch('/master/bucket-cap/delete/:id',(req,res) => masterDataHandler.handleDeleteBucketCap(req,res));
    app.patch('/master/bucket-cap/edit',(req,res) => masterDataHandler.handleUpdateBucketCap(req,res));
    app.post('/master/bucket-cap/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertBucketCap(req,res));
};