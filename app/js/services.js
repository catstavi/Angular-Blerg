var servicesModule = angular.module('servicesModule', []);

servicesModule.factory('apiService', ['$http', function($http) {
  var url = 'http://localhost:3000/';

  return {
    get: function(page){
      return $http.get(url + page);
    },
    postPost: function(newPost) {
      return $http.post(url+'posts',
        {
          post: {
            title: newPost.title,
            content: newPost.content,
            date: new Date()
          }
        }
      )
    },
    delete: function(type, id) {
      $http.delete(url+type+'/'+id)
    },
    edit: function(newPost, type, id) {
      return $http.patch(url+type+'/'+id,
        {
          post: {
            title: newPost.title,
            content: newPost.content,
          }
        }
      )
    }
  }
}]);
