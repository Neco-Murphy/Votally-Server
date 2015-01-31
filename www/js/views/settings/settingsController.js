'use strict';

angular.module('App.Settings', [])

.controller('SettingsController', function($scope, $window, $location, Auth, FriendsFactory, ServerRequests, ServerRoutes){ //Auth, ServerRequests, ServerRoutes are factories
  var userId = $window.localStorage.getItem('userId');

  var userInfo = FriendsFactory.userInfo;

  //a list that populates the settings, and the appropriate action to take when clicked upon
  $scope.Settings = [
    { title: 'My Account',
      isDivider: true,
      hovers: false,
      action: function(){
        return;
      }
    },
    { title: 'Username: ' + userInfo.username,
      isDivider: false,
      hovers: false,
      action: function(){
        return;
      }
    },
    { title: 'Email: ' + userInfo.email,
      isDivider: false,
      hovers: false,
      action: function(){
        return;
      }
    },
    { title: 'Account Activities',
      isDivider: true,
      hovers: false,
      action: function(){
        return;
      }
    },
    { title: 'Logout',
      isDivider: false,
      hovers: true,
      action: function(){
        //Auth.logout sends an http request to the server to remove the token from the database and resets the local storage
        Auth.logout(userId);
      }
    }
  ];
})



