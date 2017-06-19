//响应导航
$(document).ready(function(){
	$("#menu-click").click(function(){
		$("#menu-total").toggleClass("none");
		
	});
	$("#close").click(function  () {
		$("#menu-total").addClass("none");
	});
});
//首页查看更多
$(document).ready(function(){				   
var $b= $('.more1');
$b.click(function(){
	if($(this).text()=="查看更多"){
		$(this).text("关闭");
		$(this).prev().children('.hidden1').removeClass('none1')
	}else{
		$(this).text("查看更多");
		$(this).prev().children('.hidden1').addClass('none1')
		}
	})				
});

//师资力量
$(document).ready(function(){					
		$('.teacher ul li').click(function  () {
		$(this).toggleClass('hover');
		});
	});