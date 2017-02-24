(function(){
	"use strict";
	angular.module("ngClassifieds")
	       .service("classifiedsFactory",["$http",function($http){
	       	 this.getClassifieds = function(){
	       	 	return $http.get("data/classifieds.json");
	       	 }

	       }]);
})();