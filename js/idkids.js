var $content = $('.brand_description');

$content.ready( function () {
  // On cache les sous-menus :
  $content.hide();    
});

$('#idkidsclick').on('click', function(e){
  $('#idkids>.brand_description').stop().slideToggle(1000);
});


var value = 0
$("#idkidsclick").rotate({
  bind:
  {
    click: function(){
      value +=180;
      $(this).rotate({ animateTo:value})
    }
  }
});