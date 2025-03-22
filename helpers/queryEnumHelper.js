const QUERY_STRING = {
    GET_ALL_ACTVITY: `SELECT * FROM master_activity`,
    GET_ALL_UNIT: `SELECT * FROM master_unit WHERE "end" IS NULL`,
    GET_ALL_SITE: `SELECT * FROM master_site`,
    GET_ALL_MATERIAL: `SELECT * FROM master_material`,
    GET_ALL_LOCATION: `SELECT * FROM master_location`,
    GET_ALL_BUCKET_CAP: `SELECT * FROM master_bucket_cap`,
    GET_ALL_HAULER_CAP: `SELECT * FROM master_hauler_cap`,
    GET_ALL_TRUCK_FACTOR: `SELECT * FROM master_truck_factor`,
    GET_ALL_PROD_BUDGET: `SELECT * FROM master_prod_budget`,
    GET_ALL_OPERATOR: `SELECT * FROM master_operator_kimper WHERE "isDelete" = false ORDER BY id ASC `,
    GET_ALL_OPERATOR_UNIT: `SELECT * FROM master_unit WHERE unit_no = $1`,
    GET_ALL_STATION: `SELECT * FROM master_station WHERE "isDelete" = false order by id DESC`,
    GET_LV_HLV:`select * from master_unit mu where unit_no like 'LV%' or unit_no like 'HLV%' and "isDelete" = false`,
    CHECK_UNIT:`SELECT * FROM master_unit WHERE unit_no = $1`,

    GET_DETAIL_ACTIVITY:`SELECT * FROM master_activity WHERE id = $1`,
    GET_DETAIL_UNIT:`SELECT * FROM master_unit WHERE id = $1`,
    GET_DETAIL_SITE:`SELECT * FROM master_site WHERE id = $1`,
    GET_DETAIL_MATERIAL:`SELECT * FROM master_material WHERE id = $1`,
    GET_DETAIL_BUCKET_CAP:`SELECT * FROM master_bucket_cap WHERE id = $1`,
    GET_DETAIL_HAULER_CAP:`SELECT * FROM master_hauler_cap WHERE id = $1`,
    GET_DETAIL_LOCATION:`SELECT * FROM master_location WHERE id = $1`,
    GET_DETAIL_TRUCK_FACTOR:`SELECT * FROM master_truck_factor WHERE id = $1`,
    GET_DETAIL_PROD_BUDGET:`SELECT * FROM master_prod_budget WHERE id = $1`,
    GET_DETAIL_OPERATOR:`SELECT * FROM master_operator_kimper WHERE id = $1`,

    CREATE_ACTIVITY: `INSERT INTO master_activity (activity_name, delay_description, code, creation_by) VALUES ($1, $2, $3, $4)`,
    CREATE_UNIT: `INSERT INTO master_unit (unit_no, type, brand, category, owner, usage, site, creation_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    CREATE_SITE: `INSERT INTO master_site (code, name, creation_by) VALUES ($1, $2, $3)`,
    CREATE_BUCKET_CAP: `INSERT INTO master_bucket_cap (digger, buck_cap_lcm, "buckAct_cap_lcm", "buckAct_cap_bcm", site, creation_by) VALUES ($1, $2, $3, $4, $5, $6)`,
    CREATE_HAULER_CAP: `INSERT INTO master_hauler_cap (hauler_type, vessel_bcm, vessel_ton, site, creation_by) VALUES ($1, $2, $3, $4, $5)`,
    CREATE_LOCATION: `INSERT INTO master_location (location_code, location_name, location_type, site, creation_by) VALUES ($1, $2, $3, $4, $5)`,
    CREATE_TRUCK_FACTOR: `INSERT INTO master_truck_factor (model, tf_ob_ts, tf_coal, tf_mud_60, tf_mud_40, site, creation_by) VALUES ($1, $2, $3, $4, $5 ,$6 ,$7)`,
    CREATE_PROD_BUDGET: `INSERT INTO master_prod_budget (model, digger, ob, coal, ts, site, creation_by) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    CREATE_MATERIAL: `INSERT INTO master_material (material_code, material_code_prod, material_name, treatment_factor, site, creation_by) VALUES ($1, $2, $3, $4, $5, $6)`,

    DELETE_ACTIVITY: `UPDATE master_activity SET "isDelete" = true WHERE id = $1`,
    DELETE_UNIT: `DELETE from master_unit WHERE id = $1`,
    DELETE_SITE: `UPDATE master_site SET "isDelete" = true WHERE id = $1`,
    DELETE_BUCKET_CAP: `UPDATE master_bucket_cap SET "isDelete" = true WHERE id = $1`,
    DELETE_HAULER_CAP: `UPDATE master_hauler_cap SET "isDelete" = true WHERE id = $1`,
    DELETE_LOCATION: `UPDATE master_location SET "isDelete" = true WHERE id = $1`,
    DELETE_TRUCK_FACTOR: `UPDATE master_truck_factor SET "isDelete" = true WHERE id = $1`,
    DELETE_PROD_BUDGET: `UPDATE master_prod_budget SET "isDelete" = true WHERE id = $1`,
    DELETE_MATERIAL: `UPDATE master_material SET "isDelete" = true WHERE id = $1`,

    GET_UNIT_TRUCK : `SELECT * from public.fetch_unit_truck($1)`,
    GET_STATION_BY_NAME: `SELECT * FROM master_station WHERE fuel_station_name = $1 AND "isDelete" = false`,
    GET_DETAIL_STATION:`SELECT * FROM master_station WHERE id = $1 AND "isDelete" = false`,
    DELETE_STATION: `UPDATE master_station SET "isDelete" = true WHERE id = $1`,

    GET_ALL_SONDING_MASTER: `SELECT * FROM master_sonding WHERE "isDelete" = false order by id ASC`,
    GET_DETAIL_SONDING_MASTER:`SELECT * FROM master_sonding WHERE id = $1 AND "isDelete" = false`,
    DELETE_SONDING_MASTER: `UPDATE master_sonding SET "isDelete" = true WHERE id = $1`,
    GET_LAST_SONDING_MASTER: `SELECT station, cm, liters FROM master_sonding WHERE "isDelete" = false and station = $1 
    order by updated_at desc`,

    GET_ALL_UNIT_BANLAW: `SELECT * FROM master_unit_banlaws WHERE "isDelete" = false order by id ASC`,
    GET_DETAIL_UNIT_BANLAW:`SELECT * FROM master_unit_banlaws WHERE id = $1 AND "isDelete" = false`,
    DELETE_UNIT_BANLAW: `UPDATE master_unit_banlaws SET "isDelete" = true WHERE id = $1`,

    GET_ALL_MASTER_ELIPSE: `SELECT * FROM master_elipses WHERE "isDelete" = false order by id ASC`,
    GET_DETAIL_MASTER_ELIPSE:`SELECT * FROM master_elipses WHERE id = $1 AND "isDelete" = false`,
    DELETE_MASTER_ELIPSE: `UPDATE master_elipses SET "isDelete" = true WHERE id = $1`,

    GET_UNIT_EQUIP: `SELECT * FROM master_unit where "isDelete" = false and unit_no = ANY($1)`,
    GET_FILTER_ELIPSE: `SELECT * FROM master_elipses where "isDelete" = false and equip_no_unit = ANY($1)`
    // GET_FILTER_ELIPSE: `SELECT m.*
    // FROM master_elipses m
    // JOIN UNNEST($1::TEXT[]) u(equip_no_unit) ON m.equip_no_unit = u.equip_no_unit
    // WHERE m."isDelete" = false;`

}

module.exports = {
    QUERY_STRING
}