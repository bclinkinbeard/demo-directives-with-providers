
angular.module('bilingualButtonModule', [])
  .provider('bilingualButtonConfig', function () {

    this.setLocale = function (locale) {
      this.locale = locale;
    };

    this.$get = function () {
      return this;
    };

  })
  .directive('bilingualButton', function () {
    return {
      template: '<button>{{greeting}}</button>',
      controller: function ($scope, bilingualButtonConfig) {

        if (bilingualButtonConfig.locale === 'es') {
          $scope.greeting = 'Hola Mundo';
        } else {
          $scope.greeting = 'Hello World';
        }

      }
    };
  });
