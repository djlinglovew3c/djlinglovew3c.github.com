// JavaScript Document
//h5案例效果
window.onload=function(){
	//翻页效果
	var oh5lBox=document.querySelector('.h5lbox');
	var oh5lPage=document.querySelector('.h5lpage');
	var oh5lPage2=document.querySelector('.h5lpage2');
	var oh5lFront=document.querySelector('.h5lfront');
	var oh5lBack=document.querySelector('.h5lback');
   
	var iNowL=0;
	var bReady=true;
	oh5lBox.onclick=function(){
		if(bReady==false)return;
		bReady=false;

		iNowL++;

		oh5lPage.style.transition='1s all ease';
		oh5lPage.style.transform='perspective(800px) rotateY(-180deg)';

		function tEnd(){
			//瞬间
			oh5lPage.style.transition='none';
			oh5lPage.style.transform='perspective(800px) rotateY(0deg)';

			//换图
			oh5lBox.style.backgroundImage='url(images/jimi'+(iNowL%6+1)+'.jpg)';
			oh5lFront.style.backgroundImage='url(images/jimi'+(iNowL%6+1)+'.jpg)';

			oh5lBack.style.backgroundImage='url(images/jimi'+((iNowL+1)%6+1)+'.jpg)';
			oh5lPage2.style.backgroundImage='url(images/jimi'+((iNowL+1)%6+1)+'.jpg)';
			bReady=true;
			oh5lPage.removeEventListener('transitionend',tEnd,false);
		}
		
		oh5lPage.addEventListener('transitionend',tEnd,false);
	};
	//翻页效果结束
	
	//爆破式翻页
	var oh5rBox=document.querySelector('.h5rbox');

		var divC=oh5rBox.offsetWidth/2;
	
		var R=6;
		var C=9;
	
		for(var r=0; r<R; r++){
			for(var c=0; c<C; c++){
				var oSpan=document.createElement('span');
				oSpan.style.width=oh5rBox.offsetWidth/C+'px';
				oSpan.style.height=oh5rBox.offsetHeight/R+'px';
				oh5rBox.appendChild(oSpan);
	
				oSpan.style.left=c*oSpan.offsetWidth+'px';
				oSpan.style.top=r*oSpan.offsetHeight+'px';
				oSpan.style.backgroundPosition='-'+c*oSpan.offsetWidth+'px -'+r*oSpan.offsetHeight+'px';
			}
		}
	
		//点击
		var iNowR=0;
		setInterval(function(){
			var aSpan=oh5rBox.children;
	
			iNowR++;
	
			for(var i=0; i<aSpan.length; i++){
				aSpan[i].style.transition='1s all ease';
	
				var x=aSpan[i].offsetWidth/2+aSpan[i].offsetLeft-divC;
				var y=aSpan[i].offsetHeight/2+aSpan[i].offsetTop-oh5rBox.offsetHeight/2;
	
	
				aSpan[i].style.transform='perspective(800px) translate3d('+x+'px,'+y+'px,0) scale(1.2) rotateX('+rnd(-180,180)+'deg) rotateY('+rnd(-180,180)+'deg)';
				aSpan[i].style.opacity=0;
			}
	
			aSpan[0].addEventListener('transitionend',function(ev){
				if(ev.propertyName=='opacity'){
				   //统一回来
					for(var i=0; i<aSpan.length; i++){
						aSpan[i].style.transition='none';
						aSpan[i].style.transform='perspective(800px) translate3d(0,0,0) scale(1) rotateX(0deg) rotateY(0deg)';
						aSpan[i].style.opacity=1;
	
						//换图
						aSpan[i].style.backgroundImage='url(images/jimi'+(iNowR%6+1)+'.jpg)';
						oh5rBox.style.backgroundImage='url(images/jimi'+((iNowR+1)%6+1)+'.jpg)';
					}
				}
			},false);
		},1000);
	//canvas
	var oC=document.getElementById('h5canvas');

		var gd=oC.getContext('2d');
		var oImg=new Image();

		var i=0;
		var step=0;
		oImg.onload=function(){
			setInterval(function(){
				step+=2;
				gd.clearRect(0,0,oC.width,oC.height);
				//画文字
				  var str='这是一个canvas画布实现的效果';
				  gd.fillStyle='red';
				  gd.font='12px 黑体';
				  gd.fillText(str,50,40);
				gd.drawImage(
						oImg,
						i*32,96,32,49,
						step,80,20,36
				);

				i++;
				if(i==4){
					i=0;
				}
				if(step>=300)
				{
					step=0;
				}
			},100);
		};
		oImg.src='images/pic2476.png';
};