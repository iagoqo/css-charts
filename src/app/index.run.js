(function() {
  'use strict';

  angular
    .module('csvCharts')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
