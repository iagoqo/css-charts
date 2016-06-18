(function() {

  angular.module('csvCharts')
    .filter('csvFilter', csvFilter);

  function csvFilter() {
    return function(csv) {
      // Use jQuery-csv to parse the csv data
      var table = $.csv.toArrays(csv);

      return table;
    };
  }

})();
