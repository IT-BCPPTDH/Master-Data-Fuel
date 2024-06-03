const masterDataHandler = require('../handlers/master-data-material-handler')

module.exports = (app) => {
    app.get('/master/material',(req,res) => masterDataHandler.handleGetAllMaterial(req,res));
    app.post('/master/material/insert',(req,res) => masterDataHandler.handleInsertMaterial(req,res));
    app.get('/master/material/detail/:id',(req,res) => masterDataHandler.handleGetMaterial(req,res));
    app.patch('/master/material/delete/:id',(req,res) => masterDataHandler.handleDeleteMaterial(req,res));
    app.patch('/master/material/edit',(req,res) => masterDataHandler.handleUpdateMaterial(req,res));
    app.post('/master/material/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertMaterial(req,res));
};