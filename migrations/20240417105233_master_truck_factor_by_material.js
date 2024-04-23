exports.up = function(knex) {
    return knex.schema.createTable('master_truck_factor_by_material', function(table) {
        table.increments('id').primary();
        table.text('model');
        table.text('tf_ob_ts');
        table.text('tf_coal');
        table.text('site');
        table.date('creation_date');
        table.text('creation_by');
        table.boolean('isDelete');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_truck_factor ON master_truck_factor_by_material (id);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_truck_factor_model ON master_truck_factor_by_material (model);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_truck_factor_site ON master_truck_factor_by_material (site);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_truck_factor_by_material');
};