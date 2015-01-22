var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController', ['$scope', '$http', 'apiService',
  function($scope, $http, apiService) {
    $scope.name = "posts controller yay!"
    // $scope.posts = $http.get('http://localhost:3000/posts')
    apiService.get('posts')
      .success(function(data) {
      $scope.posts = data;
    });
}]);


postsControllerModule.controller('newPostController', ['$scope', '$http', 'apiService',
  function($scope, $http, apiService) {
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
      apiService.postPost($scope.newPost)
    }
}]);

postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams', 'apiService',
  function($scope, $http, $stateParams, apiService) {
    $scope.postName = "this is the post view";
    $scope.id = $stateParams.id;
    apiService.get('/posts/'+$scope.id)
      .success(function(data) {
        $scope.post = data;
      });

    $scope.deletePost = function() {
      apiService.delete('posts',$scope.id)
        .success(function() {
          window.location="#/posts";
        });
    };

}]);

postsControllerModule.controller('editPostController', ['$scope', '$http', '$stateParams', 'apiService',
  function($scope, $http, $stateParams, apiService) {

    $scope.newPost = {"title": '', "content": '', "tag_ids": [ ]};


    $scope.editPost = function() {
      console.log('posts'+$scope.id)
      apiService.edit($scope.newPost, 'posts', $scope.id)
      .success(function() {
        console.log('meowmeow')
    });
  };
}]);
