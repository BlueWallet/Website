var $poster = $('.poster'),
  $shine = $('.shine'),
  $layer = $('div[class*="layer-"]'),
  w = $(window).width(), //window width
  h = $(window).height(); //window height

$(window).on('mousemove', function(e) {
  var offsetX = 0.5 - e.pageX / w, //cursor position X
    offsetY = 0.5 - e.pageY / h, //cursor position Y
    dy = e.pageY - h / 2, //@h/2 = center of poster
    dx = e.pageX - w / 2, //@w/2 = center of poster
    theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
    angle = theta * 180 / Math.PI - 90, //convert rad in degrees
    offsetPoster = $poster.data('offset'),
    transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }

  //gradient angle and opacity
  $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0) 80%)');

  //poster transform
  $poster.css('transform', transformPoster);

  //parallax foreach layer
  $layer.each(function() {
    var $this = $(this),
      offsetLayer = $this.data('offset') || 0,
      transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';

    $this.css('transform', transformLayer);
  });

});