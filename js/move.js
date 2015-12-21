'use strict'
function move(obj, json, options){
		options=options || {};
		var duration=options.duration || 1000;
		var easing=options.easing || Tween.Linear;
		
		var start={};
		var dis={};
		var count=Math.floor(duration/30);
		var n=0;
		for (var name in json)
		{
			start[name]=parseFloat(getStyle(obj, name));
			dis[name]=parseFloat(json[name])-start[name];
		}
		
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			n++;
			
			for (var name in json)
			{
				var cur=easing(duration*n/count, start[name], dis[name], duration);
				
				if (name == 'opacity')
				{
					obj.style[name]=cur;
					obj.style.filter='alpha(opacity:'+cur*100+')';
				}
				else
				{
					obj.style[name]=cur+'px';
				}
			}
			
			if (n == count)
			{
				clearInterval(obj.timer);
				options.complete && options.complete();
			}
		}, 30);
	};