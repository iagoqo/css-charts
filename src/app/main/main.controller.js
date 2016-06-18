(function() {
  'use strict';

  angular
    .module('csvCharts')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    var vm = this;

    $scope.onFileUpload = onFileUpload;

    /////

    function onFileUpload(fileContent){
      vm.fileContent = fileContent;
      console.log(fileContent);
    }
  }
})();
