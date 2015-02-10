define([
    'fx-bsheet/gridCreator',
    'fx-bsheet/adapterGrid',
    'fx-bsheet/visualizationModel'
], function(GridCreator, AdapterGrid, ViewModel){

    'use strict'


    var generalController, configurator,filterDataConf, gridCreator,
        adapterGrid, visualizationModel


    function ControllerViews(){
        adapterGrid = new AdapterGrid;
        gridCreator = new GridCreator;
        visualizationModel = new ViewModel;
    }


    ControllerViews.prototype.init = function(tableData, Configurator, FilterDataConf, BSheetController){
        generalController = BSheetController;
        configurator = Configurator;
        filterDataConf = FilterDataConf;
        gridCreator.init(configurator,filterDataConf,this, adapterGrid)
        gridCreator.renderGrid(visualizationModel.init(tableData,configurator,filterDataConf));

    }

    ControllerViews.prototype.updateGridView = function(){

    }


    ControllerViews.prototype.updateBatchGridView = function(){

    }



    return ControllerViews;

})