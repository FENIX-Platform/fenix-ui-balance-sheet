/*global define*/
define([
    'jquery',
    'nprogress',
    'fx-bsheet/configurator',
    'fx-bsheet/modelsController',
    'fx-bsheet/generalController',
    'fx-bsheet/filterDataConf'



], function($, NProgress, Configurator, ModelsController, GeneralController, FilterDataConf){

    'use strict';

    var configurator, modelController, generalController, filterDataConf;


    function Start(options) {

        this.o = $.extend(true, {}, options);



        if(this.validateInput(this.o)) {
            filterDataConf = new FilterDataConf;
            configurator = new Configurator;
            modelController = new ModelsController;
            generalController = new GeneralController;
        }
        else{
            console.error(this.errors);
            throw new Error("FENIX Balance sheet has not a valid configuration");
        }
    }


    Start.prototype.init = function () {

        NProgress.start()
        console.log(this.o.configurations.componentConfig)

        configurator.init(this.o.resources.dsd, this.o.configurations)

        modelController.init(this.o.resources.data, configurator)
        filterDataConf.init(this.o.resources.filterData);


        generalController.init( configurator, modelController,filterDataConf, NProgress);


        console.log('start here!')
    };


    Start.prototype.validateInput = function(input){


        this.errors = {}

        // options
        if(!this.o.hasOwnProperty("resources")){
            this.errors['resources'] = "'resources' attribute not present in component input";
        }

        if(!this.o.hasOwnProperty("configurations")){
            this.errors['configurations'] = "'configurations' attribute not present in component input";
        }


        if(!this.o.resources.hasOwnProperty("dsd")){
            this.errors['resources']['dsd'] = "'dsd' attribute not present in component input RESOURCES";
        }

        if(!this.o.resources.hasOwnProperty("data")){
            this.errors['resources']['data'] = "'data' attribute not present in component input RESOURCES";
        }

        if(!this.o.configurations.hasOwnProperty("componentConfig")){
            this.errors['configurations']['componentConfig'] = "'componentConfig' attribute not present in component input CONFIGURATIONS";
        }


        return (Object.keys(this.errors).length === 0);
    }


    return Start;
});