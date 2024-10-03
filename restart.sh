#!/bin/bash

pm2 stop master-data-dev
pm2 delete master-data-dev
pm2 save

pm2 start --name=master-data-dev index.js
pm2 save
