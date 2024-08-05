exports.up = function(knex) {
    return knex.schema.createTable('master_station', function(table) {
        table.increments('id').primary();
        table.text('fuel_station_name');
        table.text('fuel_station_type');
        table.integer('fuel_capacity');
        table.integer('fuel_nozel');
        table.text('site');
        table.timestamp('creation_date').defaultTo(knex.fn.now());
        table.text('creation_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.text('updated_by');
        table.boolean('isDelete').defaultTo(false);
    }).then(function() {
      return knex.schema.raw('CREATE INDEX id ON master_station (id);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX fuel_station_name ON master_station (fuel_station_name);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX site ON master_station (site);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_station');
};