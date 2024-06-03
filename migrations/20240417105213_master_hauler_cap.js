exports.up = function(knex) {
    return knex.schema.createTable('master_hauler_cap', function(table) {
        table.increments('id').primary();
        table.text('hauler_type');
        table.float('vessel_bcm');
        table.float('vessel_ton');
        table.text('site');
        table.timestamp('creation_date').defaultTo(knex.fn.now());
        table.text('creation_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.text('updated_by');
        table.boolean('isDelete').defaultTo(false);
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_hauler_cap ON master_hauler_cap (id);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_hauler_cap_hauler_type ON master_hauler_cap (hauler_type);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_hauler_cap_site ON master_hauler_cap (site);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_hauler_cap');
};
