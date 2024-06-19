let grpc = require('@grpc/grpc-js');
const MasterData = require('../config');
const { getAllTruckFactorProto } = require('../../controllers/master-data-truck-controller');
const { conditionalUnitProto } = require('../../controllers/master-data-unit-controller');

const server = new grpc.Server();
  server.addService(MasterData.Greeter.service,
     {
        getTruckFactor: getAllTruckFactorProto,
        getUnit: conditionalUnitProto
  });

server.bindAsync(process.env.grpcMasterData, grpc.ServerCredentials.createInsecure(), () => {
   console.log('grpc master data run')
   server.start();
 });