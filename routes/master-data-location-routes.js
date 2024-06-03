const masterDataHandler = require('../handlers/master-data-location-handler')

module.exports = (app) => {
    app.get('/master/location',(req,res) => masterDataHandler.handleGetAllLocation(req,res));
    app.post('/master/location/insert',(req,res) => masterDataHandler.handleInsertLocation(req,res));
    app.get('/master/location/detail/:id',(req,res) => masterDataHandler.handleGetLocation(req,res));
    app.patch('/master/location/delete/:id',(req,res) => masterDataHandler.handleDeleteLocation(req,res));
    app.patch('/master/location/edit',(req,res) => masterDataHandler.handleUpdateLocation(req,res));
    app.post('/master/location/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertLocation(req,res));
};