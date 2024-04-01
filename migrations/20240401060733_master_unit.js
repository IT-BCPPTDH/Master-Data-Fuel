exports.up = function(knex) {
    return knex.schema.createTable('master_unit', function(table) {
    table.increments('id').primary();
    table.text('unit_no');
    table.text('type');
    table.text('brand');
    table.text('category');
    table.text('owner');
    table.text('usage');
})
}

exports.down = function(knex) {
    return knex.schema.dropTable('master_unit');
};