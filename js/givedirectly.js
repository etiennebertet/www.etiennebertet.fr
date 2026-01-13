var $content = $('.brand_description');

$content.ready( function () {
  // On cache les sous-menus :
  $content.hide();    
});

$('#givedirectlyclick').on('click', function(e){
  $('#givedirectly>.brand_description').stop().slideToggle(1000);
});


var value = 0
$("#givedirectlyclick").rotate({
  bind:
  {
    click: function(){
      value +=180;
      $(this).rotate({ animateTo:value})
    }
  }
});






