(function(window, undefined){

	function jQuery(sel){
		return new jQuery.prototype.init(sel);
	}
	
	jQuery.prototype = {
		constructor: jQuery,
		init: function(sel) {
			if(typeof sel === 'string') {
				var that = this;
				var nodeList = document.querySelectorAll(sel);
				Array.prototype.forEach.call(nodeList, function(val, i) {
					that[i] = val;
				})
				this.selector = sel;
				this.length = nodeList.length;
			//} else if(Object.prototype.toString.call(sel) === '[object HTMLDocument]') {
			} else if(sel && sel.nodeName === '#document') {
				this[0] = sel;
				this.length = 1;
			}
		},
		
		//只考虑document的情况
		ready: function(callback) {
			this[0].addEventListener('DOMContentLoaded', callback, false);
			window.addEventListener('load', callback, false);
		},
		
		unReady: function() {
			//取消绑定 需要使用promise
		}
	}
	
	jQuery.prototype.init.prototype = jQuery.prototype;
	
	window.$ = jQuery;
})(window);

//这种简写实际调用的也是$(document).ready(function(){})
//$(function() {
//	
//}) 

//与window.onload区别<br>