$(document).ready(function(){
    $(window).scroll(function(e){
      parallax();
    });
    function parallax(){
      var scrolled = $(window).scrollTop();
      $('.hero').css('top',-(scrolled*0.0315)+'rem');
      $('.hero > h1').css('top',-(scrolled*-0.005)+'rem');
      $('.hero > h1').css('opacity',1-(scrolled*.00175));
      $('.hero > h3').css('top',-(scrolled*-0.005)+'rem');
      $('.hero > h3').css('opacity',1-(scrolled*.00175));
    };
  });

  $(document).ready(function() {
    // Function to set the height of .hero based on window height
    function setHeroHeight() {
        var windowHeight = $(window).height();
        $('.hero').css('height', windowHeight);
    }

    // Call the function on document ready and window resize
    setHeroHeight();

    $(window).resize(function() {
        setHeroHeight();
    });
});