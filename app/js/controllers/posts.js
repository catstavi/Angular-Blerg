var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController', ['$scope', '$http',
  function($scope, $http) {
    $scope.name = "posts controller yay!"
    $scope.posts = $http.get('http://localhost:3000/posts').success(function(data) {
      $scope.posts = data;
    });
}]);




postsControllerModule.controller('newPostController', ['$scope', '$http',
  function($scope, $http) {
    $scope.newPost = {"title": '', "content": '', "tag_ids": [ ]};

    $scope.submitNewPost = function() {
      //sends to the view
      var postToPush = {};
      postToPush.title = $scope.newPost.title;
      postToPush.content = $scope.newPost.content;
      postToPush.tag_ids = $scope.newPost.tag_ids;
      postToPush.fakeDate = new Date();
      $scope.posts.unshift(postToPush);
      //sends to API
      $http.post('http://localhost:3000/posts',
        {
          post: {
            title: $scope.newPost.title,
            content: $scope.newPost.content,
            date: new Date()
          }
        })
    }
}]);

postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams',
  function($scope, $http, $stateParams) {
    $scope.postName = "this is the post view";
    $scope.id = $stateParams.id;
    $http.get('http://localhost:3000/posts/'+$scope.id).success(function(data) {
      $scope.post = data;
    });
    $scope.deletePost = function() {
      $http.delete('http://localhost:3000/posts/'+$scope.id)
      };
    }]);
