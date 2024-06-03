const db = require('../../database/helper');
const knex = require('knex');
const knexConfig = require('../../knexfile');
const dbKnex = knex(knexConfig);
const { QUERY_STRING } = require('../../helpers/queryEnumHelper')

const insertToBucketCap = async (dataJson) => {
    try {
        const result = await db.query(QUERY_STRING.CREATE_BUCKET_CAP, [dataJson.digger,
        dataJson.buck_cap_lcm, dataJson.buckAct_cap_lcm, dataJson.buckAct_cap_bcm, dataJson.site, 
        dataJson.operator])

        if(result){
            return true
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}

const editBucketCap = async (updateFields) => {
    try {
        const needsQuotes = (field) => /[A-Z]/.test(field) || /[_]/.test(field);

        const setClauses = Object.keys(updateFields)
            .filter(field => field !== 'id')  
            .map((field, index) => {
                const fieldName = needsQuotes(field) ? `"${field}"` : field;
                return `${fieldName} = $${index + 1}`;
            })
            .join(', ');


        const values = Object.keys(updateFields)
            .filter(field => field !== 'id')
            .map(field => updateFields[field]);

        values.push(updateFields.id);

        const query = `UPDATE master_bucket_cap SET ${setClauses} WHERE id = $${values.length}`;
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
    insertToBucketCap,
    editBucketCap
}