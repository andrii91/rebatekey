$(document).ready(function() { 
  function getIdYoutub(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}

  function parseUrlVimeo(url){
    var vimeoRegex = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
    var parsed = url.match(vimeoRegex);

    return "//player.vimeo.com/video/" + parsed[1];    
};

  
  
  $('.toggle-form').click(function(e){
    e.preventDefault();
//    $(this).parents('form').addClass('show-form');
    $(this).parents('form').find('.form-more').slideDown(200);
    $(this).parents('form').find('.btn-coupon').text('Save');
    $(this).hide();
    
  });
  
  
  $('.play_youtub-video').click(function(){
    $(this).hide();
    $(this).parent().append('<div class="embed-responsive embed-responsive-16by9 z-depth-1-half rounded"> <iframe class="embed-responsive-item rounded" src="https://www.youtube.com/embed/'+getIdYoutub($(this).data('youtub'))+'?autoplay=1&cc_load_policy=1&playlist='+getIdYoutub($(this).data('youtub'))+'&loop=1&version=3&enablejsapi=1" allowfullscreen=""></iframe></div>')
    
  });
  
  $('.play_vimeo-video').click(function(){
    $(this).hide();
    $(this).parent().append('<div class="embed-responsive embed-responsive-16by9 z-depth-1-half rounded"> <iframe class="embed-responsive-item rounded" src="'+parseUrlVimeo($(this).data('vimeo'))+'" allowfullscreen=""></iframe></div>')
    
  });
  
});