#!/bin/bash

pm2 stop master-data-staging
pm2 delete master-data-staging
pm2 save