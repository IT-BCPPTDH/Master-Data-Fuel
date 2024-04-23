exports.up = function(knex) {
    return knex.schema.createTable('master_bucket_cap', function(table) {
        table.increments('id').primary();
        table.text('digger');
        table.float('buck_cap_lcm');
        table.float('buckAct_cap_lcm');
        table.float('buckAct_cap_bcm');
        table.text('site');
        table.timestamp('creation_date').defaultTo(knex.fn.now());
        table.text('creation_by');
        table.boolean('isDelete').defaultTo(false);
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_bucket_cap ON master_bucket_cap (id);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_bucket_cap_digger ON master_bucket_cap (digger);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_bucket_cap_site ON master_bucket_cap (site);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_bucket_cap');
};
