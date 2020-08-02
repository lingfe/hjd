	/*angularJs */
	var app = angular.module('myApp', []);
    
	app.controller('register', function($scope, $http) {
		//跳转到登录页面
		$scope.btnUrl=function(){
			window.location.href = "login.html";
		}
		//注册
		$scope.btnRegister=function(){
			//获取兑换商品信息
		    var url = "/sys_hjd/userinfo/register";
		    //请求头
	        var headers = { 
	        		  'Content-Type': 'application/x-www-form-urlencoded'
	        };
	    	
	    	//参数
	    	var data=[
	    		   'openid='+$scope.openid,//电话号码
	    			'username='+$scope.username
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
					alert("注册成功!");
					var hre = 'login.html';
					//传递对象：先将对象转成字符串（序列化）
					window.location.href = hre;
				}
			}); 
		}
	});