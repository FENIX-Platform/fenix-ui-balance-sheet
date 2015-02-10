/*global define*/
define(function () {

    var config = {

        paths: {

            'fx-bsheet/start'                       :  "./start",
            'fx-bsheet/configurator'                :  "./core/utils/configurator/Configurator",
            'fx-bsheet/filterDataConf'              :  "./core/utils/filterDataConfigurator/FilterDataConfigurator",
            'fx-bsheet/modelsController'            :  "./core/models/controller/ModelsController",
            'fx-bsheet/tableDataModel'              :  "./core/models/tableDataModel/TableDataModel",
            'fx-bsheet/d3sAdapter'                  :  "./core/models/adapters/D3SModelsAdapter",
            'fx-bsheet/gridDataModel'               :  "./core/models/gridDataModel/GridDataModel",
            'fx-bsheet/generalController'           :  "./core/controller/BalanceSheetController",
            'fx-bsheet/viewControllers'             :  "./core/views/controller/ControllerViews",
            'fx-bsheet/adapterGrid'                 :  "./core/views/adapter/webix/AdapterGrid",
            'fx-bsheet/visualizationModel'          :  "./core/views/modelView/ViewModel" ,
            'fx-bsheet/gridCreator'                 :  "./core/views/gridDataView/GridCreator",
            'fx-bsheet/dataTypesFormatter'          :  "./core/utils/formatter/DataTypeFormatter",




            /*   --------------------------  TO DELETE  --------------------------------------- */
            'fx-bsheet/testFolder'                  :  "../../tests/balanceSheet/v1/",
            /*   ------------------------------------------------------------------------------ */



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
            'bootstrap' : '{FENIX_CDN}/js/bootstrap/3.2/js/bootstrap.min',
            'jquery'    : '{FENIX_CDN}/js/jquery/2.1.1/jquery.min',
            'moment'    : '{FENIX_CDN}/js/moment/2.9.0/moment.min',
            'numeral'   : '{FENIX_CDN}/js/numeral/1.5.3/min/numeral.min',
            'jqwidgets' : '{FENIX_CDN}/js/jqwidgets/3.1/jqx-light',
            'text'      : '{FENIX_CDN}/js/requirejs/plugins/text/2.0.12/text',
            'webix'     : '{FENIX_CDN}/js/webix/2.2.1/js/webix',
            'nprogress' : '{FENIX_CDN}/js/nprogress/0.1.6/nprogress',
            'select2'   : '{FENIX_CDN}/select2/3.5.2js/select2.min',
            'amplify'   : '{FENIX_CDN}/js/amplify/1.1.2/amplify.min'
        },
        shim: {
            'jqwidgets': {
                deps: ['jquery']
            },
            'bootstrap': {
                deps: ['jquery']
            },
            'amplify' : {
                deps : ['jquery']
            }
        }
    };

    return config;
});
