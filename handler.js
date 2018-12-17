'use strict';
const mongoose = require('mongoose');
const discSchema = require('./schemas/disc');
const dbConfig = require('./config/config');

let conn = null;

module.exports.getDiscs = async (event, context) => {

  context.callbackWaitsForEmptyEventLoop = false;

  let response = {
    isBase64Encoded: false,
    statusCode: 200,
    headers: null,
    body: null
  }

if (conn == null) {
  conn = await mongoose.createConnection(dbConfig.server, {
    // Buffering means mongoose will queue up operations if it gets
    // disconnected from MongoDB and send them when it reconnects.
    // With serverless, better to fail fast if not connected.
    bufferCommands: false, // Disable mongoose buffering
    bufferMaxEntries: 0 // and MongoDB driver buffering
  });

  const discModel = conn.model('discs', discSchema);
 
}

const M = conn.model('discs');

const results = await M.find();

response.body = JSON.stringify({ discs: results});

return response;

};
