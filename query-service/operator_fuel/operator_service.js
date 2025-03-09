const db = require('../../database/helper');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const dbKnex = knex(knexConfig);
const { QUERY_STRING } = require('../../helpers/queryEnumHelper')

const insert = async (dataJson) => {
    try {
        const checkData = await db.query(QUERY_STRING.GET_OPERATOR_JDE, [dataJson.JDE])
        if(checkData.rows.length > 0 ){
            return false
        }else{
            const sanitizedColumns = Object.keys(dataJson).map(key => `"${key}"`);
            const valuesPlaceholders = sanitizedColumns.map((_, idx) => `$${idx + 1}`).join(', ');
    
            const createOperatorQuery = `
              INSERT INTO operator_fuel (${sanitizedColumns.join(', ')})
              VALUES (${valuesPlaceholders})
            `;
    
            const values = Object.keys(dataJson).map(key => dataJson[key]);
            const result = await db.query(createOperatorQuery, values);
    
            if(result){
                return true
            }
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

const edit = async (updateFields) => {
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

        const query = `UPDATE operator_fuel SET ${setClauses} WHERE id = $${values.length}`;
        
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
    insert,
    edit
}