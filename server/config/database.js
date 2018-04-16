require('dotenv').config();
const path = require('path');
const debug = require('debug')("server:"+path.basename(__filename).split('.')[0]);
const mongoose = require('mongoose');
//if you're working environment variables
//const DBURL = process.env.DBURL
//if you're running a local DB without environment variables
const DBURL = 'mongodb://localhost:27017/mean-app';

  mongoose.connect(DBURL,{useMongoClient:true})
  .then(() =>{
    debug(`connected to database ${DBURL}`)
  }).catch((err) => {
    debug(`ERROR CONNECTING TO DB ${DBURL}`);
    throw err;
  })