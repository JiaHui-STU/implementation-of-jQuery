(function(window, undefined){

	function jQuery(sel){
		return new jQuery.prototype.init(sel);
	}
	
	jQuery.prototype = {
		constructor: jQuery,
		init: function(sel){
			if(typeof sel === 'string'){
				var that = this;
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
	
	window.$ = jQuery;
	
	jQuery.isFunction = function(obj) {
		return typeof obj === 'function';
	}
	
	//window.window 有点意思
	jQuery.isWindow = function(obj) {
		return obj && obj === obj.window;
	}
	
	jQuery.isNumberic = function(obj) {
		//return typeof obj === 'number';
		//return Object.prototype.toString.call(obj) === '[object Number]'; //发现情况一模一样
		//return !isNaN(obj) && isFinite(obj); //漏了null
		//return obj!=null && !isNaN(parseFloat(obj)) && isFinite(obj);
		return !isNaN(parseFloat(obj)) && isFinite(obj);
	}
	
})(window);