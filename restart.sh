#!/bin/bash

pm2 stop master-data-staging
pm2 delete master-data-staging
pm2 save

pm2 start --name=master-data-staging index.js
pm2 save