const db = require('../../database/helper');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const dbKnex = knex(knexConfig);
const { QUERY_STRING } = require('../../helpers/queryEnumHelper')

const insertToOperator = async (dataJson) => {
    try {
        const sanitizedColumns = Object.keys(dataJson).map(key => `"${key}"`);
        const valuesPlaceholders = sanitizedColumns.map((_, idx) => `$${idx + 1}`).join(', ');

        const createOperatorQuery = `
          INSERT INTO master_operator_kimper (${sanitizedColumns.join(', ')})
          VALUES (${valuesPlaceholders})
        `;

        const values = Object.keys(dataJson).map(key => dataJson[key]);
        const result = await db.query(createOperatorQuery, values);

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

const editOperator = async (updateFields) => {
    try {
        const setClauses = Object.keys(updateFields)
        .map((field, index) => {
          const columnName = `"${field}"`;
          return `${columnName} = $${index + 1}`;
        })
        .join(', ');
      
        const values = Object.keys(updateFields)
          .map(field => updateFields[field]);
      
        values.push(updateFields.id);

        const query = `UPDATE master_operator_kimper SET ${setClauses} WHERE id = $${values.length}`;
        
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

const queryOperator = async(data) => {
    try {

        const query = `SELECT emp_id FROM master_operator_kimper WHERE "isDelete" = false`  
        const result = await db.query(query)

        if(result){
            return result
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}

const getOperatorIds= async(id, model) => {
    try {

        const query = `SELECT "${model}" FROM master_operator_kimper WHERE "emp_id" = $1`  
        const result = await db.query(query, [id])

        if(result){
            return result
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}


module.exports = {
    insertToOperator,
    bulkInsert,
    editOperator,
    queryOperator,
    getOperatorIds
}