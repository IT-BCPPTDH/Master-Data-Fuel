exports.up = function(knex) {
    return knex.schema.createTable('master_prod_budget_by_material', function(table) {
        table.increments('id').primary();
        table.text('model');
        table.text('digger');
        table.text('ob');
        table.text('coal');
        table.text('ts');
        table.text('site');
        table.date('creation_date');
        table.text('creation_by');
        table.boolean('isDelete');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_prod_budget ON master_prod_budget_by_material (id);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_prod_budget_model ON master_prod_budget_by_material (model);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_prod_budget_site ON master_prod_budget_by_material (site);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_prod_budget_digger ON master_prod_budget_by_material (digger);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_prod_budget_by_material');
};