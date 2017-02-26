(function(){
        "use strict";
        angular.module("ngClassifieds")
        	   .controller("classifiedsCtrl",["$scope","$http","classifiedsFactory","$mdSidenav","$mdToast","$mdDialog",function($scope,$http,classifiedsFactory,$mdSidenav,$mdToast,$mdDialog){
                   
                         $scope.classifieds ={};
                         classifiedsFactory.getClassifieds().then(function(classifieds){
                         	 $scope.classifieds = classifieds.data;
                         });
                         var contact = {
                         	name:"manish",
                         	phone:"85214702",
                         	email:"manish@mail.com"
                         };
                         $scope.openSidebar =function(){
                             $mdSidenav('left').open();
                         };
                         $scope.closeSidebar =function(){
                             $mdSidenav('left').close();
                         };
                         $scope.saveClassified = function(classified){
                         	 if(classified){
                         	 	classified.contact = contact;
                         	 	classified.created = new Date().getTime();
                                 $scope.classifieds.push(classified);
                                 $scope.classified = {};
                                  $mdSidenav('left').close();
                                  showToast('classified Saved !!!');
                         	 }
                         };
                         function showToast(msg){
                         	$mdToast.show(
                                  	$mdToast.simple()
                                            .content(msg)
                                            .position("top,left")
                                            .hideDelay("3000")
                                  	);
                         }
                         $scope.saveEdit = function(){
                         	$scope.editing =false;
                         	$scope.closeSidebar();
                            showToast('classified Edited Successfully !!!');
                         };
                         $scope.editClassified = function(editClassified){
                         	$scope.editing =true;
                         	$mdSidenav('left').open();
                         	$scope.classified = editClassified;
                         }
                         $scope.deleteClassified = function(event,classified){
                         	var confirm  = $mdDialog.confirm()
                         	               .title("Are you sure you want to delete '"+classified.title+"' ?")
                         	               .ok('yes')
                         	               .cancel("Nope")
                         	               .targetEvent(event);
                            	            $mdDialog.show(confirm).then(function(){
									    	var index = $scope.classifieds.indexOf(classified);
										    $scope.classifieds.splice(index,1);
										    showToast('classified Deleted Successfully !!!');
                         	          },function(){

                         	          });
                         	
                         	   
                         }
        	   }]);


})();