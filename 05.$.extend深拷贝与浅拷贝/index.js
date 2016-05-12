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
})(window);

//JSON.stringify会把fun忽略掉
//所以使用递归