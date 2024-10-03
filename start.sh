#!/bin/bash

pm2 start --name=master-data-dev index.js
pm2 save
