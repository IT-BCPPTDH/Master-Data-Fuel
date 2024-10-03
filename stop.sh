#!/bin/bash

pm2 stop master-data-dev
pm2 delete master-data-dev
pm2 save
