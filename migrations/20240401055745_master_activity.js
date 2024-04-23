exports.up = function(knex) {
    return knex.schema.createTable('master_activity', function(table) {
    table.increments('id').primary();
    table.text('activity_name');
    table.text('delay_description');
    table.text('code');
    table.timestamp('creation_date').defaultTo(knex.fn.now());
    table.text('creation_by');
    table.boolean('isDelete').defaultTo(false);
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_code_activity ON master_activity (code);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_activity_name ON master_activity (activity_name);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_activity');
};