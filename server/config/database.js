require('dotenv').config();
const path = require('path');
const debug = require('debug')("server:"+path.basename(__filename).split('.')[0]);
const mongoose = require('mongoose');
//if you're working environment variables
//const dbURL = process.env.DBURL
//if you're running a local DB without environment variables
const dbURL = 'mongodb://localhost:27017/myproject';

  mongoose.connect(dbURL,{useMongoClient:true})
  .then(() =>{
    debug(`connected to database ${dbURL}`)
  }).catch((err) => {
    debug(`ERROR CONNECTING TO DB ${dbURL}`);
    throw err;
  })