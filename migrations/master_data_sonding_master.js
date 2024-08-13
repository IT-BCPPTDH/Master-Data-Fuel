exports.up = function(knex) {
    return knex.schema.createTable('master_sonding', function(table) {
        table.increments('id').primary();
        table.text('station');
        table.float('cm');
        table.float('liters');
        table.text('site');
        table.boolean('isDelete').defaultTo(false);
        table.timestamp('creation_date').defaultTo(knex.fn.now());
        table.text('creation_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.text('updated_by');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_sonding');
};