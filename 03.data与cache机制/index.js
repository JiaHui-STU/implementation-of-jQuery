(function(window, undefined) {

	function jQuery(sel) {
		return new jQuery.prototype.init(sel);
	}
	
	jQuery.prototype = {
		constructor: jQuery,
		init: function(sel) {
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
	
	
	function Data() {
		this.uid = 1;
		//原来是防篡改对象（简化一下）
		this.cache = {};
		this.expando = 'jQuery' + Math.random();
	}
	
	Data.prototype = {
		//获取elem的uid值
		key: function(elem) {
			
			var uid = elem[this.expando];
			if(!uid) {
				//为elem分配一个uid
				uid = this.uid++;
				elem[this.expando] = uid;
			}
			
			if(!this.cache[uid]) {
				this.cache[uid] = {};
			}
			
			return uid;
		},
		set: function(elem, name, val) {
			var cache = this.cache[this.key(elem)];
			cache[name] = val;
		},
		get: function(elem, name) {
			var cache = this.cache[this.key(elem)];
			return cache[name];
		}
	}
	
	var data_user = new Data();
	
	jQuery.prototype.data = function(name, val) {
		if(val) {
			Array.prototype.forEach.call(this, function(elem) {
				data_user.set(elem, name, val);
			})
			return this;
		}
		else return data_user.get(this[0], name);
	}
	
	
})(window);