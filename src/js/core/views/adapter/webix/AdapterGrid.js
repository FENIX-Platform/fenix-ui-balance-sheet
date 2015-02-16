define([], function(){


    'use strict'


    var numberOfColumns, differentDates,mapTitles, configurator


    function AdapterDataTable(){
        differentDates = [];
        mapTitles = {}
    }

    AdapterDataTable.prototype.init = function(Configurator){
        configurator = Configurator;
    }


    // get the clicked cell from the model data and the index of Table model
    AdapterDataTable.prototype.getClickedCell = function(TableModel, Configurator, idDatatable, grid, indexesObject) {
        var result = {};
        var rowGridIndex, columnGridIndex;

        // starts from -1, because it includes the first column
        var columnsNumber = -1;
        grid.eachColumn(
            function (col){
                columnsNumber++;
            }
        )
        var numberLeftKeyColumns = Configurator.getLeftKeyColumn().leftColumns.length

        var clickedCell;

        // columnIndex
        var columnIndex  = grid.getColumnIndex(idDatatable.column)-1;
        var rowIndex = grid.getIndexById(idDatatable);

        rowGridIndex = rowIndex;
        columnGridIndex = columnIndex

        if(rowIndex == 0){
            var indTable = columnIndex
            clickedCell = TableModel[indTable]
        }
        else{
            indTable = (rowIndex* columnsNumber)+columnIndex
            clickedCell = TableModel[indTable]
        }
        result["clickedCell"]   = clickedCell;
        result["indTable"]      = indTable;
        result["rowGridIndex"]    = rowGridIndex;
        result["columnGridIndex"]    = columnGridIndex;
        return result;
    }


    AdapterDataTable.prototype.createPropertiesFromModel = function(model){
        // OK
        differentDates = {};
        // Only one dimension admitted
        var upKeyColumnIndex = configurator.getUpKeyColumnIndexes()[0];
        var leftKeyColumnIndex = configurator.getLeftKeyColumnIndexes()[0];

        differentDates[ model[0][upKeyColumnIndex]] = true
        numberOfColumns = 1
        for(var i =0; i< model.length; i++){
            // not exist in map
            if(typeof mapTitles[model[i][leftKeyColumnIndex]] == 'undefined') {
                mapTitles[model[i][leftKeyColumnIndex]] = [i]
            }
            else{
                mapTitles[model[i][leftKeyColumnIndex]].push(i)
            }
            if(typeof differentDates[model[i][upKeyColumnIndex]] === 'undefined'){
                differentDates[model[i][upKeyColumnIndex]] = true
                numberOfColumns++;
            }
        }
    }


    AdapterDataTable.prototype.getNumberOfColumns = function(){

        return numberOfColumns;
    }


    AdapterDataTable.prototype.getDifferentDates = function() {

        return differentDates;
    }


    AdapterDataTable.prototype.getTitlesMap = function(){
        return mapTitles;

    }





    return AdapterDataTable
})