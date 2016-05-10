###学习目的：框架+学习API+有一些API想不通是怎么实现的
1. 框架
2. show => 如何获取Element的默认属性？createElement=>appendTo=>getDisplay<br>
   保存进缓存  重复利用
3. 链式调用
4. isNumber, isFunction【typeof缺陷】  
5. $(document).ready(function(){}) 原理、与window.onload区别<br>
        DOMContentLoaded，load
6. promise deffer<br>
---------------------------event---------------------------------------
7. mouseenter mouseleave兼容【relateTarget】vol70
8. on委托事件 vol70左右 【绑定两个，执行顺序有bug?】
9. trigger如何触发冒泡操作： events[fatherDom]['click'] vol71


<br><br>
$ $.fn $.init 之间的关系【$下的方法内部使用，$.fn外部使用】<br>
$.extend深拷贝（递归）、浅拷贝<br>
`$("<li>1</li><li>2</li>")` ，嵌套呢？