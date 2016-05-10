angular.module('MyApp.directives')
    .filter('directiveName',[
        function () {
            'use strict';
            return{
                restrict: 'E',
                templateUrl:'path/to/the/template.html',
                 link: function () {
                /*your code */
                }
            };
         }]);
