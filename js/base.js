// JavaScript Document
//页面加载,父级是document
'use strict'
function $(fn){
	if(document.addEventListener)
	{
		document.addEventListener('DOMContentLoaded',fn,false)	
	}
	else
	{
		document.onreadystatechange=function(){
			if(document.readyState=='complete')
			{
				fn();	
			}
		};	
	}
}
//获取样式
function getStyle(obj,sName)
{
	return(obj.currentStyle||getComputedStyle(obj,false))[sName];	
}
//根据className获取元素
function getByClass(oParent,sName)
{
	if(oParent.getElementsByClassName)
	{
		
		return oParent.getElementsByClassName(sName)
	}
	else
	{
		var aRes=[];
		var aChild=oParent.getElementsByTagName('*');
		for(var i=0;i<aChild.length;i++)
		{
			var aTem=aChild[i].className.split(' ')
			for(var j=0;j<aTem.length;j++)
			{
				if(aTem[j]==sName)	
				{
					
					aRes.push(aChild[i]);
				}
			}
		}
		return aRes;
	}
}
//随机函数
function rnd(n,m)
{
	return Math.floor(Math.random()*(m-n)+n)
};
//事件绑定
function addEvent(obj,sEv,fn)
{
	if(obj.addEventListener)//兼容高级浏览器，return false无效，解决办法oEvent.preventDafault()
	{
		obj.addEventListener(sEv,fn,false)//false冒泡，true下沉（事件捕获）
	}
	else
	{
		obj.attachEvent('on'+sEv,fn,false)//只兼容IE(不包括IE11)，attachEvent的this指代window
	}
}
//解除事件绑定
function removeEvent(obj,sEv,fn)
{
	if(obj.addEventListener)
	{
		obj.removeEventListener(sEv,fn,false)//兼容高级浏览器
	}
	else
	{
		obj.detachEvent('on'+sEv,fn,false)//只兼容IE(不包括IE11)
	}
}
//个位数补零
function toDub(n)
{
	return n>=0&&n<10 ? '0'+n : ''+n;	
};
//获取到页面的距离
function getPos(obj)
{
	var left=0;
	var top=0;
	
	// obj=body
	while (obj)
	{
		// left=0 body
		left+=obj.offsetLeft;
		top+=obj.offsetTop;
		
		// obj=null
		obj=obj.offsetParent;
	}
	
	return {left:left, top:top};
}
/**
 * 描述
  * @param fn 鼠标滚动时执行的函数
 */
function addWheel(obj,fn){
	
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1)
	{
		obj.addEventListener('DOMMouseScroll',function(ev){fn(ev.detail>0 ? true : false) 
		
		return false;
		oEvent.preventDefault&&oEvent.preventDefault();
		},false)
	}
	else
	{
		obj.onmousewheel=function()
		{
			fn(event.wheelDelta>0 ? false:true)
			return false;
		} 
	}
}