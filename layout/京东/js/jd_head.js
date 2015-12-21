// JavaScript Document
   window.onload=function(){
		var city=document.getElementById('city');
		var morecity=city.getElementsByTagName('ul')[0];
		var tocity=city.getElementsByTagName('div')[0];
		var selectcity=city.getElementsByTagName('a')[0];
		city.onmouseover=function(){
		morecity.style.display='block';
		morecity.style.background='#fff';
		tocity.style.background='#fff';
		}
		city.onmouseout=function(){
		morecity.style.display='none';
		tocity.style.background='#f1f1f1';
		selectcity.style.background='#c81623';
		selectcity.style.color='#fff';
		}
		var toolbarbox=document.getElementById('toolbar');
		var toolbarlist=toolbarbox.getElementsByTagName('li');
		var toolbarlistcon=toolbarbox.getElementsByTagName('a');
		  for(var i=0;i<toolbarlist.length;i++){
			  toolbarlist[i].index=i;
			  toolbarlist[i].onmouseover=function(){
				toolbarlistcon[this.index].style.display='block';
				  this.style.background='#c81623';
				  }
			  toolbarlist[i].onmouseout=function(){
				toolbarlistcon[this.index].style.display='none';
				  this.style.background='#7a6e6e';
				  }
			  }
		var buycarbox=document.getElementById('buycarbox');
		var buycar=buycarbox.getElementsByTagName('a')[0];
		var buycartext=buycarbox.getElementsByTagName('p')[0];
		buycarbox.onmouseover=function(){
			buycar.style.borderBottom='1px solid #fff';
			buycar.style.background='#fff';
			buycar.style.boxShadow='0px 0px 5px rgba(2,100,2,.2)';
			buycartext.style.display='block';
			
			}
		buycarbox.onmouseout=function(){
			buycar.style.borderBottom='1px solid #dfdfdf';
			buycar.style.background='#f9f9f9';
			buycar.style.boxShadow='none';
			buycartext.style.display='none';
			
			}
		}