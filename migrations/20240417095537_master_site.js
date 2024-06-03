exports.up = function(knex) {
    return knex.schema.createTable('master_site', function(table) {
        table.increments('id').primary();
        table.text('code');
        table.text('name');
        table.timestamp('creation_date').defaultTo(knex.fn.now());
        table.text('creation_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.text('updated_by');
        table.boolean('isDelete').defaultTo(false);
    }).then(function() {
      return knex.schema.raw('CREATE INDEX idx_site ON master_site (id);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_site_code ON master_site (code);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_site_name ON master_site (name);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_site');
};