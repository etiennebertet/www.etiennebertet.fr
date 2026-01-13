
var $content = $('.brand_description');

$content.ready( function () {
  // On cache les sous-menus :
  $content.hide();    
});

$('#mimetisclick').on('click', function(e){
  $('#mimetis>.brand_description').stop().slideToggle(1000);
});


var value = 0
$("#mimetisclick").rotate({
  bind:
  {
    click: function(){
      value +=180;
      $(this).rotate({ animateTo:value})
    }
  }
});

