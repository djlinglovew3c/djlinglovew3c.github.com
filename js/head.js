
$(function(){
	//设置每个页面的高度
	var oCon=document.getElementById('j_con');
	var aPage=oCon.children;
	var oH=document.documentElement.clientHeight;
	for(var i=0;i<aPage.length;i++)
	{
		aPage[i].style.height=oH+'px';
	}
//页面的运动函数
	var timer=null;
	function moveScroll(target, time)
	{
		var start=document.documentElement.scrollTop || document.body.scrollTop;
		
		var dis=target-start;
		var count=Math.floor(time/30);
		var n=0;
		
		clearInterval(timer);
		timer=setInterval(function (){
			n++;	
			var cur=start+dis*n/count;
			// 先
			document.body.scrollTop=cur;
			document.documentElement.scrollTop=cur;
			
			if (n == count)
			{
				clearInterval(timer);
			}
		}, 30);
	}
	//获取所用元素
	var oBox=document.getElementById('j_box');
	var oH=document.documentElement.clientHeight;
	//document.title=oH
	oBox.style.height=oH+'px';
	//点击左侧控制台，控制页面
	var oControl=document.getElementById('control');
	var aControlBtn=oControl.getElementsByTagName('a');
	var aControlSpan=oControl.getElementsByTagName('span');
	var nBtn=0;
	for(var i=0;i<aControlBtn.length;i++)
	{
		;(function(index){
			aControlBtn[i].onmouseover=function(){
				aControlSpan[index].style.display='block';
			}
			aControlBtn[i].onmouseout=function()
			{
				aControlSpan[index].style.display='none';
			}
		})(i);
		;(function(index){
			aControlBtn[i].onclick=function(){
				for(var i=0;i<aControlBtn.length;i++)
				{
					aControlSpan[i].style.display='none';
					aControlBtn[i].className='';
				}
				this.className='control_active';
				nBtn=index;
				move(oCon,{top:-oH*index},{duration:300})
				if(nBtn==aControlBtn.length-1)
				{
					move(aPersonalContact[0],{left:0},{duration:500})
					move(aPersonalContact[1],{right:0},{duration:500})
				}
			}
		})(i);
	}
	//首页向下箭头相关
	var oHeadBtn=document.getElementById('head_con');
	oHeadBtn.onclick=function()
	{
		for(var i=0;i<aControlBtn.length;i++)
		{
			aControlBtn[i].className='';
		}
		nBtn=1;
		aControlBtn[nBtn].className='control_active';
		move(oCon,{top:-oH*nBtn},{duration:300})
	}
	var aHeadBtn=oHeadBtn.children;
	var nHead=0;
	setInterval(function(){
		if(nHead%4==0)
		{
			for(var i=0;i<aHeadBtn.length;i++)
			{
				aHeadBtn[i].style.display='none';
			}
		}
		aHeadBtn[nHead%4].style.display='block';
		nHead++;
		},500)
		

	/*//自定义滚动条
	var oBarBox=document.getElementById('bar_box');
	oBarBox.style.height=oH+'px';
	var oBar=document.getElementById('bar');
	var oBarPre=document.getElementById('bar_pre');
	var oBarPreBtn=oBarPre.children[0]; 
	var oBarNext=document.getElementById('bar_next');
	var oBarNextBtn=oBarNext.children[0]; 
	var oBarH=oH-oBarPre.offsetHeight*2;
	var nCount=0;
	oBar.style.height=oBarH+'px';
	var top=0;
	//计算滚动条的高度
	var oBarBtn=oBar.children[0];
	var oBarBtnH=oBarH/aPage.length;
	oBarBtn.style.height=oBarBtnH+'px';
	//拖拽滚动条
	var maxBarTop=oBarH-oBarBtnH;
	oBarBtn.onmousedown=function(ev){
		var oEvent=ev||event;
		var oBarBtnT=oBarBtn.offsetTop;
		var disY=oEvent.clientY-oBarBtnT;
		oBarBtn.style.backgroundColor='#8d8d8e';
		oBarBtn.style.borderColor='#787878';
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			top=oEvent.clientY-disY;
			setTop();
		};
		document.onmouseup=function()
		{
			//alert('top'+top+' '+'点击高'+oBarBtnT)
			if(top>oBarBtnT&&Math.abs(top-oBarBtnT)>5)
			{
				nCount=Math.ceil((top/maxBarTop)*(aPage.length-1));
			}
			else if(top<oBarBtnT&&Math.abs(top-oBarBtnT)>5)
			{
				nCount=Math.floor((top/maxBarTop)*(aPage.length-1));
			}
			move(oCon,{top:-oH*nCount},{duration:300})
			//页面的top值控制控制台按钮
			for(var i=0;i<aControlBtn.length;i++)
			{
				aControlBtn[i].className='';
			}
			aControlBtn[nCount].className='control_active';
			document.onmousemove=null;	
			document.onmouseup=null;
			oBarBtn.style.backgroundColor='#bcbcbc';
			oBarBtn.style.borderColor='#a8a8a8';
			oBarBtn.releaseCapture&&oTBox.releaseCapture();
		}
		return false;
		oBarBtn.setCapture&&oTBox.setCapture();
	};*/
	/*function setTop(){
		if(top<=0)
		{
			top=0;
			oBarPreBtn.style.borderBottomColor='#a3a3a3';
		}
		else if(top>=maxBarTop)
		{
			top=maxBarTop;
			oBarNextBtn.style.borderTopColor='#a3a3a3';
		}
		else
		{
			oBarPreBtn.style.borderBottomColor='#505050';
			oBarNextBtn.style.borderTopColor='#505050';
		}
		oBarBtn.style.top=top+'px';
		var scale=top/maxBarTop;
		//move(oCon,{top:-oH*index},{duration:300})
		oCon.style.top=-(oH*aPage.length*scale)+'px';
	};*/
	//定义初始状态
	/*var bPre=false;
	var bNext=false;*/
	
	
	/*//上下按钮控制
	oBarPre.onmousedown=function(){
		oBarPreBtn.style.borderBottomColor='#fff';
		oBarPre.style.backgroundColor='#787878';
		bPre=true;	
	};
	oBarNext.onmousedown=function(){
		oBarNextBtn.style.borderTopColor='#fff';
		oBarNext.style.backgroundColor='#787878';
		bNext=true;	
	};
	oBarPre.onmouseup=function(){
		oBarPreBtn.style.borderBottomColor='#505050';
		oBarPre.style.backgroundColor='#d2d2d2';
		bPre=false;	
	};
	oBarNext.onmouseup=function(){
		oBarNextBtn.style.borderTopColor='#505050';
		oBarNext.style.backgroundColor='#d2d2d2';
		bNext=false;	
	};*/
	var top=0;
	function toUpFn()
	{	
		var nB=nBtn
		if(nBtn<=0)
		{
			nB=1;	
		}//用临时变量存值，临界值不用改变全局变量的值
		move(oCon,{top:-oH*(nB-1)},{duration:300,complete:function(){
				nBtn--;
				if(nBtn<=0)
				{
					nBtn=0;	
				}
			}})
		//页面的top值控制控制台按钮
		for(var i=0;i<aControlBtn.length;i++)
		{
			aControlBtn[i].className='';
		}
		aControlBtn[nB-1].className='control_active';
	}
	function toDownFn()
	{
		var nB=nBtn
		if(nBtn>=aControlBtn.length-1)
		{
			nB=aControlBtn.length-2;	
		}//用临时变量存值	
		move(oCon,{top:-oH*(nB+1)},{duration:500,complete:function(){
			if(nB+1==aControlBtn.length-1)
			{
				move(aPersonalContact[0],{left:0},{duration:500})
				move(aPersonalContact[1],{right:0},{duration:500})
			}
			nBtn++;
			if(nBtn>=aControlBtn.length-1)
			{
				nBtn=aControlBtn.length-1;	
			}	
		}})
		//页面的top值控制控制台按钮
		for(var i=0;i<aControlBtn.length;i++)
		{
			aControlBtn[i].className='';
		}
		aControlBtn[nB+1].className='control_active';
	}
	/*var toUp=false;
	var toDown=false;
	setInterval(function(){
		 if(toUp)
		{
			toUpFn();
		}
		else if(toDown)
		{
			toDownFn();
		}
	},400);*/
	//滚轮控制
	addWheel(document,function(down){//注意滚轮操作的对象！
	
		if(down)
		{
			toDownFn()
		}
		else
		{
			toUpFn();
		}
		
	});
	//上下键控制
	/*document.onkeydown=function(ev){
		top=oCon.offsetTop;
		var oEvent=ev||event;
		if(oEvent.keyCode==38)
		{
			toUp=true;
		}
		else if(oEvent.keyCode==40)
		{
			toDown=true;
		}
	};*/
	document.onkeyup=function(ev){
		top=oCon.offsetTop;
		var oEvent=ev||event;
		if(oEvent.keyCode==38)
		{
			toUpFn();
		}
		else if(oEvent.keyCode==40)
		{
			toDownFn();
		}
	};
	var oHeadnavBox=document.getElementById('j_headnav');
	var aNavlist=oHeadnavBox.children;
	for(var i=0;i<aNavlist.length;i++)
	{
		aNavlist[i].onmouseover=function(){//鼠标移入一级菜单的时候触发
			
			oUl=this.getElementsByTagName('ul')[0];//this的应用
			if(oUl)
			{
				var w=oUl.children[0].offsetWidth;
				move(oUl,{width:w,opacity:1},{duration:100,easing:Tween.Circ.easeIn,complete:function(){
						for(i=0;i<oUl.children.length;i++)
						{
							(function(index){
								oUl.children[i].onclick=function(ev){
									for(var i=0;i<aControlBtn.length;i++)
									{
										aControlBtn[i].className='';
									}
									var oEvent=ev||event;
									oEvent.cancelBubble=true;
									nBtn=index+1;
									aControlBtn[index+1].className='control_active';
									move(oCon,{top:-oH*(index+1)},{duration:300})
									if(nBtn==aControlBtn.length-1)
									{
										move(aPersonalContact[0],{left:0},{duration:500})
										move(aPersonalContact[1],{right:0},{duration:500})
									}
								};
							})(i)
						}
					}})//运动的对象是二级菜单
			}
		}
		aNavlist[i].onmouseout=function(){
			
			oUl=this.getElementsByTagName('ul')[0];
			if(oUl)
			{
				move(oUl,{width:0,opacity:0},{duration:100})
			}
		}
	}
	//首页菜单控制
	for(var i=0;i<2;i++)
	{
		(function(index){
			aNavlist[i].onclick=function(){
				for(var i=0;i<aControlBtn.length;i++)
				{
					aControlBtn[i].className='';
				}
				nBtn=index;
				aControlBtn[index].className='control_active';
				move(oCon,{top:-oH*index},{duration:300})
				if(nBtn==aControlBtn.length-1)
				{
					move(aPersonalContact[0],{left:0},{duration:500})
					move(aPersonalContact[1],{right:0},{duration:500})
				}
			};
		})(i)
	}
	for(var i=2;i<aNavlist.length;i++)
	{
		(function(index){
			aNavlist[i].onclick=function(){
				for(var i=0;i<aControlBtn.length;i++)
				{
					aControlBtn[i].className='';
				}
				nBtn=index+1;
				aControlBtn[index+1].className='control_active';
				move(oCon,{top:-oH*(index+1)},{duration:300})
				if(nBtn==aControlBtn.length-1)
				{
					move(aPersonalContact[0],{left:0},{duration:500})
					move(aPersonalContact[1],{right:0},{duration:500})
				}
			};
		})(i)
	}
	
	
	//JS tit的选项卡
	var oJsnav=document.getElementById('j_skill_nav');
	var aJsnav=oJsnav.children;
	for(var i=0;i<aJsnav.length;i++)
	{
		aJsnav[i].onmouseover=function()
		{
			for(var i=0;i<aJsnav.length;i++)
			{
				aJsnav[i].className='';
			}
			this.className='skill_on';
		}
	};
	//js 案例部分移入效果
	var oJscon=document.getElementById('j_skill_nav_con');
	var aJscon=oJscon.children;
	var oJsnavH=aJscon[0].offsetHeight;
	var oJsnavW=aJscon[0].offsetWidth;
	for (var i=0; i<aJscon.length; i++)
	{
		enter(aJscon[i]);
		leave(aJscon[i]);
	}
	
	function enter(obj)
	{
		obj.onmouseenter=function (ev){
			var oEvent=ev || event;
			var n=getN(obj, oEvent);
			var oSpan=obj.getElementsByTagName('span')[0];
			var oDiv=getByClass(obj,'js_skills_con')[0];
			oDiv.style.display='block';
			switch (n)
			{
				case 0: // right
					oSpan.style.left=oJsnavW+'px';
					oSpan.style.top=0;
					break;
					
				case 1: // bottom
					oSpan.style.left=0;
					oSpan.style.top=oJsnavH+'px';
					break;
				
				case 2: // left
					oSpan.style.left=-oJsnavW+'px';
					oSpan.style.top=0;
					break;
					
				case 3: // top
					oSpan.style.left=0;
					oSpan.style.top=-oJsnavH+'px';
					break;
			}
			move(oSpan, {top:0, left:0},{duration:200});
		};
	}
	
	function leave(obj)
	{
		obj.onmouseleave=function (ev){
			var oEvent=ev || event;
			var n=getN(obj, oEvent);
			var oSpan=obj.getElementsByTagName('span')[0];
			var oDiv=getByClass(obj,'js_skills_con')[0];
			oDiv.style.display='none';
			switch (n)
			{
				case 0: // right
					move(oSpan, {left:oJsnavW, top:0},{duration:200});
					break;
					
				case 1: // bottom
					move(oSpan, {top:oJsnavH, left:0},{duration:200});
					break;
				
				case 2: // left
					move(oSpan, {top:0, left:-oJsnavW},{duration:200});
					break;
					
				case 3: // top
					move(oSpan, {top:-oJsnavH, left:0},{duration:200});
					break;
			}
		};
	}
	
	function getN(obj, ev)
	{
		var oEvent=ev||event;
		var ScrollTop2=document.documentElement.scrollTop||document.body.scrollTop;
		var w=obj.offsetWidth;
		var h=obj.offsetHeight;
		var x=(getPos(obj).left+w/2-oEvent.clientX)*(w>h?h/w:1);//如何计算绝对定位到可视区的高度
	    var y=(getPos(obj).top-ScrollTop2+h/2-oEvent.clientY);
		
		var n=Math.round((d2a(Math.atan2(y, x))+180)/90)%4;
		return n;
	}

	function d2a(d)
	{
		return d*180/Math.PI;
	}
	
	
	//js 案例部分最后一部分的时钟效果
	tick();
	setInterval(tick, 1000);
	function tick()
	{
		var oDate=new Date();
		var h=oDate.getHours();
		var m=oDate.getMinutes();
		var s=oDate.getSeconds();
		
		var str=toDub(h)+toDub(m)+toDub(s);
		var oClock=document.getElementById('clock');
		var aClockSpan=oClock.getElementsByTagName('i');
		var h=oClock.children[0].children[0].offsetHeight;
		for (var i=0; i<aClockSpan.length; i++)
		{
			var target=-str.charAt(i)*h;
			move(aClockSpan[i], {'top':target},{duration:200});
		}
	}
	//联系方式页：信息运动入
	var oPersonalContact=document.getElementById('personal');
	var aPersonalContact=oPersonalContact.children;
	//提交信息部分按钮的控制
	var OSubBtn=document.getElementById('sub_btn');
	OSubBtn.onmouseover=function()
	{
		OSubBtn.style.backgroundColor='#1e1e1e';
	}
	OSubBtn.onmouseout=function()
	{
		OSubBtn.style.backgroundColor='#e55353';
	}
	//尾部按钮返回第一页：
	var oFBtn=document.getElementById('footer_btn');
	oFBtn.onclick=function()
	{
		for(var i=0;i<aControlBtn.length;i++)
		{
			aControlBtn[i].className='';
		}
		nBtn=0;
		aControlBtn[nBtn].className='control_active';
		move(oCon,{top:-oH*nBtn},{duration:300})
	}
	return false;
});
