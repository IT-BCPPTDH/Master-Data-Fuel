/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('operator_fuel', function (table) {
        table.increments('id').primary();
        table.string('JDE').index();
        table.string('fullname').index();
        table.string('position').index();
        table.string('division').index();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.text('creation_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
        table.text('updated_by');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('operator_fuel');
};
