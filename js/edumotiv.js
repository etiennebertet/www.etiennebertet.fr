var $content = $('.brand_description');

$content.ready( function () {
  // On cache les sous-menus :
  $content.hide();    
});

$('#edumotivclick').on('click', function(e){
  $('#edumotiv>.brand_description').stop().slideToggle(1000);
});


var value = 0
$("#edumotivclick").rotate({
  bind:
  {
    click: function(){
      value +=180;
      $(this).rotate({ animateTo:value})
    }
  }
});
