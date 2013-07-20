var state=1;
var plates;
var height=3;
function add(color){
$("#stack").prepend("<div class='"+color+" plate'></div>");
plates++;
correction();
}
function remove(color){
if($("#stack").children().first().hasClass(color)){$("#stack").children().first().detach();plates--;}
correction();
}
function correction(){
$(".plate").animate({bottom:-100+plates*height+"%"},"slow");
}
$(function(){
plates=$(".plate").length;
//height=parseInt($(".plate").css("height"));
$("#state").html("1");
correction();
$('.plus').click(function(){add($(this).attr('data-color'));});
$('.minus').click(function(){remove($(this).attr('data-color'));});
$("#compute").click(function(){
	var string=$("#string").val();
	var rules=$("#rules").val();
	var rulearr=rules.split("\n");
	$.each(rulearr,function(i,ele){
		console.log("For Rule :");
		console.log(ele);
		var attribs=ele.replace(' ','').split(',');
		$.each(attribs,function(i,ele){console.log(ele);})
	});
 });
});
