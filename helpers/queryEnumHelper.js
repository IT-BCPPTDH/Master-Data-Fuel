const QUERY_STRING = {
    GET_ALL_ACTVITY: `SELECT * FROM master_activity`,
    GET_ALL_UNIT: `SELECT * FROM master_unit`,
    GET_ALL_SITE: `SELECT * FROM master_site`,
    GET_ALL_MATERIAL: `SELECT * FROM master_material`,
    GET_ALL_LOCATION: `SELECT * FROM master_location`,
    GET_ALL_BUCKET_CAP: `SELECT * FROM master_bucket_cap`,
    GET_ALL_HAULER_CAP: `SELECT * FROM master_hauler_cap`,
    GET_ALL_TRUCK_FACTOR: `SELECT * FROM master_truck_factor`,
    GET_ALL_PROD_BUDGET: `SELECT * FROM master_prod_budget`,

    GET_DETAIL_ACTIVITY:`SELECT * FROM master_activity WHERE id = $1`,
    GET_DETAIL_UNIT:`SELECT * FROM master_unit WHERE id = $1`,
    GET_DETAIL_SITE:`SELECT * FROM master_site WHERE id = $1`,
    GET_DETAIL_MATERIAL:`SELECT * FROM master_material WHERE id = $1`,
    GET_DETAIL_BUCKET_CAP:`SELECT * FROM master_bucket_cap WHERE id = $1`,
    GET_DETAIL_HAULER_CAP:`SELECT * FROM master_hauler_cap WHERE id = $1`,
    GET_DETAIL_LOCATION:`SELECT * FROM master_location WHERE id = $1`,
    GET_DETAIL_TRUCK_FACTOR:`SELECT * FROM master_truck_factor WHERE id = $1`,
    GET_DETAIL_PROD_BUDGET:`SELECT * FROM master_prod_budget WHERE id = $1`,

    CREATE_ACTIVITY: `INSERT INTO master_activity (activity_name, delay_description, code, creation_by) VALUES ($1, $2, $3, $4)`,
    CREATE_UNIT: `INSERT INTO master_unit (unit_no, type, brand, category, owner, usage, site, creation_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    CREATE_SITE: `INSERT INTO master_site (code, name, creation_by) VALUES ($1, $2, $3)`,
    CREATE_BUCKET_CAP: `INSERT INTO master_bucket_cap (digger, buck_cap_lcm, "buckAct_cap_lcm", "buckAct_cap_bcm", site, creation_by) VALUES ($1, $2, $3, $4, $5, $6)`,
    CREATE_HAULER_CAP: `INSERT INTO master_hauler_cap (hauler_type, vessel_bcm, vessel_ton, site, creation_by) VALUES ($1, $2, $3, $4, $5)`,
    CREATE_LOCATION: `INSERT INTO master_location (location_code, location_name, location_type, site, creation_by) VALUES ($1, $2, $3, $4, $5)`,
    CREATE_TRUCK_FACTOR: `INSERT INTO master_truck_factor (model, tf_ob_ts, tf_coal, site, creation_by) VALUES ($1, $2, $3, $4, $5)`,
    CREATE_PROD_BUDGET: `INSERT INTO master_prod_budget (model, digger, ob, coal, ts, site, creation_by) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    CREATE_MATERIAL: `INSERT INTO master_material (material_code, material_code_prod, material_name, treatment_factor, site, creation_by) VALUES ($1, $2, $3, $4, $5, $6)`,

    DELETE_ACTIVITY: `UPDATE master_activity SET "isDelete" = true WHERE id = $1`,
    DELETE_UNIT: `UPDATE master_unit SET "isDelete" = true WHERE id = $1`,
    DELETE_SITE: `UPDATE master_site SET "isDelete" = true WHERE id = $1`,
    DELETE_BUCKET_CAP: `UPDATE master_bucket_cap SET "isDelete" = true WHERE id = $1`,
    DELETE_HAULER_CAP: `UPDATE master_hauler_cap SET "isDelete" = true WHERE id = $1`,
    DELETE_LOCATION: `UPDATE master_location SET "isDelete" = true WHERE id = $1`,
    DELETE_TRUCK_FACTOR: `UPDATE master_truck_factor SET "isDelete" = true WHERE id = $1`,
    DELETE_PROD_BUDGET: `UPDATE master_prod_budget SET "isDelete" = true WHERE id = $1`,
    DELETE_MATERIAL: `UPDATE master_material SET "isDelete" = true WHERE id = $1`,

    GET_UNIT_TRUCK : `SELECT * from public.fetch_unit_truck($1)`
}

module.exports = {
    QUERY_STRING
}