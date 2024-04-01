const masterDataHandler = require('../handlers/master-data-handlers')

module.exports = (app) => {
    app.get('/master/activity',(req,res) => masterDataHandler.handleGetAllActivity(req,res));
    app.get('/master/unit',(req,res) => masterDataHandler.handleGetAllUnit(req,res));
};