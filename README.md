学习目的：框架+学习API+有一些API想不通是怎么实现的

框架与组成
链式调用
$ $.fn $.init 之间的关系【$下的方法内部使用，$.fn外部使用】
$.extend深拷贝、浅拷贝
$(document).ready(function(){}) 原理、与window.onload区别
    DOMContentLoaded，load


isNumber, isFunction【typeof缺陷】
$("<li>1</li><li>2</li>") ，嵌套呢？


promise deffer

---------------------------event---------------------------------------
mouseenter mouseleave兼容【relateTarget】vol70
on委托事件 vol70左右 【绑定两个，执行顺序有bug?】
trigger如何触发冒泡操作： events[fatherDom]['click'] vol71

---------------------------CSS操作---------------------------------------
show => 如何获取Element的默认属性  createElement=>appendTo=>getDisplay  保存进缓存  重复利用