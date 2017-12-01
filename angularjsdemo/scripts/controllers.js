angular.module("PracticeApp.controllers", []).
controller("MainController",function($scope)
{$scope.message="lata";
})
.controller("CrudController",function($scope)
{
    $scope.message = "crud";
})
    
    
    


//.factory("PlayerService", ["$http", function ($http) {
//    var fac = {};



//    fac.GetPlayersfromDB = function () {
//        return $http.get("/Player/GetPlayers")
//    }


//    fac.GetPlayerbyId = function (id) {
//        return $http.get("/Player/GetPlayerbyId", {
//            params: { id: id }
//        });
//    }


//    fac.AddPlayer = function (player) {
//        $http.post("/Player/AddPlayer", player).
//        success(function (response) {
//            alert(response.status);
//        }
//        )
//    }


//    fac.UpdatePlayer = function (player) {
//        $http.post("/Player/UpdatePlayer", player)
//        .success(function (response) {
//            alert(response.status);
//        }
//    )
//    }


//    fac.DeletePlayer = function (id) {
//        $http.post("/Player/DeletePlayer", { id: id })
//        .success(function (response) {
//            alert(response.status);
//        }
//        )
//    }
//    return fac;
//}]
//)