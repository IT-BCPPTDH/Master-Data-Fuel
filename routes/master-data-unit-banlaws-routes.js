const masterDataHandler = require('../handlers/master-data-unit-banlaws-handler')

module.exports = (app) => {
    app.get('/master/unit-banlaws',(req,res) => masterDataHandler.handleGetAllUnitBanlaws(req,res));
    app.post('/master/unit-banlaws/insert',(req,res) => masterDataHandler.handleInsertUnitBanlaws(req,res));
    app.get('/master/unit-banlaws/detail/:id',(req,res) => masterDataHandler.handleGetUnitBanlaws(req,res));
    app.patch('/master/unit-banlaws/delete/:id',(req,res) => masterDataHandler.handleDeleteUnitBanlaws(req,res));
    app.patch('/master/unit-banlaws/edit',(req,res) => masterDataHandler.handleUpdateUnitBanlaws(req,res));
    app.get('/master/unit-banlaws/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertUnitBanlaws(req,res));
};