define(['jquery', 'jqwidgets', 'amplify'], function($){

    'use strict'


    var generalController


    function BalanceSheetObserver(){}


    BalanceSheetObserver.prototype.init = function(GeneralController, initThousand, initElement){
        generalController = GeneralController;
        this.listenToVisualizationOptions(initThousand);
        this.listenToElementsOptions(initElement);
        this.listenToResetButton();
    }


    BalanceSheetObserver.prototype.listenToResetButton = function(){
        $('#fx-bsheet_resetGrid').on('click', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            debugger;
            $('#fx-bsheet_loadData').click();

        })
    }


    BalanceSheetObserver.prototype.listenToElementsOptions = function(check) {

        this.updateCheckingBox('elements',check)
        $('#fx-bsheet_everyElButtons').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('elements',1)

        });

        $('#fx-bsheet_flagButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('elements',2)
        });

        $('#fx-bsheet_noteButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('elements',3)
        });

        $('#fx-bsheet_valueButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('elements',4)
        });
    }


    BalanceSheetObserver.prototype.listenToVisualizationOptions = function(check) {

        this.updateCheckingBox('separator',check)
        $('#fx-bsheet_commaButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('separator',1)

        });

        $('#fx-bsheet_periodButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('separator',2)

        });

        $('#fx-bsheet_spaceButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('separator',3)

        });
    }


    BalanceSheetObserver.prototype.onChangingLoadingModality = function(filterData){
        $('#fx-bsheet_changeModality').on('click', function(e){

            e.preventDefault();
            e.stopImmediatePropagation();
            var storeValue = amplify.store();
            var isMonthly = storeValue.isMonthlyModality
            if(isMonthly){
                amplify.publish("changeOnAnnualModality",{preloadingData: filterData})
            }else{
                amplify.publish("changeOnMonthlyModality",{preloadingData: filterData})
            }
        })
    }


    BalanceSheetObserver.prototype.updateCheckingBox = function(mode,check){
        if(mode == 'separator') {

            switch (check) {
                case 1:
                    $('#fx-bsheet_commaButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;

                case 2:
                    $('#fx-bsheet_periodButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;

                case 3:
                    $('#fx-bsheet_spaceButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;
            }
        }else{

            switch (check) {
                case 1:
                    $('#fx-bsheet_everyElButtons').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;

                case 2:
                    $('#fx-bsheet_flagButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;

                case 3:
                    $('#fx-bsheet_noteButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;

                case 4:
                    $('#fx-bsheet_valueButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;
            }
        }
    }


    return BalanceSheetObserver;
})
