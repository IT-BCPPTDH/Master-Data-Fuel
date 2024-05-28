#!/bin/bash

pm2 start --name=master-data-staging index.js
pm2 save
