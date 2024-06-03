const masterDataHandler = require('../handlers/master-data-prod-budget-handler')

module.exports = (app) => {
    app.get('/master/prod-budget',(req,res) => masterDataHandler.handleGetAllProdBudget(req,res));
    app.post('/master/prod-budget/insert',(req,res) => masterDataHandler.handleInsertProdBudget(req,res));
    app.get('/master/prod-budget/detail/:id',(req,res) => masterDataHandler.handleGetProdBudget(req,res));
    app.patch('/master/prod-budget/delete/:id',(req,res) => masterDataHandler.handleDeleteProdBudget(req,res));
    app.patch('/master/prod-budget/edit',(req,res) => masterDataHandler.handleUpdateProdBudget(req,res));
    app.post('/master/prod-budget/bulk-insert',(req,res) => masterDataHandler.handleBulkInsertProdBudget(req,res));
};