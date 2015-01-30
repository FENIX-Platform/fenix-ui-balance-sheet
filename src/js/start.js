/*global define*/
define([
    'jquery'
], function($){

    'use strict';

    function Start(options) {
        this.o = $.extend(true, {}, options);
    }

    Start.prototype.init = function () {

       console.log('start here!')
    };


    return Start;
});