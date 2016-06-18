(function() {
  'use strict';

  angular
    .module('csvCharts')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $filter) {
    var vm = this;

    $scope.onFileUpload = onFileUpload;

    /////

    function onFileUpload(fileContent){
      vm.fileContent = $filter('csvFilter')(fileContent);
      console.log(vm);
    }
  }
})();
