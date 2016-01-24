window.onload=function (){
	// 调用
	tab('j-tab');
	
	// 定义
	function tab(sName)
	{
		var aTab=document.getElementsByClassName(sName);
		
		for (var i=0; i<aTab.length; i++)
		{
			_tab(aTab[i]);
		}
		
		function _tab(oTab)
		{
			var aBtn=oTab.getElementsByClassName('j-btn');
			var aDiv=oTab.getElementsByClassName('j-box');
			
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
	}

};






















