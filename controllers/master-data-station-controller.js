const db = require('../database/helper');
const { HTTP_STATUS, STATUS_MESSAGE } = require('../helpers/enumHelper')
const { QUERY_STRING } = require('../helpers/queryEnumHelper')
const { insertToStation } = require('../query-service/station/station-service')
const bulkData = require('../data-json/master_station.json')

async function getAllStation() {
    try{
        const data = await db.query(QUERY_STRING.GET_ALL_STATION)
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

// async function getDetailSite(id){
//     try{
//         const data = await db.query(QUERY_STRING.GET_DETAIL_SITE, [id])

//         if(data){
//             return {
//               status: HTTP_STATUS.OK,
//               data: data.rows,
//               totalRow: data.rows.length
//             };
//         }else{
//             return {
//                 status: HTTP_STATUS.NOT_FOUND,
//                 message: STATUS_MESSAGE.NOT_FOUND
//               };
//         }
//     }catch(error){
//         return {
//             status: HTTP_STATUS.BAD_REQUEST,
//             message: `${STATUS_MESSAGE.ERR_GET} ${error}`,
//           };
//     }
// }

// async function insertStations(postData) {
//     try{
//         const data = await insertToSite(postData)

//         if(data){
//             return {
//               status: HTTP_STATUS.OK,
//               message: STATUS_MESSAGE.CREATED_DATA
//             };
//         }else{
//             return {
//                 status: HTTP_STATUS.NOT_FOUND,
//                 message: STATUS_MESSAGE.NOT_FOUND
//               };
//         }
//     }catch(error){
//         return {
//             status: HTTP_STATUS.BAD_REQUEST,
//             message: `${STATUS_MESSAGE.ERR_GET} ${error}`,
//           };
//     }
// }

// async function updateSite(updateData){
//     try{
//         const data = await editSite(updateData)

//         if(data){
//             return {
//               status: HTTP_STATUS.OK,
//               message: STATUS_MESSAGE.UPDATE_DATA
//             };
//         }else{
//             return {
//                 status: HTTP_STATUS.NOT_FOUND,
//                 message: STATUS_MESSAGE.NOT_FOUND
//               };
//         }
//     }catch(error){
//         return {
//             status: HTTP_STATUS.BAD_REQUEST,
//             message: `${STATUS_MESSAGE.ERR_GET} ${error}`,
//           };
//     }
// }

// async function deleteSite(id){
//     try{
//         const data = await db.query(QUERY_STRING.DELETE_SITE, [id])

//         if(data){
//             return {
//               status: HTTP_STATUS.OK,
//               message: STATUS_MESSAGE.DELETE_DATA
//             };
//         }else{
//             return {
//                 status: HTTP_STATUS.NOT_FOUND,
//                 message: STATUS_MESSAGE.NOT_FOUND
//               };
//         }
//     }catch(error){
//         return {
//             status: HTTP_STATUS.BAD_REQUEST,
//             message: `${STATUS_MESSAGE.ERR_GET} ${error}`,
//           };
//     }
// }

async function bulkInsert(){
    try{
        for (let index = 0; index < bulkData.length; index++) {
            const element = bulkData[index];
            const inserted = await insertToStation(element)
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

async function getByName(dataSend){
    try{
        const data = await db.query(QUERY_STRING.GET_STATION_BY_NAME, [dataSend])

   
        if(data.rows.length > 0){
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

module.exports = { 
    getAllStation,
    // getDetailSite,
    // insertSite,
    // updateSite,
    // deleteSite,
    bulkInsert,
    getByName
};