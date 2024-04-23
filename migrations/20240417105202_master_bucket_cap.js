exports.up = function(knex) {
    return knex.schema.createTable('master_bucket_cap', function(table) {
        table.increments('id').primary();
        table.text('digger');
        table.text('buck_cap_lcm');
        table.text('buckAct_cap_lcm');
        table.text('buckAct_cap_bcm');
        table.text('site');
        table.date('creation_date');
        table.text('creation_by');
        table.boolean('isDelete');
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
