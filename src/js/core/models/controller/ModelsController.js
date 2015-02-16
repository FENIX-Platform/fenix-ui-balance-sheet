define(["jquery",
    'fx-bsheet/tableDataModel',
    'fx-bsheet/gridDataModel',
    'fx-bsheet/d3sAdapter',
    'moment'], function ($, TableDataModel, GridDataModel, ModelCreator) {


    'use strict'


    var TableModel, GridModel, indexes, instanceGridDataModel, instanceTableDataModel, fullTableModel, newValues, dataTable, CreatorModels,
        modelForCreation, Configurator;

    function ModelsController() {
        TableModel = new TableDataModel;
        GridModel = new GridDataModel;
        CreatorModels = new ModelCreator;
    }

    ModelsController.prototype.init = function (tableData, configurator) {

        Configurator = configurator;
        dataTable = tableData
        newValues = []; // New values will be put into this variable
        indexes = configurator.getAllColumnModels();
        instanceTableDataModel = tableData;
        TableModel.init(tableData, configurator);
        modelForCreation = CreatorModels.init(configurator)
        instanceGridDataModel = GridModel.init(modelForCreation, tableData, indexes)


        console.log(configurator.getLeftKeyColumn())

        console.log("---------------------------------------------------")


        console.log(configurator.getUpKeyColumn())
        console.log("---------------------------------------------------")

        TableModel.createFullTableData(modelForCreation)

        // if a full rows representation need to be visualized

        var rowsRepresentation = (typeof configurator.getFullRowsRepresentation()!= 'undefined')? configurator.getFullRowsRepresentation():  true;

        var columnsRepresentation = (typeof configurator.getFullColumnsRepresentation()!= 'undefined')? configurator.getFullColumnsRepresentation():  false;

        var newTable;
        console.log(GridModel)
        debugger;
        switch (true){

            case (rowsRepresentation == columnsRepresentation) :

                // full columns and full rows OR everycolumns and everyRows
                newTable = (rowsRepresentation == false)?
                    TableModel.everyRowEveryColumnModel(): TableModel.fullColumnFullRowModel();
                break;

            case (rowsRepresentation == true):

                // every row and full column
                newTable = TableModel.fullRowEveryColumnModel();
                break;

            case (rowsRepresentation == false):
                newTable = TableModel.fullColumnEveryRowModel();
                break;
        }






        console.log("-------------------------------------------------------------")
        console.log(newTable)
        console.log("-------------------------------------------------------------")

        debugger;

        TableModel.createSparseTableData(newTable);

    }

    ModelsController.prototype.getTableDataModel = function () {
        return TableModel.getTableData();
    }

    ModelsController.prototype.getGridDataModel = function () {
        return GridModel.getGridDataModel();
    }

    ModelsController.prototype.getData = function () {
        return TableModel.getAllData();
    }

    ModelsController.prototype.createFullTableModel = function () {
        fullTableModel = TableModel.createFullTableData(instanceGridDataModel)
        return fullTableModel;
    }

    ModelsController.prototype.getFullTableModel = function () {
        return fullTableModel;
    }

    ModelsController.prototype.updateModels = function (cell, indTable, rowIndex, columnIndex) {
        var newCell = cell;

        newValues.push(newCell);
        //fullTableModel[indTable] = newCell;
        TableModel.updateTableData(cell, indTable)
        instanceTableDataModel = TableModel.getTableData();
        // Create a GRid Model
        GridModel.updateModel(cell, rowIndex, columnIndex)
        instanceGridDataModel = GridModel.getGridDataModel();
    }


    ModelsController.prototype.getFullRowsIndexes = function () {
        return TableModel.getFullIndexRows();
    }


    ModelsController.prototype.getFullColumnsIndexes = function () {
        return TableModel.getFullIndexColumns();
    }


    ModelsController.prototype.getIndexesNewFirstColumnLeft = function () {
        return TableModel.getIndexesDoubleColumns();
    }


    ModelsController.prototype.getMapDomainCodes = function (indexColumn) {
        TableModel.getMapDomainCodes(indexColumn)

    }

    ModelsController.prototype.getDataToSave = function(){
        return TableModel.getDataToSave()
    }


    // This method is strict coupled to amis cbs
    ModelsController.prototype.createNewForecast = function(){
        var muArray = ["Thousand tonnes", "Thousand tonnes","Thousand tonnes","Thousand tonnes","Thousand tonnes",
            "Thousand tonnes","Thousand tonnes","Thousand tonnes","Thousand tonnes","Thousand tonnes",
            "Thousand tonnes","Thousand tonnes","Thousand tonnes","Thousand tonnes","Thousand tonnes","Thousand tonnes",
            "Thousand Ha","Thousand Ha","Tonnes/Ha","1000s","%","Kg/Yr"]
        var codes = Configurator.getLeftKeyColumn().leftColumns[0].domain.codes;
        var result = []
        var dateOfForecast = new Date();
        var dateDsdFormat = moment(dateOfForecast).format("YYYYMMDD");
        var tableModel = TableModel.getTableData();

        // if not exist
        if(this.checkBeforeCreateNewForecast(tableModel, dateDsdFormat)){
            for (var i = 0; i < codes.length; i++) {
                result[i] = [];
                result[i][0] = codes[i].code.code;
                result[i][1] = muArray[i]
                result[i][2] = dateDsdFormat;
                if(codes[i].code.code == 1){
                    var notFound = true;
                    for(var k = 0; k<tableModel.length && notFound; k++){
                        if(tableModel[k][2] != "20000103" && tableModel[k][0] == 1){
                            result[i][3] = (tableModel[k][3])? tableModel[k][3] : null;
                            notFound = false;
                        }
                    }
                }else {
                    result[i][3] = null;
                }
                result[i][4] = null;
                result[i][5] = null;
            }
            var d = TableModel.addNewForecast(result);
        }
        return d;
    }

    // This method is strict coupled to amis cbs
    ModelsController.prototype.checkBeforeCreateNewForecast = function(model, date){
        var notFound = true;
        for(var i = 0, length = model.length; i<length && notFound; i++){
            if(date == model[i][2]){
                notFound = false
            }
        }
        return notFound
    }


    ModelsController.prototype.saveDataFromSpecialForm = function(newData, indTable, rowGridIndex, columnGridIndex, typeOfForm){
        var indexesTableData = TableModel.updateDataFromSpecialForm(newData, typeOfForm)
        // TODO: save also grid data
        return indexesTableData;
    }

    return ModelsController;
})