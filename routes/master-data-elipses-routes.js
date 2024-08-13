const masterDataHandler = require('../handlers/master-data-elipses-handler')

module.exports = (app) => {
    app.get('/master/master-elipses',(req,res) => masterDataHandler.handleGetAllMasterElipses(req,res));
    app.post('/master/master-elipses/insert',(req,res) => masterDataHandler.handleInsertMasterElipses(req,res));
    app.get('/master/master-elipses/detail/:id',(req,res) => masterDataHandler.handleGetMasterElipses(req,res));
    app.patch('/master/master-elipses/delete/:id',(req,res) => masterDataHandler.handleDeleteMasterElipses(req,res));
    app.patch('/master/master-elipses/edit',(req,res) => masterDataHandler.handleUpdateMasterElipses(req,res));
    app.get('/master/master-elipses/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertMasterElipses(req,res));
};