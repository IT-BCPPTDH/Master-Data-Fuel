let grpc = require('@grpc/grpc-js');
const MasterData = require('../config');
const { getAllTruckFactorProto } = require('../../controllers/master-data-truck-controller');
const { conditionalUnitProto, getAllUnitLVProto, getAllEquip } = require('../../controllers/master-data-unit-controller');
const { filterBanlaws } = require('../../controllers/master-data-unit-banlaws.controller');

const server = new grpc.Server();
server.addService(MasterData.Greeter.service,
  {
    getTruckFactor: getAllTruckFactorProto,
    getUnit: conditionalUnitProto,
    getUnitLvProto: getAllUnitLVProto,
    getEquipment: getAllEquip,
    getFilterBanlaws: filterBanlaws, 
  });

server.bindAsync(process.env.grpcMasterDataDev, grpc.ServerCredentials.createInsecure(), () => {
  console.log('grpc master data run')
  //server.register();
});