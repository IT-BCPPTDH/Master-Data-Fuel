const masterDataHandler = require('../handlers/master-data-activity-handler')

module.exports = (app) => {
    app.get('/master/activity',(req,res) => masterDataHandler.handleGetAllActivity(req,res));
    app.post('/master/activity/insert',(req,res) => masterDataHandler.handleInsertActivity(req,res));
    app.get('/master/activity/detail/:id',(req,res) => masterDataHandler.handleGetActivity(req,res));
    app.patch('/master/activity/delete/:id',(req,res) => masterDataHandler.handleDeleteActivity(req,res));
    app.patch('/master/activity/edit',(req,res) => masterDataHandler.handleUpdateActivity(req,res));
    app.post('/master/activity/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertActivity(req,res));
};