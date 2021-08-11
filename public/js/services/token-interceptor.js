angular.module("alurapic").factory("tokenInterceptor", function ($window) {
    var interceptor = {};

    interceptor.response = function (response) {
        var token = response.headers("x-access-token");
        if(token) {
            $window.sessionStorage.token = token;
            console.log("Token armazenado no navegador");
        }
        return response;
    };

    return interceptor;
});
