#!/bin/bash
cd backend
npm install
nohup node app.js > app.log 2>&1 &
