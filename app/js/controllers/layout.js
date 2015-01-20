var homeControllerModule = angular.module('homeControllerModule', []);

homeControllerModule.controller('homeController', ['$scope', '$http', function($scope, $http) {
  $scope.hello = "Hi";

  $scope.tags = [
    { "id": "1a", "name": "2cool4school" },
    { "id": "2b", "name": "kittycat" },
    { "id": "doop5", "name": "everything is awesome" }
  ]

  $scope.getTagName = function(id) {
    // loops through all of the tags in $scope.tags
    for (i = 0; i < $scope.tags.length; i++){
      if(id == $scope.tags[i].id) {
        var ret = $scope.tags[i].name
      }
    }
    return ret;
  }

  $scope.newPost = {"title": '', "content": '', "tag_ids": [ ]}

  $scope.submitNewPost = function() {
    var postToPush = {};
    postToPush.title = $scope.newPost.title;
    postToPush.content = $scope.newPost.content;
    postToPush.tag_ids = $scope.newPost.tag_ids;
    $scope.posts.push(postToPush);
  }

  $scope.toggleId = function(id) {
    var i = $scope.newPost.tag_ids.indexOf(id);
    if (i == -1) {
      $scope.newPost.tag_ids.push(id)
    } else {
      $scope.newPost.tag_ids.splice(i, 1)
    }
  }

  $scope.addTag = function(id) {
    var i = $scope.tagArray.indexOf(id);
    if(i=-1) {
      $scope.tagArray.push(id);
    } else {
      $scope.tagArray.splice(i, 1);
    }
  }
}]);

// homeControllerModule.filter('selectedTags', function() {
//   return function(posts, tagArray) {
//     return posts.filter(function(post) {
//       for (var i in posts) {
//         if(tagArray.length == 0) {
//           return true;
//         } else {
//           if(tagArray.indexOf(post.tag_ids[i]) != -1) {
//             return true;
//           }
//         }
//       }
//       return false;
//     })
//   }
// })
