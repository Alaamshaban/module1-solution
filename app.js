(function () {
  'use strict';
angular.module('lunchcheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
  $scope.check=function(){
     var array=$scope.inputval.split(',');
  if(array.length>0 && array.length<=3){
    $scope.matched=true;
   $scope.notmatched=false;
  }
  else {
    $scope.notmatched=true;
    $scope.matched=false;
  }
  }
  $scope.sayenjoy=function(){
    return "Enjoy!";
  }
  $scope.saytoomuch=function(){
    return "Too much!"
  }

}



})();
