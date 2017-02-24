(function(){
        "use strict";
        angular.module("ngClassifieds")
        	   .controller("classifiedsCtrl",["$scope","$http","classifiedsFactory","$mdSidenav",function($scope,$http,classifiedsFactory,$mdSidenav){
                   
                         $scope.classifieds ={};
                         classifiedsFactory.getClassifieds().then(function(classifieds){
                         	 $scope.classifieds = classifieds.data;
                         });
                         $scope.openSidebar =function(){
                             $mdSidenav('left').open();
                         };
                         $scope.closeSidebar =function(){
                             $mdSidenav('left').close();
                         };
        	   }]);

})();