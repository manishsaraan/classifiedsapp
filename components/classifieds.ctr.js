(function(){
        "use strict";
        angular.module("ngClassifieds")
        	   .controller("classifiedsCtrl",["$scope",function($scope){
                   
                         $scope.classifieds =[{
                         	title:'First Item',
                         	price:'1500',
                         	created:'2015-10-14',
                         	content:"lorem iosdflksjdf sdf dsf dsf dsf dfdsklf dsfj sdflkjasdf ;lkjsdflkdsjf sdlfkjds kfdsklfj dsflksdjfldsjf lsdff dslfkjdsf lkj"
                         },
                         {
                         	title:'Second Item',
                         	price:'1500',
                         	created:'2015-10-14',
                         	content:"lorem iosdflksjdf sdf dsf dsf dsf dfdsklf dsfj sdflkjasdf ;lkjsdflkdsjf sdlfkjds kfdsklfj dsflksdjfldsjf lsdff dslfkjdsf lkj"
                         },
                         {
                         	title:'Third Item',
                         	price:'1500',
                         	created:'2015-10-14',
                         	content:"lorem iosdflksjdf sdf dsf dsf dsf dfdsklf dsfj sdflkjasdf ;lkjsdflkdsjf sdlfkjds kfdsklfj dsflksdjfldsjf lsdff dslfkjdsf lkj"
                         },
                         {
                         	title:'Fourth Item',
                         	price:'1500',
                         	created:'2015-10-14',
                         	content:"lorem iosdflksjdf sdf dsf dsf dsf dfdsklf dsfj sdflkjasdf ;lkjsdflkdsjf sdlfkjds kfdsklfj dsflksdjfldsjf lsdff dslfkjdsf lkj"
                         }];
        	   }]);

})();