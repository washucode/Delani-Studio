$(document).ready( function(){
  var whatwedo = ["design","dev","product"];
  whatwedo.forEach(function(x){
    $("#"+x+", #"+x+"p").click(function(){
      $("#"+x+", #"+x+"p").toggle();
  });



})
