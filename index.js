const uWS = require('uWebSockets.js');
const masterDataRoutes = require('./routes/master-data-routes')

const masterDataActivityRoutes = require('./routes/master-data-activity-routes')
const masterDataBucketCapRoutes = require('./routes/master-data-bucket-cap-routes')
const masterDataHaulerCapRoutes = require('./routes/master-data-hauler-cap-routes')
const masterDataLocationRoutes = require('./routes/master-data-location-routes')
const masterDataMaterialRoutes = require('./routes/master-data-material-routes')
const masterDataProdBudgetRoutes = require('./routes/master-data-prod-budget-routes')
const masterDataSiteRoutes = require('./routes/master-data-site-routes')
const masterDataTruckFactorRoutes = require('./routes/master-data-truck-factor-routes')
const masterDataUnitRoutes = require('./routes/master-data-unit-routes')
const masterDataOperatorRoutes = require('./routes/master-data-operator-routes')
const masterDataStationRoutes = require('./routes/master-data-station-routes')
const masterDataSonding = require('./routes/master-data-sonding-routes')
const masterDataUnitBanlaws = require('./routes/master-data-unit-banlaws-routes')
const masterDataMasterElipses = require('./routes/master-data-elipses-routes')

require('dotenv').config();
require('./proto/server/server')

const port = process.env.PORT;
const app = uWS.App();

// Cors Setup
app.options('/*', (res, req) => {
  res.writeHeader('Access-Control-Allow-Origin', '*');
  res.writeHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.writeHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.writeHeader('Access-Control-Allow-Credentials', 'true');

  res.onAborted(() => {
    res.aborted = true;
  });

  res.end();
});

// Prohibit Direct Access
app.get('/', (res, req) => {
  res.cork(() => {
    res.write('<html>');
    res.write('<h1>Masdat</h1>');
    res.end('</html>');
  });
})

// routes
masterDataRoutes(app);

masterDataActivityRoutes(app)

masterDataBucketCapRoutes(app)

masterDataUnitRoutes(app)

masterDataHaulerCapRoutes(app)

masterDataLocationRoutes(app)

masterDataMaterialRoutes(app)

masterDataProdBudgetRoutes(app)

masterDataSiteRoutes(app)

masterDataTruckFactorRoutes(app)

masterDataOperatorRoutes(app)

masterDataStationRoutes(app)

masterDataSonding(app)

masterDataUnitBanlaws(app)

masterDataMasterElipses(app)

// // WebSocket route 
// websocketRoute(app)

// createWorker()

// Server Listener
app.listen('0.0.0.0', port, (token) => {
  if (token) {
    console.log('Listening to port ' + port);
  } else {
    console.log('Failed to listen to port ' + port);
  }
});
