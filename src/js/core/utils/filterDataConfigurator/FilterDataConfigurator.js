define(['jquery'], function($){

    'use strict'

    var filterData;

    function FilterDataConfigurator(){}

    FilterDataConfigurator.prototype.init = function(data){
        filterData = data;
    }


    FilterDataConfigurator.prototype.getFilterData = function(){
        debugger;
        return $.extend(true,{},filterData);
    }


    return FilterDataConfigurator;
})