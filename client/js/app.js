/* register the modules the application depends upon here*/
angular.module('listings', []);
angular.module('users', []);
angular.module('blogPosts', []);

/* register the application and inject all the necessary dependencies */
var app = angular.module('directoryApp', ['listings','users','blogPosts']);
