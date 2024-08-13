exports.up = function(knex) {
    return knex.schema.createTable('master_elipses', function(table) {
        table.increments('id').primary();
        table.text('equip_no_unit');
        table.text('equip_no_show');
        table.text('equip_model_egi');
        table.text('equip_description');
        table.text('equip_category');
        table.float('equip_cap_tank');
        table.float('equip_fbr');
        table.text('equip_position');
        table.text('equip_owner_protes');
        table.text('equip_owner_elipse');
        table.text('keterangan');
        table.boolean('isDelete').defaultTo(false);
        table.timestamp('creation_date').defaultTo(knex.fn.now());
        table.text('creation_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.text('updated_by');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_elipses');
};