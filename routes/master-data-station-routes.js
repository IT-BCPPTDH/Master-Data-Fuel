const masterDataHandler = require('../handlers/master-data-station-handler')

module.exports = (app) => {
    app.get('/master/station',(req,res) => masterDataHandler.handleGetAllStation(req,res));
    // app.post('/master/station/insert',(req,res) => masterDataHandler.handleInsertSite(req,res));
    // app.get('/master/station/detail/:id',(req,res) => masterDataHandler.handleGetSite(req,res));
    // app.patch('/master/station/delete/:id',(req,res) => masterDataHandler.handleDeleteSite(req,res));
    // app.patch('/master/station/edit',(req,res) => masterDataHandler.handleUpdateSite(req,res));
    app.get('/master/station/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertStation(req,res));
    app.get('/master/station/:name',(req,res) => masterDataHandler.handleStationByName(req,res));
};