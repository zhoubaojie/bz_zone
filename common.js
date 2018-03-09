$(function () {
  var localurl = window.location.href;
  $('.navbar-default .navbar-nav>li a').each(function(){
    var link = $(this).attr('href');
    link = 'http://www.mddd.com.cn'+link;
    if(link == localurl){
      $(this).parents('li').addClass('active');
    }
  });

	$('.navbar-default .navbar-nav>.dropdown').hover(function () {
		$(this).find('ul').show();
	}, function () {
		$(this).find('ul').hide();
	});

  var id = $('.title .click').attr('rel');
  var url = $('.title .click').attr('src');
  var src = '/blog/show/click';
  $.post(url,{id:id}).success(function(data){
    if(data.status == 1){
      $('.title .click').text(data.click);
    }
  });

  $('.main-right dd .click').each(function(index){
    var rel = $(this).attr('rel');
    $.post(src,{id:rel}).success(function(data){
      if(data.status == 1){
        $('.main-right dd .click').eq(index).text(data.click);
      }
    });  
  });

  $('.main-left .click span').each(function(index){
    var rel = $(this).attr('rel');
    $.post(src,{id:rel}).success(function(data){
      if(data.status == 1){
        $('.main-left .click span').eq(index).text(data.click);
      }
    });  
  });
});