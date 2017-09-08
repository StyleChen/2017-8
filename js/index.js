$(function () {

    ajax("get", "index/load", function (res) {
        $(".qrWeixin").attr("src", res.data.qrList[0].qrWeixin);
        $(".qrOfficial").attr("src", res.data.qrList[0].qrOfficial);
        $(".qrSanchuang").attr("src",res.data.qrList[0].qrJc)
        //新闻列表
        var newsList = res.data.newsList;
        var content = "",img = "";
        for(var i=0;i< newsList.length;i++){
            content += '<div class="animated"> ' +
                '<h2>'+newsList[i].newsName+'</h2> ' +
                '<div class="line"></div> ' +
                '<div class="shows" style="clear: both;overflow: hidden;max-height: 80px;">'+newsList[i].newsContent+'</div> ' +
                '<p class="more"><a href="cn/newDetails.html?newsId='+newsList[i].newsId+'" style="color:#FFF"><<更多</a></p> ' +
                '</div>';
            img += '<img class="wow" src="'+newsList[i].newsCover+'" alt="">';
        }
        $(".con").html(content);
        $(".new-con p").css({
            "color" : "#fff",
            "font-size": "14px",
            "font-family" : "'Microsoft YaHei',sans-serif,Arial"
        })
        $(".new-con p span").css({
            "color" : "#fff",
            "font-size": "14px",
            "font-family" : "'Microsoft YaHei',sans-serif,Arial"
        });
        $(".img-con").html(img);
        $(".img-con img:eq(0)").show();
        //赛事安排
        var arrangeList = res.data.arrangeList;
        var arrangeListCon = "";
        var arrangeListImg = "";
        for(var a = 0; a < arrangeList.length; a++){
            arrangeListCon += '<p>'+arrangeList[a].arrangeName+'</p>';
            arrangeListImg += '<img src="'+arrangeList[a].arrangeImage+'" />';
        }
        $(".img-nav").append(arrangeListCon);
        $(".imgbox div").html(arrangeListImg);

        // $(".vid-con .swiper-wrapper").html(videoListUrl);
        //视频
        var videoList = res.data.videoList;
        var videoListUrl= "";
        var videoListCon= "";

        for(var v=0;v<videoList.length;v++){

            videoListCon += '<p>'+videoList[v].videoName+'</p>'


            if(v<=1){
                $(".swiper-wrapper .swiper-slide").eq(v).css({
                    "background" : 'url(' +videoList[v].videoCover+ ') no-repeat',
                    "background-size": "100%"
                }).children('a').attr("href",videoList[v].videoUrl+"")
            }else{
                videoListUrl += '<div class="swiper-slide " style="background : url(' + videoList[v].videoCover + ') no-repeat;background-size: 100%"> ' +
                    '<a href="'+videoList[v].videoUrl+'" target="_blank"></a> ' +
                    '</div>';
                $(".vid-show").after(videoListUrl)
            }
            $(".tit").html(videoListCon);
        }
        //合作机构
        var cooperation = "";
        var times = 1;
        for (var j = 0; j < res.data.parterList.length; j++) {
            times += 0.1;
                cooperation += '<li class="wow zoomIn"><a href="'+   res.data.parterList[j].parterUrl + '"><div style="background:url('+res.data.parterList[j].parterImage+') center  no-repeat; background-size:100% auto" data-wow-delay="'+ times + 's"></div>' +
                    ' <p>'+res.data.parterList[j].parterName+'</p> </a></li>'
        }
        $(".partners").append(cooperation);





        var winH = $(window).height();
        var winW = $(window).width();
        var newIndex = -1;

        function left() {
            $('.con > div').eq(newIndex + 2).removeClass('fadeOutRight').addClass('fadeOutRight').fadeOut(500).prev().removeClass('fadeOutRight').addClass('fadeInLeft').fadeIn(1000);
            $('.img-con > img').eq(newIndex + 2).removeClass('fadeOutRight').addClass('fadeOutRight').fadeOut(500).prev().removeClass('fadeOutRight').addClass('fadeInLeft').fadeIn(1000)
        }

        function right() {
            if (newIndex <= 2) {
                $('.con > div').eq(newIndex).removeClass('fadeOutRight').addClass('fadeOutRight').fadeOut(500).next().removeClass('fadeOutRight').addClass('fadeInLeft').fadeIn(1000);
                $('.img-con > img').eq(newIndex).removeClass('fadeOutRight').addClass('fadeOutRight').fadeOut(500).next().removeClass('fadeOutRight').addClass('fadeInLeft').fadeIn(1000)
            }
        }

        if ($(window).width() > 750) {
            var trans = winW * 0.8;

            for (var i = 0; i < $('.imgbox img').length; i++) {
                $('.imgbox img').eq(i).width(winW);
            }
            var imgW = $('.imgbox img').eq(1).width();

            $('.content').height(winH);
            $('.imgbox > div').width(imgW * $(".imgbox > div img").length);
            $('.content > div:nth-child(4)').height(winH - 450)




            /*新闻模块切换效果*/


            /*向右*/
            $('.news .btn span').eq(1).on('click', function () {
                newIndex++;
                if (newIndex >= 2) {
                    newIndex = 1
                }

                if (newIndex < 2) {
                    $('.con > div').eq(newIndex).children('.line').animate({'width': '1px'}, 200, function () {
                        right();
                        setTimeout(function () {
                            $('.con .line').css({'width': '410px'})
                        }, 1000)
                    })
                    $('.news .page span').eq(0).html(newIndex + 2);

                }

            })

            /*向左*/
            $('.news .btn span').eq(0).on('click', function () {
                newIndex--;
                if (newIndex <= -1) {
                    newIndex = -1
                }
                ;
                if (newIndex >= -1) {
                    $('.con > div').eq(newIndex + 2).children('.line').animate({'width': '1px'}, 200, function () {
                        left();
                        setTimeout(function () {
                            $('.con .line').css({'width': '410px'})
                        }, 1000)
                    })
                    $('.news .page span').eq(0).html(newIndex + 2);
                }
                ;
            })

            //   $('.list > li').on('click',function  () {
            //   console.log($(this));

            //   $(this).css({'background':'#000'}).children('div').show();
            // })


            /*大赛安排切换效果*/
            $('.img-nav > p').hover(function () {
                var a = $(this).index();
                $('.img-nav em').stop().animate({
                    'top': (a - 1) * 69 + 'px'
                })
                $('.imgbox > div img').css({
                    '-webkit-transform': 'scale3d(0.9,0.9,0.9) ',
                    '-ms-transform': 'scale3d(0.9,0.9,0.9) ',
                    '-o-transform': 'scale3d(0.9,0.9,0.9) ',
                    'transform': 'scale3d(0.9,0.9,0.9) '
                })
                setTimeout(function () {
                    $('.imgbox > div').css({
                        '-webkit-transform': 'translateX(' + -(a - 1) * winW + 'px)',
                        '-ms-transform': 'translateX(' + -(a - 1) * winW + 'px)',
                        '-o-transform': 'translateX(' + -(a - 1) * winW + 'px)',
                        'transform': 'translateX(' + -(a - 1) * winW + 'px)'
                    })
                    $('.imgbox > div img').css({
                        '-webkit-transform': 'scale3d(1,1,1) ',
                        '-ms-transform': 'scale3d(1,1,1) ',
                        '-o-transform': 'scale3d(1,1,1) ',
                        'transform': 'scale3d(1,1,1) '
                    })
                }, 500)
            })


            /*视频模块切换效果*/


            var vidLe = $('.swiper-slide').length;
            $('.swiper-wrapper').width(vidLe * viW+80)
            // 下一个
            var licks = 0, num = 0;

            viW = $('.swiper-wrapper .swiper-slide').eq(0).width();
            $('.video .btn span').eq(1).on('click', function () {
                licks++;
                if (licks >  $('.swiper-wrapper .swiper-slide').length-1) {
                    licks = licks =  $('.swiper-wrapper .swiper-slide').length-1;
                }
                ;
                $('.tit p').eq(licks).css("display", "block").siblings('p').css("display", "none")
                num = licks * viW;
                $('.swiper-wrapper').css({
                    '-webkit-transform': 'translateX(' + -num + 'px)',
                    '-ms-transform': 'translateX(' + -num + 'px)',
                    '-o-transform': 'translateX(' + -num + 'px)',
                    'transform': 'translateX(' + -num + 'px)',
                })
                $('.video .page span').eq(0).html(licks + 1);
            })

            // 上一个
            $('.video .btn span').eq(0).on('click', function () {
                licks--;
                if (licks <= 0) {
                    licks = 0;
                }
                $('.tit p').eq(licks).css("display", "block").siblings('p').css("display", "none");
                num = licks * viW;
                $('.swiper-wrapper').css({
                    '-webkit-transform': 'translateX(' + -num + 'px)',
                    '-ms-transform': 'translateX(' + -num + 'px)',
                    '-o-transform': 'translateX(' + -num + 'px)',
                    'transform': 'translateX(' + -num + 'px)',
                })
                $('.video .page span').eq(0).html(licks + 1);
            })

        } else {

            // var video = new tvp.VideoInfo();
            // video.setVid("e0360okg0tf");
            // var player = new tvp.Player(312,234);
            // player.setCurVideo(video);
            // player.write("mod_player");
            $('.wrap').height(winH);
                setTimeout(function(){$('.content > div:nth-child(5)').css({'display': 'none'})},500);
            for (var i = 0; i < $('.imgbox img').length; i++) {
                $('.imgbox img').eq(i).height(winH);
            }
            ;
            var imgH = $('.imgbox img').eq(1).height();

            $('.img-nav > p').on('touchstart', function () {
                var a = $(this).index();
                $('.img-nav em').stop().animate({
                    'top': (a - 1) * 3.7 + 'rem'
                })
                $('.imgbox > div').css({
                    '-webkit-transform': 'translateY(' + -(a - 1) * winH + 'px)',
                    '-ms-transform': 'translateY(' + -(a - 1) * winH + 'px)',
                    '-o-transform': 'translateY(' + -(a - 1) * winH + 'px)',
                    'transform': 'translateY(' + -(a - 1) * winH + 'px)'
                })

            })

        }
        /*新闻切换*/
        function changeRight() {
            newIndex++;
            if (newIndex >= 2) {
                newIndex = 1
            }

            if (newIndex <= 1) {
                right()
            }

            $('.news .page span').eq(0).html(newIndex + 2);
        }

        function changeLeft() {
            newIndex--;
            if (newIndex <= -1) {
                newIndex = -1
            }
            ;
            if (newIndex >= -1) {
                left();
            }
            $('.page span').eq(0).html(newIndex + 2);
        }

        // 向右
        $('.news .btn span').eq(1).on('touchstart', function () {
            changeRight()
        })
        touch.on($('.img-con'), 'swiperight', function () {
            changeLeft();
        })
        touch.on($('.img-con'), 'swipeleft', function () {
            changeRight();
        })
        // 向左
        $('.news .btn span').eq(0).on('touchstart', function () {
            changeLeft()
        })

    }, function (res) {

    });


});


