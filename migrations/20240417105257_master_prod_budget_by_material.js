exports.up = function(knex) {
    return knex.schema.createTable('master_prod_budget', function(table) {
        table.increments('id').primary();
        table.text('model');
        table.text('digger');
        table.float('ob');
        table.float('coal');
        table.float('ts');
        table.text('site');
        table.timestamp('creation_date').defaultTo(knex.fn.now());
        table.text('creation_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.text('updated_by');
        table.boolean('isDelete').defaultTo(false);
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_prod_budget ON master_prod_budget (id);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_prod_budget_model ON master_prod_budget (model);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_prod_budget_site ON master_prod_budget (site);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_prod_budget_digger ON master_prod_budget (digger);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_prod_budget');
};