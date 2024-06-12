/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.raw(`
    CREATE OR REPLACE FUNCTION fetch_unit_truck(inputUnit VARCHAR[])
    RETURNS TABLE(
        unit_no TEXT, 
        type TEXT, 
        model TEXT, 
        tf_ob_ts DOUBLE PRECISION, 
        tf_coal DOUBLE PRECISION,
        tf_mud_60 DOUBLE PRECISION,
        tf_mud_40 DOUBLE PRECISION
    ) AS $$
    DECLARE
        query TEXT;
    BEGIN
        -- Construct the dynamic query
        query := 'SELECT unit.unit_no, unit.type, truck.model, 
                         truck.tf_ob_ts::DOUBLE PRECISION, 
                         truck.tf_coal::DOUBLE PRECISION,
                         truck.tf_mud_60::DOUBLE PRECISION,
                         truck.tf_mud_40::DOUBLE PRECISION 
                  FROM master_unit AS unit
                  LEFT JOIN master_truck_factor AS truck ON unit.type = truck.model
                  WHERE unit.unit_no = ANY($1)';

        -- Execute the dynamic query
        RETURN QUERY EXECUTE query USING inputUnit;
    END;
    $$ LANGUAGE plpgsql;

    `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.raw(`DROP FUNCTION IF EXISTS fetch_unit_truck(VARCHAR);`)
};
