const db = require('../database/helper');
const { HTTP_STATUS, STATUS_MESSAGE } = require('../helpers/enumHelper')
const { QUERY_STRING } = require('../helpers/queryEnumHelper')
const { insertToActivity, bulkInsert, editActivity } = require('../query-service/activity/activity-service')

async function getAllActivity() {
    try{
        const data = await db.query(QUERY_STRING.GET_ALL_ACTVITY)

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

async function insertActivity(postData) {
    try{
        const data = await insertToActivity(postData)

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

async function updateActivity(updateData){
    try{
        const data = await editActivity(updateData)

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

async function getActivity(activityId){
    try{
        console.log(activityId)
        const data = await db.query(QUERY_STRING.GET_DETAIL_ACTIVITY, [activityId])

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

async function deleteActivity(activityId){
    try{
        console.log(activityId)
        const data = await db.query(QUERY_STRING.DELETE_ACTIVITY, [activityId])

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

async function bulkInsertActivity(bulkData){
    try{
        for (let index = 0; index < bulkData.length; index++) {
            const element = bulkData[index];
            const inserted = await insertToActivity(element)
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

module.exports = { 
    getAllActivity,
    insertActivity,
    updateActivity,
    getActivity,
    deleteActivity,
    bulkInsertActivity
};