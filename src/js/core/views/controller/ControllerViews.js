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
        adapterGrid.init(Configurator)
        generalController = BSheetController;
        configurator = Configurator;
        filterDataConf = FilterDataConf;
        gridCreator.init(configurator,filterDataConf,this, adapterGrid)
        var prova = visualizationModel.init(tableData,configurator,filterDataConf);
        console.log(prova)
        gridCreator.renderGrid(prova);

    }

    ControllerViews.prototype.updateGridView = function(){

    }


    ControllerViews.prototype.updateBatchGridView = function(){

    }



    return ControllerViews;

})