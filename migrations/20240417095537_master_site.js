exports.up = function(knex) {
    return knex.schema.createTable('master_site', function(table) {
        table.increments('id').primary();
        table.text('code');
        table.text('name');
        table.date('creation_date');
        table.text('creation_by');
        table.boolean('isDelete');
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