(function () {
  'use strict';
angular.module('lunchcheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
  $scope.inputval = "";
  $scope.check=function(){
  var array=$scope.inputval.split(',');
  if($scope.inputval==0){
   $scope.notmatched=false;
   $scope.matched=false;
   $scope.noelem=true;
  // console.log(array.length);
    //console.log($scope.inputval.length);
 }
  else if(array.length>0 && array.length<=3){
    $scope.matched=true;
   $scope.notmatched=false;
   $scope.noelem=false;
   console.log(array.length);
    console.log($scope.inputval.length);
  }
  else if(array.length>3) {
    $scope.notmatched=true;
    $scope.matched=false;
    $scope.noelem=false;
  }
  }
  $scope.sayenjoy=function(){
    return "Enjoy!";
  }
  $scope.saytoomuch=function(){
    return "Too much!"
  }
  $scope.please=function(){
    return "Please enter data first"
  }
}



})();
