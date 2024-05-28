exports.up = function(knex) {
    return knex.schema.createTable('master_unit', function(table) {
    table.increments('id').primary();
    table.text('unit_no');
    table.text('type');
    table.text('brand');
    table.text('category');
    table.text('owner');
    table.text('usage');
    table.boolean('fms').defaultTo(0);
    table.text('site');
    table.timestamp('creation_date').defaultTo(knex.fn.now());
    table.text('creation_by');
    table.boolean('isDelete').defaultTo(false);
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_unit_no ON master_unit (unit_no);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_unit_category ON master_unit (category);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_unit_type ON master_unit (type);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_unit_site ON master_unit (site);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_unit_usage ON master_unit (usage);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_unit_owner ON master_unit (owner);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_unit_brand ON master_unit (brand);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_unit_creation_date ON master_unit (creation_date);');
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('master_unit');
};