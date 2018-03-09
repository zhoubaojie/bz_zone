$(function () {
  var localurl = window.location.href;
  $('.navbar-default .navbar-nav>li a').each(function(){
    var link = $(this).attr('href');
    link = 'http://www.mddd.com.cn'+link;
    if(link == localurl){
      $(this).parents('li').addClass('active');
    }
  });
  
  //this is just a gived up file
});