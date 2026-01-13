var $content = $('.brand_description');

$content.ready( function () {
  // On cache les sous-menus :
  $content.hide();    
});

$('#flowtoysclick').on('click', function(e){
  $('#flowtoys>.brand_description').stop().slideToggle(1000);
});


var value = 0
$("#flowtoysclick").rotate({
  bind:
  {
    click: function(){
      value +=180;
      $(this).rotate({ animateTo:value})
    }
  }
});