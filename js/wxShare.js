var wxShare = {};
var debug = false;
wxShare.title = "\"海峡杯\"福建(晋江)创新创业大赛";
wxShare.desc = "福建(晋江)\"海峡杯\"创新创业大赛\n火爆开赛啦！";


var toShare = function (title, desc, url) {
    if (title.length > 0) {
        wxShare.title = title;
    }

    if (desc.length > 0) {
        wxShare.desc = desc;
    }

    if (url.indexOf("test") >= 0) {
        debug = true;
    }


    var xhr = new XmlHttp();

    var config_url = "https://papermaker.cn:8443/ycard/my/config?url=" + url;

    // var config_url = "http://119.23.41.95:8080/webapp/my/config?url=" + url;

    xhr.getText(config_url, function (result) {
        var json = JSON.parse(result);
        var data = json.data;

        var appId = data.appId;
        var jsapi_ticket = data.jsapi_ticket;
        var nonceStr = data.noncestr;
        var signature = data.signature;
        var timestamp = data.timestamp;

        console.log("appId是: " + appId);
        console.log("jsapi_ticket是: " + jsapi_ticket);
        console.log("url是: " + url);
        console.log("config_url是: " + config_url);
        
        console.log("随机字符串是: " + nonceStr);
        console.log("签名是: " + signature);
        console.log("时间戳是: " + timestamp);
        


        initWxConfig(appId, nonceStr, signature, timestamp, url);

    });
}
var initWxConfig = function (appId, nonceStr, signature, timestamp, url) {
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appId, // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: nonceStr, // 必填，生成签名的随机串
        signature: signature,// 必填，签名，见附录1
        jsApiList: [
            "onMenuShareTimeline",
            "onMenuShareAppMessage",
            "onMenuShareQQ",
            "onMenuShareWeibo",
            "onMenuShareQZone",
            "startRecord",
            "stopRecord",
            "onVoiceRecordEnd",
            "playVoice",
            "pauseVoice",
            "stopVoice",
            "onVoicePlayEnd",
            "uploadVoice",
            "downloadVoice",
            "chooseImage",
            "previewImage",
            "uploadImage",
            "downloadImage",
            "translateVoice",
            "getNetworkType",
            "openLocation",
            "getLocation",
            "hideOptionMenu",
            "showOptionMenu",
            "hideMenuItems",
            "showMenuItems",
            "hideAllNonBaseMenuItem",
            "showAllNonBaseMenuItem",
            "closeWindow",
            "scanQRCode",
            "chooseWXPay",
            "openProductSpecificView",
            "addCard",
            "chooseCard",
            "openCard"
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });

    onShare(url);
}
var onShare = function (url) {
    wx.ready(function () {

        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        wx.onMenuShareTimeline({
            title: wxShare.title, // 分享标题
            link: url, // 分享链接
            imgUrl: 'http://papermaker.cn/project_test/sanchuang_old/logo.ico', // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        //获取“分享给朋友”按钮点击状态及自定义分享内容接口
        wx.onMenuShareAppMessage({
            title: wxShare.title, // 分享标题
            desc: wxShare.desc, // 分享描述
            link: url, // 分享链接
            imgUrl: 'http://papermaker.cn/project_test/sanchuang_old/logo.ico', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

    });

    wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
};