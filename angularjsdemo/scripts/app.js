 var app=angular.module("PracticeApp", ["PracticeApp.controllers", "ngRoute"]);


app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/",
        {
            templateUrl: "/Partials/Form.html",
            controller: "MainController"
        })
        .when("/AddPlayer",
        {
            templateUrl: "/Partials/AddPlayer.html",
            controller: "AddPlayerController"
        })
    .when("/Crud",
        {
            templateUrl: "/Partials/Crud.html",
            controller: "CrudController"
        })
    .otherwise({ redirectTo: "/" });

    
}
])