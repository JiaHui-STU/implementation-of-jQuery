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
					//jQuery使用其cache机制存储信息，这里简化一下
					//直接挂载在对应的dom下
					if(!val.oldDisplay){
						val.oldDisplay = getDisplay(val);
					}
				})
				this.selector = sel;
				this.length = nodeList.length;
			}
		},
		
		show: function(){
			Array.prototype.forEach.call(this, function(node){
				node.style.display = node.oldDisplay;
			})
			
			//链式调用
			console.log('call show');
			return this;
		},
		
		hide: function(){
			Array.prototype.forEach.call(this, function(node){
				node.style.display = 'none';
			})
			
			return this;
		}
	}
	
	function getDisplay(node){
		var display = window.getComputedStyle(node, null).getPropertyValue('display');
		
		if(display === ''){
			var dom = document.createElement(node.nodeName);
			//插入到body中
			document.body.appendChild(dom);
			//即可获取到元素display的默认值
			var display = window.getComputedStyle(dom, null).getPropertyValue('display');
			document.body.removeChild(dom);
		}
		return display;
	}
	
	jQuery.prototype.init.prototype = jQuery.prototype;
	
	window.$ = jQuery;
})(window);