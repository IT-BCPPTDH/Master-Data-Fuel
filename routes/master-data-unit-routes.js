const masterDataHandler = require('../handlers/master-data-unit-handler')

module.exports = (app) => {
    app.get('/master/unit',(req,res) => masterDataHandler.handleGetAllUnit(req,res));
    app.get('/master/unit/update-unit',(req,res) => masterDataHandler.handleUnitRole(req,res));
    app.post('/master/unit/insert',(req,res) => masterDataHandler.handleInsertUnit(req,res));
    app.get('/master/unit/detail/:id',(req,res) => masterDataHandler.handleGetUnit(req,res));
    app.patch('/master/unit/delete/:id',(req,res) => masterDataHandler.handleDeleteUnit(req,res));
    app.patch('/master/unit/edit',(req,res) => masterDataHandler.handleUpdateUnit(req,res));
    app.get('/master/unit/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertUnit(req,res));
    app.post('/master/unit/fetch-data',(req,res) => masterDataHandler.handleConditionalUnit(req,res));
    app.get('/master/unit/get-hlv',(req,res) => masterDataHandler.handleGetUnitHLV(req,res));
};