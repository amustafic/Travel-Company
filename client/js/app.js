/* register the modules the application depends upon here*/
angular.module('listings', []);
angular.module('users', []);
angular.module('blogPosts', []);
angular.module('contacts', []);
angular.module('recommendations', []);
angular.module('requests', []);

/* register the application and inject all the necessary dependencies */
var app = angular.module('directoryApp', ['listings','users','blogPosts','contacts', 'recommendations', 'requests']);
