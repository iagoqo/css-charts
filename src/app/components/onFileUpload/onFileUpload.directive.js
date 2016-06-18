// Source: https://jsfiddle.net/alexsuch/6aG4x/
(function() {
  angular.module('csvCharts')
    .directive('onFileUpload', function($parse) {
      return {
        restrict: 'A',
        scope: false,


        link: function(scope, element, attrs) {
          var fn = $parse(attrs.onFileUpload);

          element.on('change', function(onChangeEvent) {
            var reader = new FileReader();

            reader.onload = function(onLoadEvent) {
              scope.$apply(function() {
                fn(scope, { $fileContent: onLoadEvent.target.result });
              });
            };

            reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
          });
        }


      };
    });

})();
