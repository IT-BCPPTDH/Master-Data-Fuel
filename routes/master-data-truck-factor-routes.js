const masterDataHandler = require('../handlers/master-data-truck-handler')

module.exports = (app) => {
    app.get('/master/truck-factor',(req,res) => masterDataHandler.handleGetAllTruckFactor(req,res));
    app.post('/master/truck-factor/insert',(req,res) => masterDataHandler.handleInsertTruckFactor(req,res));
    app.get('/master/truck-factor/detail/:id',(req,res) => masterDataHandler.handleGetTruckFactor(req,res));
    app.patch('/master/truck-factor/delete/:id',(req,res) => masterDataHandler.handleDeleteTruckFactor(req,res));
    app.patch('/master/truck-factor/edit',(req,res) => masterDataHandler.handleUpdateTruckFactor(req,res));
    app.post('/master/truck-factor/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertTruckFactor(req,res));
};