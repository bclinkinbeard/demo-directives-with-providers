
angular.module('app', ['bilingualButtonModule'])
  .config(function (bilingualButtonConfigProvider) {
    bilingualButtonConfigProvider.setLocale('es');
  });
