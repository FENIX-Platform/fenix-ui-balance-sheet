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
        $('#resetGrid').on('click', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            debugger;
            $('#loadData').click();

        })
    }


    BalanceSheetObserver.prototype.listenToElementsOptions = function(check) {

        this.updateCheckingBox('elements',check)
        $('#everyElButtons').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('elements',1)

        });

        $('#flagButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('elements',2)
        });

        $('#noteButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('elements',3)
        });

        $('#valueButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('elements',4)
        });
    }


    BalanceSheetObserver.prototype.listenToVisualizationOptions = function(check) {

        this.updateCheckingBox('separator',check)
        $('#commaButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('separator',1)

        });

        $('#periodButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('separator',2)

        });

        $('#spaceButton').on('checked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
            generalController.onChangeVisualizationOption('separator',3)

        });
    }


    BalanceSheetObserver.prototype.onChangingLoadingModality = function(filterData){
        $('#changeModality').on('click', function(e){

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
                    $('#commaButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;

                case 2:
                    $('#periodButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;

                case 3:
                    $('#spaceButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;
            }
        }else{

            switch (check) {
                case 1:
                    $('#everyElButtons').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;

                case 2:
                    $('#flagButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;

                case 3:
                    $('#noteButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;

                case 4:
                    $('#valueButton').jqxRadioButton('check', function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation()
                    });
                    break;
            }
        }
    }


    return BalanceSheetObserver;
})
