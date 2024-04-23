exports.up = function(knex) {
    return knex.schema.createTable('master_truck_factor', function(table) {
        table.increments('id').primary();
        table.text('model');
        table.float('tf_ob_ts');
        table.float('tf_coal');
        table.text('site');
        table.timestamp('creation_date').defaultTo(knex.fn.now());
        table.text('creation_by');
        table.boolean('isDelete').defaultTo(false);
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_truck_factor ON master_truck_factor (id);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_truck_factor_model ON master_truck_factor (model);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_truck_factor_site ON master_truck_factor (site);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_truck_factor');
};