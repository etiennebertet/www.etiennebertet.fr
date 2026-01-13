var $content = $('.brand_description');

$content.ready( function () {
  // On cache les sous-menus :
  $content.hide();    
});

$('#ekovyaclick').on('click', function(e){
  $('#ekovya>.brand_description').stop().slideToggle(1000);
});

$('#givedirectlyclick').on('click', function(e){
  $('#givedirectly>.brand_description').stop().slideToggle(1000);
});

$('#mimetisclick').on('click', function(e){
  $('#mimetis>.brand_description').stop().slideToggle(1000);
});

$('#flowtoysclick').on('click', function(e){
  $('#flowtoys>.brand_description').stop().slideToggle(1000);
});

$('#aicoopclick').on('click', function(e){
  $('#aicoop>.brand_description').stop().slideToggle(1000);
});

$('#idkidsclick').on('click', function(e){
  $('#idkids>.brand_description').stop().slideToggle(1000);
});

$('#edumotivclick').on('click', function(e){
  $('#edumotiv>.brand_description').stop().slideToggle(1000);
});

$('#closdelatourclick').on('click', function(e){
  $('#closdelatour>.brand_description').stop().slideToggle(1000);
});

$('#furyosquadclick').on('click', function(e){
  $('#furyosquad>.brand_description').stop().slideToggle(1000);
});


var value8 = 0
$("#ekovyaclick").rotate({
  bind:
  {
    click: function(){
      value8 +=180;
      $(this).rotate({ animateTo:value8})
    }
  }
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

var value1 = 0
$("#mimetisclick").rotate({
  bind:
  {
    click: function(){
      value1 +=180;
      $(this).rotate({ animateTo:value1})
    }
  }
});

var value2 = 0
$("#flowtoysclick").rotate({
  bind:
  {
    click: function(){
      value2 +=180;
      $(this).rotate({ animateTo:value2})
    }
  }
});

var value3 = 0
$("#aicoopclick").rotate({
  bind:
  {
    click: function(){
      value3 +=180;
      $(this).rotate({ animateTo:value3})
    }
  }
});

var value4 = 0
$("#idkidsclick").rotate({
  bind:
  {
    click: function(){
      value4 +=180;
      $(this).rotate({ animateTo:value4})
    }
  }
});

var value5 = 0
$("#edumotivclick").rotate({
  bind:
  {
    click: function(){
      value5 +=180;
      $(this).rotate({ animateTo:value5})
    }
  }
});

var value6 = 0
$("#closdelatourclick").rotate({
  bind:
  {
    click: function(){
      value6 +=180;
      $(this).rotate({ animateTo:value6})
    }
  }
});

var value7 = 0
$("#furyosquadclick").rotate({
  bind:
  {
    click: function(){
      value7 +=180;
      $(this).rotate({ animateTo:value7})
    }
  }
});

