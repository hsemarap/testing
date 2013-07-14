var state=1;
var plates=4;
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
$(".plate").css("bottom",-100+plates*height+"%");
}
$(function(){
$("#state").html("1");
correction();
$('.plus').click(function(){add($(this).attr('data-color'));});
$('.minus').click(function(){remove($(this).attr('data-color'));});
});
