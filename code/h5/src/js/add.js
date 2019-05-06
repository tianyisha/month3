require.config({
    paths: {
        "mui": "libs/mui"
    }
})
require(['mui'],function(mui){
	var spans=[...document.querySelectorAll("span")];
	var txt=document.querySelector(".txt");
	console.log(txt);
	console.log(spans);
	spans.forEach(function(item){
		item.onclick=function(){
			if(this.innerHTML=='X'){
				if(txt.value=='0.0'){
					txt.value='0.0'
				}else{
					txt.value=txt.value.length==1?txt.value='0.0':txt.value.substr(0,txt.value.length-1)
				}
				
			}else if(this.innerHTML.indexOf('.')!=-1&&txt.value.split('.')[1].length==2){
					txt.value=txt.value
			}else {
				txt.value+=this.innerHTML
			}
		}
	
		
	})
})