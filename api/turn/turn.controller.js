/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /Turns              ->  index
 * POST    /Turns              ->  create
 * GET     /Turns/:id          ->  show
 * PUT     /Turns/:id          ->  update
 * DELETE  /Turns/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var config = require('../../config/config.js');
var client = require('twilio')(config.accountSid, config.authToken);

// Get list of Turns
exports.index = function(req, res) {
    client.tokens.create({}, function(err, token) {
        res.json(200, token.iceServers);
    });
};


function handleError(res, err) {
  return res.send(500, err);
}