exports.up = function(knex) {
    return knex.schema.createTable('master_operator_kimper', function(table) {
        table.increments('id').primary();
        table.text('emp_id');
        table.text('emp_name');
        table.text('position');
        table.boolean('R996').defaultTo(0);
        table.boolean('SH5500').defaultTo(0);
        table.boolean('EX3600').defaultTo(0);
        table.boolean('R9350').defaultTo(0);
        table.boolean('EX2600-6').defaultTo(0);
        table.boolean('PC2000-8').defaultTo(0);
        table.boolean('PC1250-8').defaultTo(0);
        table.boolean('R9100').defaultTo(0);
        table.boolean('SY750H').defaultTo(0);
        table.boolean('SY500H').defaultTo(0);
        table.boolean('SY365').defaultTo(0);
        table.boolean('SY215').defaultTo(0);
        table.boolean('PC400').defaultTo(0);
        table.boolean('PC200').defaultTo(0);
        table.boolean('SH480').defaultTo(0);
        table.boolean('ZX200').defaultTo(0);
        table.boolean('EH4500').defaultTo(0);
        table.boolean('HD830').defaultTo(0);
        table.boolean('730E').defaultTo(0);
        table.boolean('HD1500-7').defaultTo(0);
        table.boolean('HD1500-5').defaultTo(0);
        table.boolean('75131').defaultTo(0);
        table.boolean('HD785-7').defaultTo(0);
        table.boolean('HD465').defaultTo(0);
        table.boolean('HD465HB').defaultTo(0);
        table.boolean('A40DT').defaultTo(0);
        table.boolean('HM400-1').defaultTo(0);
        table.boolean('P360-1').defaultTo(0);
        table.boolean('D11').defaultTo(0);
        table.boolean('D10').defaultTo(0);
        table.boolean('D375A-6R').defaultTo(0);
        table.boolean('D375A-5').defaultTo(0);
        table.boolean('D155A-6').defaultTo(0);
        table.boolean('D8R').defaultTo(0);
        table.boolean('D6R').defaultTo(0);
        table.boolean('D85SS').defaultTo(0);
        table.boolean('D65').defaultTo(0);
        table.boolean('NA').defaultTo(0);
        table.boolean('18M3').defaultTo(0);
        table.boolean('GR 16M').defaultTo(0);
        table.boolean('16H').defaultTo(0);
        table.boolean('14M3').defaultTo(0);
        table.boolean('GD825-A').defaultTo(0);
        table.boolean('GD SANY STG230').defaultTo(0);
        table.boolean('D55SP').defaultTo(0);
        table.boolean('D45KS').defaultTo(0);
        table.boolean('D50KS').defaultTo(0);
        table.boolean('D245S').defaultTo(0);
        table.timestamp('creation_date').defaultTo(knex.fn.now());
        table.text('creation_by');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.text('updated_by');
        table.boolean('isDelete').defaultTo(false);
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_emp_id ON master_operator_kimper (emp_id);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_emp_name ON master_operator_kimper (emp_name);');
    }).then(function() {
        return knex.schema.raw('CREATE INDEX idx_position ON master_operator_kimper (position);');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('master_operator_kimper');
};