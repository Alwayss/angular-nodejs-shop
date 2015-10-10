/**
 * Created by admin on 2015/9/22.
 */
angular.module('api.proxy',['restangular'])
    .factory('HomeService',['Restangular',function(Restangular){// 现在我们已经在LoginService中访问了Restangular
        var homeAngular = Restangular.withConfig(function (Configurer) {
            //服务配置

        });
        var firstService=homeAngular.all('/goods'); //请求路径
        var secondService=homeAngular.all('/goods');
        return {
            firstGoods: function () {            //定义请求方法
                return firstService.customGETLIST('米');    
            },
            secondGoods:function(type){
                return secondService.customGETLIST(type);
            }

        }
    }])
    .factory('LoginService',['Restangular',function(Restangular){// 现在我们已经在LoginService中访问了Restangular
    var loginAngular = Restangular.withConfig(function (Configurer) {
        //服务个性化配置

    });
    var loginService=loginAngular.all('/userLogin'); //定义loginService变量获取请求路径

    return {
        userLogin: function (user) {           //   user={username:xx ;  password:xxx}
            return loginService.customPOST(user);  //定义一个请求的具体方法
        }
    }
}])
    //加入购物车请求
//.factory('JoincarService',['Restangular',function(Restangular){
//    var joincarAngualr = Restangular.withConfig(function(Configurer){
//
//    });
//    var joincarService=joincarAngualr.all('/addToCart');
//    return {
//        addToCart:function(id){
//            return joincarService.customGET(id);
//        }
//    }
//}])
    //注册请求
    .factory('registerService', ['Restangular', function (Restangular) {
        var unitAngular = Restangular.withConfig(function (Configurer) {
            //服务个性化配置
        });
        var unitService = unitAngular.all('/userReg');
        return{
            addusers:function (user) {
                return unitService.customPOST(user);
            }
        }
    }])
    //获取id请求
.factory('GetidService',['Restangular',function(Restangular){
        var getidAngualr = Restangular.withConfig(function(Configurer){

        });
        var getidService=getidAngualr.all('/goodsDes');
        return {
            productId:function(id){
                return getidService.customGET(id);
            }
        }
    }]);