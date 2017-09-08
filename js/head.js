 if ($(window).width() < 768) {
  $(window).resize(init);
        function init(){
          var wid = $(window).width();
            $('html').css({
              'font-size' : 14/375 * wid + 'px'
            })
        }init();
   var le = true;
    $('.open').on('touchstart',function  () {
      if (le) {
        $('.nav').stop(true).slideDown(300);
        le = false;
        $(".login").fadeIn()
      } else {
        $('.nav').stop(true).slideUp(300);
        le = true;
        $(".login").fadeOut()
      }
    })
  $(".login a").eq(1).attr("href","../cn/error.html")
 }else{
     $(".login a").eq(1).attr("href","http://jjchuang.cn:8089/Login.aspx")
 }