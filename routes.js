/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {
    app.use('/api/turn', require('./api/turn'));

    app.route('/:url(api|auth)/*')
        .get(function (req, res) {
            res.json({
                message: 'Hello!!!'
            })
        });

    app.route('/*')
        .get(function( req, res) {
            res.json({
                message: 'Hello!!!'
            })
        });
};
