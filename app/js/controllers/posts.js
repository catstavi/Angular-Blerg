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
    $scope.newName = "new controller WOWOWOW";
    $scope.submitNewPost = function() {
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
}]);
