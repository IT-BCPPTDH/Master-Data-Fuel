const db = require('../../database/helper');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const dbKnex = knex(knexConfig);
const { QUERY_STRING } = require('../../helpers/queryEnumHelper')

const insertToUnit = async (dataJson) => {
    try {
        const result = await db.query(QUERY_STRING.CREATE_UNIT, [dataJson.unit_no,
        dataJson.type, dataJson.brand, dataJson.category, dataJson.owner,
        dataJson.usage, dataJson.site, dataJson.operator])

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

const editUnit = async (updateFields) => {
    try {
        const setClauses = Object.keys(updateFields)
            .filter(field => field !== 'id')  
            .map((field, index) => `${field} = $${index + 1}`)
            .join(', ');

        const values = Object.keys(updateFields)
            .filter(field => field !== 'id')
            .map(field => updateFields[field]);

        values.push(updateFields.id);

        const query = `UPDATE master_unit SET ${setClauses} WHERE id = $${values.length}`;
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

const editData = async (data) => {
    try {
        if (!data || !data.setup_unit || !Array.isArray(data.setup_unit) || data.setup_unit.length === 0) {
            console.error('Data is missing or invalid');
            return;
        }
        const conditions = data.setup_unit.map((item, index) => `($${index * 2 + 1}, $${index * 2 + 2})`).join(', ');
        const values = data.setup_unit.flatMap(item => [item.unit_no, item.type]);


        if (values.length === 0) {
            console.error('No unit numbers and types to update');
            return;
        }
        const updateUnitQuery = `
            UPDATE master_unit 
            SET is_setup_unit = true 
            WHERE (unit_no, type) IN (${conditions});
        `;

        try {
            await db.query(updateUnitQuery, values);
            return true
        } catch (error) {
            console.error('Error updating data:', error);
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    insertToUnit,
    bulkInsert,
    editUnit,
    editData
}