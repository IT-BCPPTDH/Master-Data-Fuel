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
}

module.exports = {
    QUERY_STRING
}