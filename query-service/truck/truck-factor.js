const db = require('../../database/helper');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const dbKnex = knex(knexConfig);
const { QUERY_STRING } = require('../../helpers/queryEnumHelper')

const insertToTruckFactor = async (dataJson) => {
    try {
        const result = await db.query(QUERY_STRING.CREATE_TRUCK_FACTOR, [dataJson.model,
        dataJson.tf_ob_ts, dataJson.tf_coal, dataJson.site, dataJson.operator])

        if(result){
            return true
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}

const bulkInsert = async (dataJson) => {
    try {

        const result = await db.query(QUERY_STRING.GET_RAIN_FOR_SETUP_UNIT, [dataJson])

        if(result){
            return result
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}

const editTruckFactor = async (updateFields) => {
    try {
        const setClauses = Object.keys(updateFields)
            .filter(field => field !== 'id')  
            .map((field, index) => `${field} = $${index + 1}`)
            .join(', ');

        const values = Object.keys(updateFields)
            .filter(field => field !== 'id')
            .map(field => updateFields[field]);

        values.push(updateFields.id);

        const query = `UPDATE master_truck_factor SET ${setClauses} WHERE id = $${values.length}`;
        const result = await db.query(query, values)

        if(result){
            return true
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    insertToTruckFactor,
    bulkInsert,
    editTruckFactor
}