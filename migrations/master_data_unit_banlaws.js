exports.up = function(knex) {
    return knex.schema.createTable('master_unit_banlaws', function(table) {
        table.increments('id').primary();
        table.text('unit_input');
        table.text('unit_elipse');
        table.text('owner');
        table.text('pin_banlaw');
        table.text('unit_banlaw');
        table.boolean('isDelete').defaultTo(false);
        table.timestamp('creation_date').defaultTo(knex.fn.now());
        table.text('creation_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.text('updated_by');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_unit_banlaws');
};