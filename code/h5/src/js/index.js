require.config({
    paths: {
        "mui": "libs/mui"
    }
})
require(['mui'], function(mui) {
function init(){
	addevent()
    click()
}
function addevent(){
	mui.ajax('/api/getdata',{
		data:{
			
		},
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(res){
			console.log(res.data);
			var html='';
			var wrapper=document.querySelector(".wrapper")
			res.data.forEach(function(item){
				html+=`	  <dl>
		  <dt>
			  <i class='${item.icon}'></i>
			  <h4>${item.title}</h4>
			  <span>${item.style}</span>
		  </dt>
		  <dd>
			  <span>${item.price}</span>
		  </dd>
	  </dl>`
	  wrapper.innerHTML=html;
			})
		},
		error:function(xhr,type,errorThrown){
			
		}
	});
}
function click(){
	var btn=document.querySelector(".btn");
	btn.onclick=function(){
		location.href='../html/add.html'
	}
}
init()
})