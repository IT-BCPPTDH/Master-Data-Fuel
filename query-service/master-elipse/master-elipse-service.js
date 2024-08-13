const db = require('../../database/helper');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const dbKnex = knex(knexConfig);

const insertToMasterElipse = async (dataJson) => {
    try {
        const sanitizedColumns = Object.keys(dataJson).map(key => `"${key}"`);
        const valuesPlaceholders = sanitizedColumns.map((_, idx) => `$${idx + 1}`).join(', ');

        const createQuery = `
          INSERT INTO master_elipses (${sanitizedColumns.join(', ')})
          VALUES (${valuesPlaceholders})
        `;

        const values = Object.keys(dataJson).map(key => dataJson[key]);
        const result = await db.query(createQuery, values);

        if(result){
            return true
        }
        return false

    } catch (error) {
        console.log(error)
        return false
    }
}

const editMasterElipse = async (updateFields) => {
    try {
        const setClauses = Object.keys(updateFields)
            .filter(field => field !== 'id')  
            .map((field, index) => `${field} = $${index + 1}`)
            .join(', ');

        const values = Object.keys(updateFields)
            .filter(field => field !== 'id')
            .map(field => updateFields[field]);

        values.push(updateFields.id);

        const query = `UPDATE master_elipses SET ${setClauses} WHERE id = $${values.length}`;
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
    insertToMasterElipse,
    editMasterElipse
}