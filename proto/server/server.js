let grpc = require('@grpc/grpc-js');
const MasterData = require('../config');
const { getAllTruckFactorProto } = require('../../controllers/master-data-truck-controller');
const { conditionalUnitProto, getAllUnitLVProto } = require('../../controllers/master-data-unit-controller');

const server = new grpc.Server();
server.addService(MasterData.Greeter.service,
  {
    getTruckFactor: getAllTruckFactorProto,
    getUnit: conditionalUnitProto,
    getUnitLvProto: getAllUnitLVProto,
  });

server.bindAsync(process.env.grpcMasterDataDev, grpc.ServerCredentials.createInsecure(), () => {
  console.log('grpc master data run')
  //server.register();
});