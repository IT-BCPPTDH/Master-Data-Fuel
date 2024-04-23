exports.up = function(knex) {
    return knex.schema.createTable('master_location', function(table) {
        table.increments('id').primary();
        table.text('location_code');
        table.text('location_name');
        table.text('location_type');
        table.text('site');
        table.date('creation_date');
        table.text('creation_by');
        table.boolean('isDelete');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_location ON master_location (id);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_location_code ON master_location (location_code);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_location_name ON master_location (location_name);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_location_type ON master_location (location_type);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_location_site ON master_location (site);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_location');
};
