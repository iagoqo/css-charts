(function() {
  'use strict';

  angular
    .module('csvCharts')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($filter) {
    var vm = this;

    vm.onFileUpload = onFileUpload;

    /////

    function onFileUpload(fileContent){
      vm.fileContent = $filter('csvFilter')(fileContent);
    }
  }
})();
