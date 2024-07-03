const db = require('../database/helper');
const { HTTP_STATUS, STATUS_MESSAGE } = require('../helpers/enumHelper')
const { QUERY_STRING } = require('../helpers/queryEnumHelper')
const { insertToTruckFactor, editTruckFactor } = require('../query-service/truck/truck-factor')

async function getAllTruckFactor() {
    try{
        const data = await db.query(QUERY_STRING.GET_ALL_TRUCK_FACTOR)
        if(data){
            return {
              status: HTTP_STATUS.OK,
              data: data.rows
            };
        }else{
            return {
                status: HTTP_STATUS.NOT_FOUND,
                message: STATUS_MESSAGE.NOT_FOUND
              };
        }
    }catch(error){
        return {
            status: HTTP_STATUS.BAD_REQUEST,
            message: `${STATUS_MESSAGE.ERR_GET} ${error}`,
          };
    }
}

async function getDetailTruckFactor(id){
    try{
        const data = await db.query(QUERY_STRING.GET_DETAIL_TRUCK_FACTOR, [id])

        if(data){
            return {
              status: HTTP_STATUS.OK,
              data: data.rows,
              totalRow: data.rows.length
            };
        }else{
            return {
                status: HTTP_STATUS.NOT_FOUND,
                message: STATUS_MESSAGE.NOT_FOUND
              };
        }
    }catch(error){
        return {
            status: HTTP_STATUS.BAD_REQUEST,
            message: `${STATUS_MESSAGE.ERR_GET} ${error}`,
          };
    }
}

async function insertTruckFactor(postData) {
   
    try{
        const data = await insertToTruckFactor(postData)

        if(data){
            return {
              status: HTTP_STATUS.OK,
              message: STATUS_MESSAGE.CREATED_DATA
            };
        }else{
            return {
                status: HTTP_STATUS.NOT_FOUND,
                message: STATUS_MESSAGE.NOT_FOUND
              };
        }
    }catch(error){
        return {
            status: HTTP_STATUS.BAD_REQUEST,
            message: `${STATUS_MESSAGE.ERR_GET} ${error}`,
          };
    }
}

async function updateTruckFactor(updateData){
    try{
        const data = await editTruckFactor(updateData)

        if(data){
            return {
              status: HTTP_STATUS.OK,
              message: STATUS_MESSAGE.UPDATE_DATA
            };
        }else{
            return {
                status: HTTP_STATUS.NOT_FOUND,
                message: STATUS_MESSAGE.NOT_FOUND
              };
        }
    }catch(error){
        return {
            status: HTTP_STATUS.BAD_REQUEST,
            message: `${STATUS_MESSAGE.ERR_GET} ${error}`,
          };
    }
}

async function deleteTruckFactor(id){
    try{
        const data = await db.query(QUERY_STRING.DELETE_TRUCK_FACTOR, [id])

        if(data){
            return {
              status: HTTP_STATUS.OK,
              message: STATUS_MESSAGE.DELETE_DATA
            };
        }else{
            return {
                status: HTTP_STATUS.NOT_FOUND,
                message: STATUS_MESSAGE.NOT_FOUND
              };
        }
    }catch(error){
        return {
            status: HTTP_STATUS.BAD_REQUEST,
            message: `${STATUS_MESSAGE.ERR_GET} ${error}`,
          };
    }
}

async function bulkInsert(bulkData){
    try{
        for (let index = 0; index < bulkData.length; index++) {
            const element = bulkData[index];
            const inserted = await insertToTruckFactor(element)
          }
        
          return {
            status: HTTP_STATUS.OK,
            message: STATUS_MESSAGE.SUCCESS_CREATE_USER
          }
    }catch(error){
        return {
            status: HTTP_STATUS.BAD_REQUEST,
            message: `${STATUS_MESSAGE.ERR_GET} ${error}`,
          };
    }
}

/**
 * @function getAllTruckFactorProto
 * @description This function handles an asynchronous call to fetch all TruckFactor records from the database.
 * It performs a database query using a predefined query string, formats the retrieved data as a JSON string,
 * and then returns the result with a status code.
 *
 * @param {Object} call - The call object containing request metadata and parameters.
 * @param {Function} callback - The callback function to send the response back to the client.
 * 
 * @returns {void} This function does not return a value directly. Instead, it sends the response through the callback function.
 *
 * @async
 */
const getAllTruckFactorProto = async(call,callback) => {

    let data = await db.query(QUERY_STRING.GET_ALL_TRUCK_FACTOR)
    if(data.rows.length > 0){
        data = JSON.stringify(data.rows,null,3)
        
        let result = {data:data}
        callback(null,result)
    }else{
        let result = {data:[]}
        callback(null,result)
    }
}

module.exports = { 
    getAllTruckFactor,
    getDetailTruckFactor,
    insertTruckFactor,
    updateTruckFactor,
    deleteTruckFactor,
    bulkInsert,
    getAllTruckFactorProto
};