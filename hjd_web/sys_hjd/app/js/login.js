
	/*angularJs */
	var app = angular.module('myApp', []);
    
	app.controller('login', function($scope, $http) {
		//跳转到注册页面
		$scope.btnUrl=function(){
			window.location.href = "register.html";
		}
		//登录
		$scope.btnLogin=function(){
			//获取兑换商品信息
		    var url = "/sys_hjd/userinfo/login";
		    //请求头
	        var headers = { 
	        		  'Content-Type': 'application/x-www-form-urlencoded'
	        };
	    	
	    	//参数
	    	var data=[
	    		   'openid='+$scope.openid//微信号，或电话号码
	    	];
	    	
			//发送请求
			$http({
				 method: 'POST',
				 data:data.join("&"),
				 headers: headers,
				 url: url,
			}).then(function successCallback(response) {
				$scope.list = response.data;
				var msg=response.data.msg;
				if(msg!=null&&msg!=""){
					alert(msg);
					return;
				}else{
					alert("登录成功!");
					var hre = 'index.html?data='+angular.toJson(response.data);
					//传递对象：先将对象转成字符串（序列化）
					window.location.href = hre;
				}
			}); 
		}
	});
