const masterDataHandler = require('../handlers/master-data-site-handler')

module.exports = (app) => {
    app.get('/master/site',(req,res) => masterDataHandler.handleGetAllSite(req,res));
    app.post('/master/site/insert',(req,res) => masterDataHandler.handleInsertSite(req,res));
    app.get('/master/site/detail/:id',(req,res) => masterDataHandler.handleGetSite(req,res));
    app.patch('/master/site/delete/:id',(req,res) => masterDataHandler.handleDeleteSite(req,res));
    app.patch('/master/site/edit',(req,res) => masterDataHandler.handleUpdateSite(req,res));
    app.post('/master/site/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertSite(req,res));
};