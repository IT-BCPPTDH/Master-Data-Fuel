const db = require('../database/helper');
const { HTTP_STATUS, STATUS_MESSAGE } = require('../helpers/enumHelper')
const { QUERY_STRING } = require('../helpers/queryEnumHelper')
const { insertToUnitBanlaws, editUnitBanlaws } = require('../query-service/unit-banlaws/unit-banlaws-service')


async function getAllUnitBanlaw() {
    try{
        const data = await db.query(QUERY_STRING.GET_ALL_UNIT_BANLAW)
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

async function getDetailUnitBanlaw(id){
    try{
        const data = await db.query(QUERY_STRING.GET_DETAIL_UNIT_BANLAW, [id])

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

async function insertUnitBanlaw(postData) {
    try{
        const data = await insertToUnitBanlaws(postData)

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

async function updateUnitBanlaw(updateData){
    try{
        const data = await editUnitBanlaws(updateData)

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

async function deleteUnitBanlaw(id){
    try{
        const data = await db.query(QUERY_STRING.DELETE_UNIT_BANLAW, [id])

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

async function bulkInsert(){
    try{
        for (let index = 0; index < bulkData.length; index++) {
            const element = bulkData[index];
            const inserted = await insertToUnitBanlaws(element)
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

async function filterBanlaws(call,callback) {
    let data = await db.query(QUERY_STRING.GET_ALL_UNIT_BANLAW)

    const filteredData = data.rows.filter(item => call.request.data.includes(item.unit_elipse));

    if(data.rows.length > 0){
        data = JSON.stringify(filteredData,null,3)
        
        let result = {data:data}
        callback(null,result)
    }else{
        let result = {data:[]}
        callback(null,result)
    }
}


module.exports = { 
    getAllUnitBanlaw,
    getDetailUnitBanlaw,
    insertUnitBanlaw,
    updateUnitBanlaw,
    deleteUnitBanlaw,
    bulkInsert,
    filterBanlaws
};