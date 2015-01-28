define(['jquery'], function($){

    'use strict'

    var o = {};

    function Start(options) {
        $.extend(true, o, options);
    }

    Start.prototype.init = function (options) {

       console.log('start here!')
    };


    return Start;
})