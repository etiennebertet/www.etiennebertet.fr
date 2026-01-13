var $content = $('.brand_description');

$content.ready( function () {
  // On cache les sous-menus :
  $content.hide();    
});

$('#aicooplick').on('click', function(e){
  $('#aicoop>.brand_description').stop().slideToggle(1000);
});


var value = 0
$("#aicoopclick").rotate({
  bind:
  {
    click: function(){
      value +=180;
      $(this).rotate({ animateTo:value})
    }
  }
});