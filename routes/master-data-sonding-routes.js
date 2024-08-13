const masterDataHandler = require('../handlers/master-data-sonding-handler')

module.exports = (app) => {
    app.get('/master/sonding-master',(req,res) => masterDataHandler.handleGetAllSondingMaster(req,res));
    app.post('/master/sonding-master/insert',(req,res) => masterDataHandler.handleInsertSondingMaster(req,res));
    app.get('/master/sonding-master/detail/:id',(req,res) => masterDataHandler.handleGetSondingMaster(req,res));
    app.patch('/master/sonding-master/delete/:id',(req,res) => masterDataHandler.handleDeleteSondingMaster(req,res));
    app.patch('/master/sonding-master/edit',(req,res) => masterDataHandler.handleUpdateSondingMaster(req,res));
    app.get('/master/sonding-master/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertSondingMaster(req,res));
};