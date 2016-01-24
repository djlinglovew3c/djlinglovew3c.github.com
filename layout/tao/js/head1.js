// JavaScript Document
window.onload=function(){
	var obox=document.getElementById('head_serchbox');
	var oUl=obox.getElementsByTagName('ul')[0];
	var oli=oUl.getElementsByTagName('li');
	var odiv=obox.getElementsByTagName('div');
	for(var i=0;i<oli.length;i++){
		oli[i].index=i;
		oli[i].onclick=function(){
			for(var i=0;i<oli.length;i++){
				oli[i].className='';
				odiv[i].className='';
				}
			this.className='active';
			odiv[this.index].className='show';
			}
		}
	}