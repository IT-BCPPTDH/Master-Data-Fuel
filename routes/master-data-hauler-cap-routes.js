const masterDataHandler = require('../handlers/master-data-hauler-cap-handler')

module.exports = (app) => {
    app.get('/master/hauler-cap',(req,res) => masterDataHandler.handleGetAllHaulerCap(req,res));
    app.post('/master/hauler-cap/insert',(req,res) => masterDataHandler.handleInsertHaulerCap(req,res));
    app.get('/master/hauler-cap/detail/:id',(req,res) => masterDataHandler.handleGetHaulerCap(req,res));
    app.patch('/master/hauler-cap/delete/:id',(req,res) => masterDataHandler.handleDeleteHaulerCap(req,res));
    app.patch('/master/hauler-cap/edit',(req,res) => masterDataHandler.handleUpdateHaulerCap(req,res));
    app.post('/master/hauler-cap/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertHaulerCap(req,res));
};