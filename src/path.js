define(function () {

    var config = {

        paths: {

            'fx-balance-sheet/start'                       :  "./start",
            /*
            'fx-balance-sheet/utilities'         :  "./balance-sheet/core/balanceSheet/configuration/utilities",
            'fx-balance-sheet/balanceSheet'      :  "./balance-sheet/core/balanceSheet",
            'fx-balance-sheet/models'            :  "./balance-sheet/core/balanceSheet/models",
            'fx-balance-sheet/views'             :  "./balance-sheet/core/balanceSheet/views",
            'fx-balance-sheet/view'              :  "./balance-sheet/core/balanceSheet/views/gridDataView",
            'fx-balance-sheet/configurator'      :  "./balance-sheet/core/balanceSheet/configuration/configurator",
            'fx-balance-sheet/generalController' :  "./balance-sheet/core/balanceSheet/controller",
            'fx-balance-sheet/modelController'   :  "./balance-sheet/core/balanceSheet/models/controllerDataModels",
            'fx-balance-sheet/editor'            :  "./balance-sheet/plugins/Amis/InputTool/editing/editors",
            'fx-balance-sheet/modalView'         :  "./balance-sheet/plugins/Amis/InputTool/editing/editors/modalView",
            'fx-balance-sheet/editorController'  :  "./balance-sheet/core/balanceSheet/editors/controller",
            'fx-balance-sheet/exporter'          :  "./balance-sheet/core/balanceSheet/exports",
            'fx-balance-sheet/validator'         :  "./balance-sheet/core/balanceSheet/validator",
            'fx-balance-sheet/formatter'         :  "./balance-sheet/core/balanceSheet/formatter",
            'fx-balance-sheet/adapterGrid'       :  "./balance-sheet/core/balanceSheet/visualization/webixDtable/adapter/AdapterDataTable",

            */


            //Third party libs
            'bootstrap': '{FENIX_CDN}/js/bootstrap/3.2/js/bootstrap.min',
            'jquery': '{FENIX_CDN}/js/jquery/2.1.1/jquery.min',
            'jqwidgets': '{FENIX_CDN}/js/jqwidgets/3.1/jqx-light',
            'text': '{FENIX_CDN}/js/requirejs/plugins/text/2.0.12/text',
            'webix':'{FENIX_CDN}/js/webix/2.2.1/js/webix',
            'select2':'{FENIX_CDN}/select2/3.5.2js/select2.min',
            'jquery.mb.flipText': '{FENIX_CDN}/js/jquery.mb.extruder/2.5.5/inc/jquery.mb.flipText',
            'jquery.hoverIntent': '{FENIX_CDN}/js/jquery.hoverIntent/1.0/jquery.hoverIntent',
            'amplify' : '{FENIX_CDN}/js/amplify/1.1.2/amplify.min'
        },
        shim: {
            'highcharts': {
                deps: ['jquery']
            },
            'jqwidgets': {
                deps: ['jquery']
            },
            'bootstrap': {
                deps: ['jquery']
            },
            'jquery.mb.flipText': {
                deps: ['jquery']
            },
            'jquery.hoverIntent': {
                deps: ['jquery']
            },
            'mbExtruder': {
                deps: ['jquery', 'jquery.mb.flipText', 'jquery.hoverIntent']
            },
            'amplify' : {
                deps : ['jquery']
            }
        }
    };

    return config;
});
