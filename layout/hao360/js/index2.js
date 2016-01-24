window.onload=function (){
	// 第一块
	(function (){ // 不用全局变量
		var oDiv=document.getElementById('div1');
		tab(oDiv);
	})();
	
	// 第二块
	(function (){
		var oDiv=document.getElementById('div2');
		tab(oDiv);
	})();
	
	// 第三块
	(function (){
		var oDiv=document.getElementById('div3');
		tab(oDiv);
	})();
	
	function tab(oDiv)
	{
		var aBtn=oDiv.getElementsByClassName('j-btn');
		var aDiv=oDiv.getElementsByClassName('j-box');
		
		for (var i=0; i<aBtn.length; i++)
		{
			(function (index){
				aBtn[i].onclick=function (){
					for (var i=0; i<aBtn.length; i++)
					{
						aBtn[i].className='j-btn';
						aDiv[i].className='j-box';
					}
					aBtn[index].className='j-btn active';
					aDiv[index].className='j-box active';
				};
			})(i);
		}
	}
};






















