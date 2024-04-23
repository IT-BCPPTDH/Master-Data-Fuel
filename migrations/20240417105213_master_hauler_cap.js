exports.up = function(knex) {
    return knex.schema.createTable('master_hauler_cap', function(table) {
        table.increments('id').primary();
        table.text('hauler_type');
        table.text('vessel_bcm');
        table.text('vesselTON');
        table.text('buckActCapBCM');
        table.text('site');
        table.date('creation_date');
        table.text('creation_by');
        table.boolean('isDelete');
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
