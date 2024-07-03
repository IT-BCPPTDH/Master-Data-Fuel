const masterDataHandler = require('../handlers/master-data-operator-handler')

module.exports = (app) => {
    app.get('/master/operator',(req,res) => masterDataHandler.handleGetAllOperator(req,res));
    app.post('/master/operator/insert',(req,res) => masterDataHandler.handleInsertOperator(req,res));
    app.get('/master/operator/detail/:id',(req,res) => masterDataHandler.handleGetOperator(req,res));
    app.put('/master/operator/delete',(req,res) => masterDataHandler.handleDeleteOperator(req,res));
    app.put('/master/operator/edit',(req,res) => masterDataHandler.handleUpdateOperator(req,res));
    app.get('/master/operator/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertOperator(req,res));
    app.get('/master/operator/get-operator-by-unit',(req,res) => masterDataHandler.handleSearchOperator(req,res));
    app.get('/master/operator/get-operator-by-id',(req,res) => masterDataHandler.handleOperatorById(req,res));
};