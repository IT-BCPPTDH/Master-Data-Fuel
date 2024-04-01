exports.up = function(knex) {
    return knex.schema.createTable('master_activity', function(table) {
    table.increments('id').primary();
    table.text('activity_name');
    table.text('delay_description');
    table.text('code');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_activity');
};


