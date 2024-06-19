const db = require('../database/helper');
const { HTTP_STATUS, STATUS_MESSAGE } = require('../helpers/enumHelper')
const { QUERY_STRING } = require('../helpers/queryEnumHelper')
const { insertToUnit, editUnit } = require('../query-service/unit/unit-service')

async function getAllUnit() {
    try{
        const data = await db.query(QUERY_STRING.GET_ALL_UNIT)
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

async function getDetailUnit(id){
    try{
        const data = await db.query(QUERY_STRING.GET_DETAIL_UNIT, [id])

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

async function insertUnit(postData) {
    try{
        const data = await insertToUnit(postData)

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

async function updateUnit(updateData){
    try{
        const data = await editUnit(updateData)

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

async function deleteUnit(id){
    try{
        const data = await db.query(QUERY_STRING.DELETE_UNIT, [id])

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
            const inserted = await insertToUnit(element)
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

async function conditionalUnit(arrayData) {
    try{
    
        const data = await db.query(QUERY_STRING.GET_UNIT_TRUCK, [arrayData])
        
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

const conditionalUnitProto = async(call,callback) => {
    
    let data = await db.query(QUERY_STRING.GET_UNIT_TRUCK, [call.request.data])

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
    getAllUnit,
    getDetailUnit,
    insertUnit,
    updateUnit,
    deleteUnit,
    bulkInsert,
    conditionalUnit,
    conditionalUnitProto
};