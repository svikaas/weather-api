/* jshint node:true */
'use strict';

var apickli = require('apickli');

var env = process.env.NODE_ENV || 'test';
//console.log('running on ' + env + ' environment');

module.exports = function() {
    // cleanup before every scenario
    this.Before(function(callback) {
        this.apickli = new apickli.Apickli('http', 'svikaas-test.apigee.net/v2/restaurants');
        //callback();
    });	
};
