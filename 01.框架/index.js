//匿名立即执行函数
//1.防止污染全局空间
//2.选择性保护内部变量
(function(window, undefined){
	//第二参数undefined设置而不传的原因：
	// 外部发生这种情况:var undefined = 10时，undefined会被篡改
	// 设置第二参数而不传，则undefined就会被重置回原来值

	function jQuery(sel){
		return new jQuery.prototype.init(sel);
	}
	
	jQuery.prototype = {
		constructor: jQuery,
		init: function(sel){
			if(typeof sel === 'string'){
				var that = this;
				//jQuery内部使用的是Sizzle，这里使用querySelectorAll替代
				var nodeList = document.querySelectorAll(sel);
				Array.prototype.forEach.call(nodeList, function(val, i){
					that[i] = val;
				})
				this.selector = sel;
				this.length = nodeList.length;
			}
		}
	}
	
	jQuery.prototype.init.prototype = jQuery.prototype;
	
	//对外暴露jQuery：将jQuery绑定在window上面
	window.$ = jQuery;
})(window);