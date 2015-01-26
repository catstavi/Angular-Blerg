var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController', ['$scope', '$http', 'apiService',
  function($scope, $http, apiService) {
    // $scope.currentPath = window.location.hash;
    // console.log($scope.currentPath);
    // console.log($scope.currentPath == '#/posts/new-post');
    apiService.get('posts')
      .success(function(data) {
      $scope.posts = data;
    });
}]);


postsControllerModule.controller('newPostController', ['$scope', '$http', 'apiService',
  function($scope, $http, apiService) {
    $scope.newPost = {"title": '', "content": '', "tag_ids": [ ]};
    $scope.currentPath = window.location.hash;
    $scope.submitNewPost = function() {

      //sends to the view
      var postToPush = {};
      postToPush.title = $scope.newPost.title;
      postToPush.content = $scope.newPost.content;
      postToPush.tag_ids = $scope.newPost.tag_ids;
      postToPush.fakeDate = new Date();
      $scope.posts.unshift(postToPush);
      //sends to API
      apiService.postPost($scope.newPost).success(function() {
        window.location="#/posts";
      })
    }
}]);

postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams', 'apiService',
  function($scope, $http, $stateParams, apiService) {
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

    $scope.editPost = function() {
      console.log('posts'+$scope.id)
      apiService.edit($scope.post, 'posts', $scope.id)
      .success(function() {
        console.log('meowmeow')
      });
    }

}]);
//
// postsControllerModule.controller('editPostController', ['$scope', '$http', '$stateParams', 'apiService',
//   function($scope, $http, $stateParams, apiService) {
//
//     $scope.thisPost = {"title": '', "content": '', "tag_ids": [ ]};
//
//
//
//   };
// }]);
