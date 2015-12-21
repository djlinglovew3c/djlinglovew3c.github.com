// JavaScript Document
window.onload=function(){
	//banner图片切换
	var banbtnbox=document.getElementById('bannerbtn');
	var banshowbox=document.getElementById('banner');
	var banbtn=banbtnbox.getElementsByTagName('li');
	var banshow=banshowbox.getElementsByTagName('a');
	for(var i=0;i<banbtn.length;i++){
		banbtn[i].index=i;
		banbtn[i].onclick=function(){
			for(var i=0;i<banbtn.length;i++){
			banbtn[i].className='';
			banshow[i].className='';
				
			}
			this.className='banner_active';
			banshow[this.index].className='banner_show';
		}
	}
	//搜索栏
	var txtbtn=document.getElementById('headtxt');
	var txtshow=document.getElementById('headtxt_con');
	var bbody=document.getElementsByTagName('body')[0];
	if(txtshow.style.display=='block'){
		bbody.onclick=function(){
		txtshow.style.display='none';
		}
	}else{
		txtbtn.onclick=function(){
		txtshow.style.display='block';
		}
	}	
}