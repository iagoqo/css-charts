(function() {

  angular.module('csvCharts')
    .filter('csvFilter', csvFilter);

  function csvFilter() {
    return function(csv) {
      var lines = csv.split('\n');
      var table = [];

      lines.forEach(function(line) {
        var row = line.split(',');
        table.push(row);
      });

      return table;
    }
  }

})();
