angular.module("blogPosts", [])
  .factory("BlogPosts", function($http, $location) {
    const host = $location.protocol() + "://" + $location.host() + ":" + $location.port();
    var methods = {
      getAll: function() {
        return $http.get(host + "/api/blogPosts");
      },

      create: function(blogPost) {
        return $http.post(host + "/api/blogPosts", blogPost);
      },

      delete: function(id) {
        return $http.delete(host + "/api/blogPosts/" + id);
      }
    };

    return methods;
  });
