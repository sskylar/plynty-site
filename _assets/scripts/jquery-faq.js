//Accordian Action
var action = 'click';
var speed = "500";

//Document.Ready
$(document).ready(function(){
  //Question handler
$('li.q').on(action, function(){
  //gets next element
  //opens .a of selected question
$(this).next().slideToggle(speed)
    //selects all other answers and slides up any open answer
    .siblings('li.a').slideUp();
  
  //Grab icon from clicked question
var i = $(this).children('i');
  //Remove Rotate class from all icons except the active
  $('i').not(i).removeClass('rotate');
  //toggle rotate class
  i.toggleClass('rotate');
});//End on click
});//End Ready
