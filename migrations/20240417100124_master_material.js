exports.up = function(knex) {
    return knex.schema.createTable('master_material', function(table) {
        table.increments('id').primary();
        table.text('material_code');
        table.text('material_name');
        table.text('treatment_factor');
        table.text('site');
        table.date('creation_date');
        table.text('creation_by');
        table.boolean('isDelete');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_material ON master_material (id);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_material_code ON master_material (material_code);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_material_name ON master_material (material_name);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_material_site ON master_material (site);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_material');
};
