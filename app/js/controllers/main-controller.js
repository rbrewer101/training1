(function() {

    'use strict';

    /*
     * Main Controller
     */
    angular.module('training.controllers').controller('MainCtrl', ['$scope', 'training.services.user', function($scope, userService) {

        $scope.users = [];

        $scope.newUser = {

            'userId': '',
            'firstName': '',
            'lastName': ''
        };


        $scope.removeUser = function(delUser){

            console.log("DEBUG:  MainCtrl : removeUser : item: ", delUser)

            userService.removeUser(delUser, function(err, status) {

                console.log("DEBUG: MainCtrl : item:  ", delUser), " passed to UserService.removeUser";
            });
        };

        $scope.createUser = function() {

            //console.log("DEBUG: user : ", $scope.newUser);

            $scope.newUser.userId = $scope.newUser.firstName.charAt(0) + $scope.newUser.lastName.charAt(0);

            userService.createUser($scope.newUser, function(err, status) {

                console.log("DEBUG: status : ", status);
            });
        };

        $scope.getUsers = function() {

            userService.getUsers(function(err, users) {

                $scope.users = users;
            });
        };
    }]);
}());