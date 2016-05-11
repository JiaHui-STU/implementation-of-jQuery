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
		},
		
		show: function(){
			Array.prototype.forEach.call(this, function(node){
				//if(node.style) continue; //textnode没有style
				
				//删除style上的display:none
				var display = node.style.display;
				if(display === 'none'){
					//dispaly置为空后，css如果有display则css的生效
					//否则默认的生效
					node.style.display = '';
				}

				//元素display值为非默认值情况，需要还原为oldDisplay：div->display:inline-block
				//或 检测css上的display是否为none
				if(node.style.display==='' || isHidden(node)){
					//有oldDispaly则设置
					if(node.oldDisplay) node.style.display = node.oldDisplay;
					//没有则设置为元素默认值或元素当前值
					else node.style.display = getDisplay(node);
				}
			})
			
			//链式调用
			return this;
		},
		
		hide: function(){
			Array.prototype.forEach.call(this, function(node){
				if(!isHidden(node)) {
					//jQuery使用其cache机制存储信息，这里简化一下
					//直接挂载在对应的dom下
					node.oldDisplay = getDisplay(node);
					node.style.display = 'none';
				}
			})
			
			return this;
		}
	}
	
	function getDisplay(node){
		var display = window.getComputedStyle(node, null).getPropertyValue('display');
		
		if(display === 'none'){
			var dom = document.createElement(node.nodeName);
			//插入到body中
			document.body.appendChild(dom);
			//即可获取到元素display的默认值
			var display = window.getComputedStyle(dom, null).getPropertyValue('display');
			document.body.removeChild(dom);
		}
		return display;
	}
	
	function isHidden(node) {
		//忽略未append进document的元素这种隐藏情况：$('<div>block</div>')未append
		return window.getComputedStyle(node, null).getPropertyValue('display') === 'none';
	}
	
	jQuery.prototype.init.prototype = jQuery.prototype;
	
	window.$ = jQuery;
})(window);