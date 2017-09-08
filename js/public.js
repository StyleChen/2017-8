/**
 * Created by Administrator on 2017/7/24.
 */



var ajax = function (type,url,data,callback,error) {
    if($.isFunction(data)){
        error = callback;
        callback = data;
    }else if(data == undefined){
        data = '';
    }
    $.ajax({
        type:type,
        url: "http://jjchuang.cn:8080/jc/" + url,
        data:data,
        dataType:"json",
        success: function (res) {
            if(res.code == 0){
                callback(res);

            }else{
                if($.isFunction(error)){
                    error(res);
                }
            }
        },
        error:function (res) {
        },
        complete:function (res) {
            // console.log(data);
        }
    });
};
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

$(function () {
    ajax("get","index/load",function (res) {
        var sponsorList = res.data.sponsorList;
        var imgL='<div> ' +
            '<span>关于我们</span> ' +
            '<span>联系我们</span> ' +
            '<span>常见问题</span> ' +
            '</div>';
        for(var y=0;y<sponsorList.length;y++){
            imgL+='<img src="'+sponsorList[y].sponsorImage+'" alt="">'
        }
        $(".footImg div").html(imgL);
    })
});






































