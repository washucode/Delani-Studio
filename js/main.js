$(document).ready( function(){
  var whatwedo = ["design","dev","product"];
  whatwedo.forEach(function(x){
    $("#"+x+", #"+x+"p").click(function(){
      $("#"+x+", #"+x+"p").toggle();
  });

  var wrap = ['.img_wrap','.img_wrap1','.img_wrap2','.img_wrap3','.img_wrap4','.img_wrap5','.img_wrap6','.img_wrap7'];
   wrap.forEach(y => {
     var indexofwrap = wrap.indexOf(y);
     var overlay=['.imgoverlay1','.imgoverlay2','.imgoverlay3','.imgoverlay4','.imgoverlay5','.imgoverlay6','.imgoverlay7','.imgoverlay8'];
     $(y).mouseover(function() {
       $(overlay[indexofwrap]).show();
       }).mouseout(function() {
         $(overlay[indexofwrap]).hide();
     })
     })
   })

  $("#contactus").submit(function() {
    var nameInput = $("input#name").val();

    var emailInput = $("input#email").val();
    var messageInput = $("textarea#message").val();

    alert(nameInput + " we have received your message. Thank you for reaching out to us.");

  })
})
