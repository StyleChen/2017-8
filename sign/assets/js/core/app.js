/* ------------------------------------------------------------------------------
*
*  # Template JS core
*
*  Core JS file with default functionality configuration
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // ========================================
    //
    // Layout
    //
    // ========================================


    // Calculate page container height
    // -------------------------

    // Window height - navbars heights
    function containerHeight() {
        var availableHeight = $(window).height() - $('body > .navbar').outerHeight() - $('body > .navbar + .navbar').outerHeight() - $('body > .navbar + .navbar-collapse').outerHeight() - $('.page-header').outerHeight();

        $('.page-container').attr('style', 'min-height:' + availableHeight + 'px');
    }




    // ========================================
    //
    // Heading elements
    //
    // ========================================


    // Heading elements toggler
    // -------------------------

    // Add control button toggler to page and panel headers if have heading elements
    $('.panel-heading, .page-header-content, .panel-body').has('> .heading-elements').append('<a class="heading-elements-toggle"><i class="icon-menu"></i></a>');


    // Toggle visible state of heading elements
    $('.heading-elements-toggle').on('click', function() {
        $(this).parent().children('.heading-elements').toggleClass('visible');
    });



    // Breadcrumb elements toggler
    // -------------------------

    // Add control button toggler to breadcrumbs if has elements
    $('.breadcrumb-line').has('.breadcrumb-elements').append('<a class="breadcrumb-elements-toggle"><i class="icon-menu-open"></i></a>');


    // Toggle visible state of breadcrumb elements
    $('.breadcrumb-elements-toggle').on('click', function() {
        $(this).parent().children('.breadcrumb-elements').toggleClass('visible');
    });




    // ========================================
    //
    // Navbar
    //
    // ========================================


    // Navbar navigation
    // -------------------------

    // Prevent dropdown from closing on click
    $(document).on('click', '.dropdown-content', function (e) {
        e.stopPropagation();
    });

    // Disabled links
    $('.navbar-nav .disabled a').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // Show tabs inside dropdowns
    $('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
        $(this).tab('show')
    });




    // ========================================
    //
    // Element controls
    //
    // ========================================


    // Reload elements
    // -------------------------

    // Panels
    $('.panel [data-action=reload]').click(function (e) {
        e.preventDefault();
        var block = $(this).parent().parent().parent().parent().parent();
        $(block).block({ 
            message: '<i class="icon-spinner2 spinner"></i>',
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.8,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #ddd'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none'
            }
        });

        // For demo purposes
        window.setTimeout(function () {
           $(block).unblock();
        }, 2000); 
    });


    // Sidebar categories
    $('.category-title [data-action=reload]').click(function (e) {
        e.preventDefault();
        var block = $(this).parent().parent().parent().parent();
        $(block).block({ 
            message: '<i class="icon-spinner2 spinner"></i>',
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0.5,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #000'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none',
                color: '#fff'
            }
        });

        // For demo purposes
        window.setTimeout(function () {
           $(block).unblock();
        }, 2000); 
    }); 


    // Light sidebar categories
    $('.sidebar-default .category-title [data-action=reload]').click(function (e) {
        e.preventDefault();
        var block = $(this).parent().parent().parent().parent();
        $(block).block({ 
            message: '<i class="icon-spinner2 spinner"></i>',
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.8,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #ddd'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none'
            }
        });

        // For demo purposes
        window.setTimeout(function () {
           $(block).unblock();
        }, 2000); 
    }); 



    // Collapse elements
    // -------------------------

    //
    // Sidebar categories
    //

    // Hide if collapsed by default
    $('.category-collapsed').children('.category-content').hide();


    // Rotate icon if collapsed by default
    $('.category-collapsed').find('[data-action=collapse]').addClass('rotate-180');


    // Collapse on click
    $('.category-title [data-action=collapse]').click(function (e) {
        e.preventDefault();
        var $categoryCollapse = $(this).parent().parent().parent().nextAll();
        $(this).parents('.category-title').toggleClass('category-collapsed');
        $(this).toggleClass('rotate-180');

        containerHeight(); // adjust page height

        $categoryCollapse.slideToggle(150);
    });


    //
    // Panels
    //

    // Hide if collapsed by default
    $('.panel-collapsed').children('.panel-heading').nextAll().hide();


    // Rotate icon if collapsed by default
    $('.panel-collapsed').find('[data-action=collapse]').children('i').addClass('rotate-180');


    // Collapse on click
    $('.panel [data-action=collapse]').click(function (e) {
        e.preventDefault();
        var $panelCollapse = $(this).parent().parent().parent().parent().nextAll();
        $(this).parents('.panel').toggleClass('panel-collapsed');
        $(this).toggleClass('rotate-180');

        containerHeight(); // recalculate page height

        $panelCollapse.slideToggle(150);
    });



    // Remove elements
    // -------------------------

    // Panels
    $('.panel [data-action=close]').click(function (e) {
        e.preventDefault();
        var $panelClose = $(this).parent().parent().parent().parent().parent();

        containerHeight(); // recalculate page height

        $panelClose.slideUp(150, function() {
            $(this).remove();
        });
    });


    // Sidebar categories
    $('.category-title [data-action=close]').click(function (e) {
        e.preventDefault();
        var $categoryClose = $(this).parent().parent().parent().parent();

        containerHeight(); // recalculate page height

        $categoryClose.slideUp(150, function() {
            $(this).remove();
        });
    });




    // ========================================
    //
    // Main navigation
    //
    // ========================================


    // Main navigation
    // -------------------------

    // Add 'active' class to parent list item in all levels
    $('.navigation').find('li.active').parents('li').addClass('active');

    // Hide all nested lists
    $('.navigation').find('li').not('.active, .category-title').has('ul').children('ul').addClass('hidden-ul');

    // Highlight children links
    $('.navigation').find('li').has('ul').children('a').addClass('has-ul');

    // Add active state to all dropdown parent levels
    $('.dropdown-menu:not(.dropdown-content), .dropdown-menu:not(.dropdown-content) .dropdown-submenu').has('li.active').addClass('active').parents('.navbar-nav .dropdown, .navbar-nav .dropup').addClass('active');

    

    // Main navigation tooltips positioning
    // -------------------------

    // Left sidebar
    $('.navigation-main > .navigation-header > i').tooltip({
        placement: 'right',
        container: 'body'
    });



    // Collapsible functionality
    // -------------------------

    // Main navigation
    $('.navigation-main').find('li').has('ul').children('a').on('click', function (e) {
        e.preventDefault();

        // Collapsible
        $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).toggleClass('active').children('ul').slideToggle(250);

        // Accordion
        if ($('.navigation-main').hasClass('navigation-accordion')) {
            $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(250);
        }
    });

        
    // Alternate navigation
    $('.navigation-alt').find('li').has('ul').children('a').on('click', function (e) {
        e.preventDefault();

        // Collapsible
        $(this).parent('li').not('.disabled').toggleClass('active').children('ul').slideToggle(200);

        // Accordion
        if ($('.navigation-alt').hasClass('navigation-accordion')) {
            $(this).parent('li').not('.disabled').siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(200);
        }
    }); 




    // ========================================
    //
    // Sidebars
    //
    // ========================================


    // Mini sidebar
    // -------------------------

    // Toggle mini sidebar
    $('.sidebar-main-toggle').on('click', function (e) {
        e.preventDefault();

        // Toggle min sidebar class
        $('body').toggleClass('sidebar-xs');
    });



    // Sidebar controls
    // -------------------------

    // Disable click in disabled navigation items
    $(document).on('click', '.navigation .disabled a', function (e) {
        e.preventDefault();
    });


    // Adjust page height on sidebar control button click
    $(document).on('click', '.sidebar-control', function (e) {
        containerHeight();
    });


    // Hide main sidebar in Dual Sidebar
    $(document).on('click', '.sidebar-main-hide', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-main-hidden');
    });


    // Toggle second sidebar in Dual Sidebar
    $(document).on('click', '.sidebar-secondary-hide', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-secondary-hidden');
    });


    // Hide all sidebars
    $(document).on('click', '.sidebar-all-hide', function (e) {
        e.preventDefault();

        $('body').toggleClass('sidebar-all-hidden');
    });



    //
    // Opposite sidebar
    //

    // Collapse main sidebar if opposite sidebar is visible
    $(document).on('click', '.sidebar-opposite-toggle', function (e) {
        e.preventDefault();

        // Opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');

        // If visible
        if ($('body').hasClass('sidebar-opposite-visible')) {

            // Make main sidebar mini
            $('body').addClass('sidebar-xs');

            // Hide children lists
            $('.navigation-main').children('li').children('ul').css('display', '');
        }
        else {

            // Make main sidebar default
            $('body').removeClass('sidebar-xs');
        }
    });


    // Hide main sidebar if opposite sidebar is shown
    $(document).on('click', '.sidebar-opposite-main-hide', function (e) {
        e.preventDefault();

        // Opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');
        
        // If visible
        if ($('body').hasClass('sidebar-opposite-visible')) {

            // Hide main sidebar
            $('body').addClass('sidebar-main-hidden');
        }
        else {

            // Show main sidebar
            $('body').removeClass('sidebar-main-hidden');
        }
    });


    // Hide secondary sidebar if opposite sidebar is shown
    $(document).on('click', '.sidebar-opposite-secondary-hide', function (e) {
        e.preventDefault();

        // Opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');

        // If visible
        if ($('body').hasClass('sidebar-opposite-visible')) {

            // Hide secondary
            $('body').addClass('sidebar-secondary-hidden');

        }
        else {

            // Show secondary
            $('body').removeClass('sidebar-secondary-hidden');
        }
    });


    // Hide all sidebars if opposite sidebar is shown
    $(document).on('click', '.sidebar-opposite-hide', function (e) {
        e.preventDefault();

        // Toggle sidebars visibility
        $('body').toggleClass('sidebar-all-hidden');

        // If hidden
        if ($('body').hasClass('sidebar-all-hidden')) {

            // Show opposite
            $('body').addClass('sidebar-opposite-visible');

            // Hide children lists
            $('.navigation-main').children('li').children('ul').css('display', '');
        }
        else {

            // Hide opposite
            $('body').removeClass('sidebar-opposite-visible');
        }
    });


    // Keep the width of the main sidebar if opposite sidebar is visible
    $(document).on('click', '.sidebar-opposite-fix', function (e) {
        e.preventDefault();

        // Toggle opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');
    });



    // Mobile sidebar controls
    // -------------------------

    // Toggle main sidebar
    $('.sidebar-mobile-main-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-opposite');
    });


    // Toggle secondary sidebar
    $('.sidebar-mobile-secondary-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-secondary').removeClass('sidebar-mobile-main sidebar-mobile-opposite');
    });


    // Toggle opposite sidebar
    $('.sidebar-mobile-opposite-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-opposite').removeClass('sidebar-mobile-main sidebar-mobile-secondary');
    });



    // Mobile sidebar setup
    // -------------------------

    $(window).on('resize', function() {
        setTimeout(function() {
            containerHeight();
            
            if($(window).width() <= 768) {

                // Add mini sidebar indicator
                $('body').addClass('sidebar-xs-indicator');

                // Place right sidebar before content
                $('.sidebar-opposite').prependTo('.page-content');
            }
            else {

                // Remove mini sidebar indicator
                $('body').removeClass('sidebar-xs-indicator');

                // Revert back right sidebar
                $('.sidebar-opposite').insertAfter('.content-wrapper');

                // Remove all mobile sidebar classes
                $('body').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-opposite');
            }
        }, 100);
    }).resize();




    // ========================================
    //
    // Other code
    //
    // ========================================


    // Plugins
    // -------------------------

    // Popover
    $('[data-popup="popover"]').popover();


    // Tooltip
    $('[data-popup="tooltip"]').tooltip();

    var userId = sessionStorage.userId || "eb01f39ccfd54d4ab41cac6e7a93b622";
    console.log(userId)
    $("input[name=userId]").val(userId);





//	    第二步
    $("#upload").submit(function () {
        $(this).ajaxSubmit(function(message) {
            console.log(message);
            if(message != -1){
                var fileObj = new Object;
                fileObj.userId = sessionStorage.userId;
                fileObj.fileUrl = message;
                fileObj.fileType = $("#select2-chosen-6").html();
                var url = location.href;
                if(url.indexOf("company") != -1){
                    fileObj.fileType = $("#select2-chosen-4").html();
                }

                fileObj.fileName = $(".filename").html();
                $.ajax({
                    url:"http://119.23.12.96:8080/jc/signup/step2/uploadFile",
                    type:"post",
                    data:fileObj,
                    dataType:"json",
                    success:function (res) {
                        console.log(res);
                        loadFile();
                    },
                    error:function (res) {
                        console.log(res)
                    }
                })
            }
        });
        return false;
    });
    //获取文件列表
    function loadFile() {
        $.ajax({
            url:"http://119.23.12.96:8080/jc/signup/step2/load",
            type:"post",
            data:{userId:sessionStorage.userId},
            dataType:"json",
            success:function (res) {
                console.log(res);
                if(res.code == 0){
                    var data = res.data;
                    var html = "";
                    for(var i=0;i<data.length;i++){
                        html += "<tr>" +
                            "<td class='text-center'>"+data[i].fileName+"</td>" +
                            "<td class='text-center'>" +
                            "<a class='icon-drawer-in' href='"+data[i].fileUrl+"' title='下载'></a>" +
                            "<a class='icon-trash deleteFile' title='删除' style='margin: 0 10px;'><input type='hidden' value='"+data[i].fileId+"'></a>" +
                            "<a class='icon-pencil5 updateFile' title='修改'>" +
                            "<div class='fileUpdate' style='display: none;'>" +
                            "<form action='http://119.23.12.96:8080/jc/signup/step2/update' class='updateload' method='post'> " +
                            "<input type='hidden' name='userId' value='"+sessionStorage.userId+"'> " +
                            "<input type='hidden' name='fileId' value='"+data[i].fileId+"'> " +
                            "<div class='row'> " +
                            "<div class='col-lg-12'> " +
                            "<div class='form-group text-left'> " +
                            "<label>文件名:</label>" +
                            "<input class='form-control' type='text' value='"+data[i].fileName+"' disabled>"+
                            "</div> " +
                            "</div> " +
                            "<div class='col-lg-12'> " +
                            "<div class='form-group text-left'> " +
                            "<label>资料类型:</label> " +
                            "<select name='fileType' class='select'> " +
                            "<option value='营业执照'>营业执照</option> " +
                            "<option value='大赛视频'>大赛视频</option> " +
                            "<option value='专利证书'>专利证书</option> " +
                            "<option value='授权书'>授权书</option> " +
                            "<option value='批文'>批文</option> " +
                            "<option value='荣誉证书'>荣誉证书</option> " +
                            "<option value='答辩PPT'>答辩PPT</option> " +
                            "<option value='审计报告'>审计报告</option> " +
                            "<option value='财务报表'>财务报表</option> " +
                            "<option value='产品图片'>产品图片</option> " +
                            "<option value='团队合影'>团队合影</option> " +
                            "<option value='其它'>其它</option> " +
                            "</select> " +
                            "</div> " +
                            "</div> " +
                            "</div> " +
                            "<p class='text-right'><button class='btn btn-info updateSave'>保存 <i class='position-right icon-checkmark4'></i></button></p> " +
                            "</form>" +
                            "</div>" +
                            "</a>" +
                            "<a class='icon-file-eye' style='margin: 0 10px;' title='预览' href='"+data[i].fileUrl+"' target='_blank'></a>" +
                            "</td>" +
                            "<td class='text-center'>"+data[i].fileType+"</td>" +
                            "<td class='text-center'>"+FormatDate(data[i].fileTime)+"</td>" +
                            "</tr>";
                    }
                    $(".file-view").html(html);
//						删除
                    $(".deleteFile").click(function () {
                        var deleteFile = new Object;
                        var _this = $(this);
                        deleteFile.userId = sessionStorage.userId;
                        deleteFile.fileId = _this.children("input").val();
                        shopAjax("post","signup/step2/del",deleteFile,function (res) {
                            if(res.code == 0){
                                _this.parents("tr").hide();
                            }
                        },function (res) {

                        })
                    });
//						更新
//						打开更新弹窗
                    $(".updateFile").click(function () {
                        $(this).find(".fileUpdate").show();
                    });
//						关闭更新弹窗
                    $(".fileUpdate").click(function () {
                        $(this).hide();
                    });
                    // 关闭更新弹窗
                    $(".fileUpdate form").click(function (event) {
                        event.stopPropagation();//阻止冒泡事件
                    });
//						保存更新
                    $(".updateSave").click(function () {
                        $(this).parents(".updateload").submit(function () {
                            var that = $(this);
                            $(this).ajaxSubmit(function(message) {
                                console.log(message);
                                that.parents(".fileUpdate").addClass("hide");
                                alert(message.data);
                                loadFile();//重新加载资料列表
                            });
                            return false;// 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容
                        });
                    })
                }
            },
            error:function (res) {
                console.log(res)
            }
        })
    }
    loadFile();
    //        第三步

    //获取基本信息
    function getBasicInfo() {
        var urls = "signup/step3/load?userId=" + sessionStorage.userId
        shopAjax("post",urls,{userId:sessionStorage.userId},function (res) {
            console.log(res)
            var data = res.data;
            console.log(data.master)
            $('#basicInfo input[name=master]').val(data.master)
            $('#basicInfo input[name=masterJob]').val(data.masterJob)
            $('#basicInfo input[name=industryType]').val(data.industryType)
            $('#basicInfo input[name=officeTel]').val(data.officeTel)
            $('#basicInfo input[name=phone]').val(data.phone)
            $('#basicInfo input[name=projectName]').val(data.projectName)
            $('#basicInfo input[name=email]').val(data.email);
            $('#basicInfo #select2-chosen-10').html(data.goal)
            $('#basicInfo #select2-chosen-8').html(data.industryType)

        },function (res) {
            console.log(res);

        })
    }
    getBasicInfo();



    //团队组获取用户信息
    function getInfo() {
        var urls = "signup/loadStep1?userId=" + sessionStorage.userId
        shopAjax("post",urls,{userId:sessionStorage.userId},function (res) {
            console.log(res)

        },function (res) {
            var data = res.mainInfo
            $('input[name=projectName]').val(data.projectname);
            $('#select2-chosen-2').html(data.isScool);
            $('select[name=seltype]').val(data.seltype);
            // $('input[name=openDate]').val(data.openDate);
            // $('input[name=companyDate]').val(data.companydate);
            console.log(data.zhuceaddr)
            // $('input[name=companyAddr]').val(data.zhuceaddr);
            $('#select2-chosen-3').html(data.instep);
            $('#select2-chosen-4').html(data.intrade);
            $('textarea[name=stockRightStructure]').val(data.stockrightstructure);
            $('input[name=investor]').val(data.investor);
            $('textarea[name=financingPlan]').val(data.financingPlan);
            $('textarea[name=projectCharacteristic]').val(data.projectcharacteristic);
            $('textarea[name=projectmeno]').val(data.projectMeno);
            $('textarea[name=companymemo]').val(data.companyMemo);
            $('textarea[name=modelAndMoneyFrom]').val(data.modelAndMoneyFrom);
            $('textarea[name=projectteam]').val(data.projectteam);
            $('textarea[name=superiority]').val(data.superiority);
            $('textarea[name=position]').val(data.position);
            $('textarea[name=chance]').val(data.chance);
            $('textarea[name=defradation]').val(data.defradation);
            $('textarea[name=threaten]').val(data.threaten);
            $('textarea[name=financingPlan]').val(data.financingplan);


            var nums = res.infoList;
            console.log(nums)
            /*
             *前年
             * */
            $('input[name=creditRequirement1]').val(nums[0].creditrequirement);
            $('input[name=mayInCome1]').val(nums[0].mayincome);
            $('input[name=mayUserCount1]').val(nums[0].mayusercount);
            $('input[name=allCredit1]').val(nums[0].allcredit);
            $('input[name=allDebt1]').val(nums[0].alldebt);
            $('input[name=mainIn1]').val(nums[0].mainin);
            $('input[name=grossProfit1]').val(nums[0].grossprofit);
            $('input[name=netMargin1]').val(nums[0].netmargin);
            $('input[name=remark1]').val(nums[0].remark);
            /*
             * 今年
             * */
            $('input[name=creditRequirement2]').val(nums[1].creditrequirement);
            $('input[name=mayInCome2]').val(nums[1].mayincome);
            $('input[name=mayUserCount2]').val(nums[1].mayusercount);
            $('input[name=allCredit2]').val(nums[1].allcredit);
            $('input[name=allDebt2]').val(nums[1].alldebt);
            $('input[name=mainIn2]').val(nums[1].mainin);
            $('input[name=grossProfit2]').val(nums[1].grossprofit);
            $('input[name=netMargin2]').val(nums[1].netmargin);
            $('input[name=remark2]').val(nums[1].remark);
            console.log(nums[1].creditrequirement)
            /*
             * 明年
             * */
            $('input[name=creditRequirement3]').val(nums[2].creditrequirement);
            $('input[name=mayInCome3]').val(nums[2].mayincome);
            $('input[name=mayUserCount3]').val(nums[2].mayusercount);
            $('input[name=allCredit3]').val(nums[2].allcredit);
            $('input[name=allDebt3]').val(nums[2].alldebt);
            $('input[name=mainIn3]').val(nums[2].mainin);
            $('input[name=grossProfit3]').val(nums[2].grossprofit);
            $('input[name=netMargin3]').val(nums[2].netmargin);
            $('input[name=remark3]').val(nums[2].remark);



            /*
             * 前三年
             * */

           /*2015*/
           $("input[name=allCredit1]").val(nums[0].allcredit);
           $("input[name=allDebt1]").val(nums[0].alldebt);
           $("input[name=mainIn1]").val(nums[0].mainin);
           $("input[name=grossProfit1]").val(nums[0].grossprofit);
           $("input[name=netMargin1]").val(nums[0].netmargin);
           /*2016*/
           $("input[name=allCredit2]").val(nums[1].allcredit);
           $("input[name=allDebt2]").val(nums[1].alldebt);
           $("input[name=mainIn2]").val(nums[1].mainin);
           $("input[name=grossProfit2]").val(nums[1].grossprofit);
           $("input[name=netMargin2]").val(nums[1].netmargin);
           /*2017*/
           $("input[name=allCredit3]").val(nums[2].allcredit);
           $("input[name=allDebt3]").val(nums[2].alldebt);
           $("input[name=mainIn3]").val(nums[2].mainin);
           $("input[name=grossProfit3]").val(nums[2].grossprofit);
           $("input[name=netMargin3]").val(nums[2].netmargin);


           /*
            * 未来三年
            * */


           /*2018*/
           $("input[name=allCredit4]").val(nums[3].allcredit);
           $("input[name=allDebt4]").val(nums[3].alldebt);
           $("input[name=mainIn4]").val(nums[3].mainin);
           $("input[name=grossProfit4]").val(nums[3].grossprofit);
           $("input[name=netMargin4]").val(nums[3].netmargin);
           /*2019*/
           $("input[name=allCredit5]").val(nums[4].allcredit);
           $("input[name=allDebt5]").val(nums[4].alldebt);
           $("input[name=mainIn5]").val(nums[4].mainin);
           $("input[name=grossProfit5]").val(nums[4].grossprofit);
           $("input[name=netMargin5]").val(nums[4].netmargin);
           /*2020*/
           $("input[name=allCredit6]").val(nums[5].allcredit);
           $("input[name=allDebt6]").val(nums[5].alldebt);
           $("input[name=mainIn6]").val(nums[5].mainin);
           $("input[name=grossProfit6]").val(nums[5].grossprofit);
           $("input[name=netMargin6]").val(nums[5].netmargin);
        })






    }
    getInfo();

    //获取企业组基本信息
    function getCompanyInfo() {
        var urls = "signup/step3/partAll/load?userId=" + sessionStorage.userId;
        shopAjax("post",urls,function (res) {
            console.log(res);
           var data = res.data;
            $('input[name=companyname]').val(data.companyname);
            $('input[name=companyName]').val(data.companyname);
           $('input[name=zhuceaddr]').val(data.zhuceaddr);
            $('input[name=companyAddr]').val(data.zhuceaddr);
           $('input[name=xingzhengquyu]').val(data.xingzhengquyu);
            $('input[name=zhucehao]').val(data.zhucehao);
            $('input[name=zhuzijigoudaima]').val(data.zhuzijigoudaima);
            $('input[name=zhucezijin]').val(data.zhucezijin);
            $('input[name=shishouzijin]').val(data.shishouzijin);
            $('input[name=zhucehao]').val(data.zhucehao);
            $('input[name=zhuceyoubian]').val(data.zhuceyoubian);
            $('input[name=weixin]').val(data.weixin);
            $('input[name=bangongaddr]').val(data.bangongaddr);
            $('input[name=bangongyoubian]').val(data.bangongyoubian);
            $('input[name=fadainame]').val(data.fadainame);
            $('input[name=fadaiphone]').val(data.fadaiphone);
            $('input[name=fadaizhiwei]').val(data.fadaizhiwei);
            $('input[name=fadaiemail]').val(data.fadaiemail);
            $('input[name=wangzhi]').val(data.wangzhi);
            $('input[name=qifuname]').val(data.qifuname);
            $('input[name=qifuphone]').val(data.qifuphone);
            $('input[name=qifumobile]').val(data.qifumobile);
            $('input[name=qifuemail]').val(data.qifuemail);
            $('input[name=qifuzhiwei]').val(data.qifuzhiwei);
            $('input[name=linkname]').val(data.linkname);
            $('input[name=linkphone]').val(data.linkphone);
            $('input[name=linkzhiwei]').val(data.linkzhiwei);
            $('input[name=linkmobile]').val(data.linkmobile);
            $('input[name=linkemail]').val(data.linkemail);

            $('input[name=yuangongcount]').val(data.yuangongcount);
            $('input[name=dazhuanyuangongcount]').val(data.dazhuanyuangongcount);
            $('input[name=keyanyuangongcount]').val(data.keyanyuangongcount);
            $('textarea[name=qiyegaiyao]').val(data.qiyegaiyao);
            $('textarea[name=yihuojiang]').val(data.yihuojiang);
            $('textarea[name=yujihuojiang]').val(data.yujihuojiang);
            $('textarea[name=zhuanli]').val(data.zhuanli);
            $('textarea[name=key]').val(data.Keyword);

           // 下拉选项
            $('#select2-chosen-6 span:first-child').html(data.companytype)
            $('#s2id_autogen5 span:first-child').html(data.cansaimudi)
            $('#s2id_autogen9 span:first-child').html(data.isgaoxin)
            $('#s2id_autogen11 span:first-child').html(data.isfuhua)
            $('#s2id_autogen13 span:first-child').html(data.isdaxuekeji)
            $('#s2id_autogen15 span:first-child').html(data.hangye)
            $('#s2id_autogen18 span:first-child').html(data.isgaoxinqiye)
            $('#s2id_autogen22 span:first-child').html(data.jishutype)
            $('#s2id_autogen24 span:first-child').html(data.jishulaiyuan)
            $('#select2-chosen-6 span:first-child').html(data.companytype)
            $('#select2-chosen-6 span:first-child').html(data.companytype)
            $('#select2-chosen-6 span:first-child').html(data.companytype)
            $('#select2-chosen-6 span:first-child').html(data.companytype)
            $('#select2-chosen-6 span:first-child').html(data.companytype)









        },function (res) {
            console.log(res);

        })
    }
    getCompanyInfo();

    //获取股东信息
    function getGuInfo() {
        var urls = "signup/step4/master/load?userId=" + sessionStorage.userId;
        console.log(sessionStorage.userId);
        shopAjax("post",urls,function (res) {
            console.log(res)
            /* var data = res.data;
             console.log(data.master)
             $('#basicInfo input[name=master]').val(data.master)
             $('#basicInfo input[name=masterJob]').val(data.masterJob)
             $('#basicInfo input[name=industryType]').val(data.industryType)
             $('#basicInfo input[name=officeTel]').val(data.officeTel)
             $('#basicInfo input[name=phone]').val(data.phone)
             $('#basicInfo input[name=projectName]').val(data.projectName)
             $('#basicInfo input[name=email]').val(data.email);
             $('#basicInfo #select2-chosen-10').html(data.goal)
             $('#basicInfo #select2-chosen-8').html(data.industryType)*/

        },function (res) {
            console.log(res);

        })
    }
    getGuInfo();



    //资料修改获取
    function getUserInfo() {
        var urls = "user/info?userId=" + sessionStorage.userId;
        shopAjax("post",urls,function (res) {
            console.log(res)
            var data = res.data;
            $(".panel input[name=realName]").val(data.realName)
            $(".media-heading,.dropdown-toggle span").html(data.realName);
            $(".panel input[name=qq]").val(data.qq)
            $(".panel input[name=phone]").val(data.phone)
            $(".panel input[name=email]").val(data.email)
            $(".panel input[name=tel]").val(data.tel)
            $(".panel input[name=flex]").val(data.flex)
            $("select[name=province] option:first-child").html(data.province)
            $("select[name=area] option:first-child").html(data.area)
            $("select[name=city] option:first-child").html(data.city)
        },function (res) {
            console.log(res);

        })
    }
    getUserInfo();


    $(".saveBasicInfo").click(function (event) {
        // jquery 表单提交

        var officeTel = $("input[name='officeTel']").val();
        var phone = $("input[name='phone']").val();
        var email = $("input[name='email']").val();
        if(officeTel.indexOf("-") == -1){
            alert("电话必须带区号，并以‘-’区隔");
            return false;
        }
        if(!isPhone(phone)){
            alert("手机号码格式错误");
            return false;
        }
        if(!isEmail(email)){
            alert("邮箱格式错误");
            return false;
        }
        $("#basicInfo").ajaxSubmit(function(message) {
            console.log(message);
            alert(message.data)
            // 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容
        });
        event.stopPropagation();
        return false;
    });

//		第四步
//		保存股东信息
    $(".saveMaster").click(function () {
        $("#saveMaster").ajaxSubmit(function(message) {
            console.log(message);
            alert(message.data);
            saveMaster();
        });
        return false;
    });





//		获取股东信息
    function saveMaster() {
        shopAjax("post","signup/step4/master/load",{userId:sessionStorage.userId},function (res) {
            console.log(res);
            var masterInfo = "";
            var masterInfoData = res.data;
            for(var m=0;m<masterInfoData.length;m++){
                masterInfo += '<tr>' +
                    '<td>'+masterInfoData[m].gudongname+'</td>' +
                    '<td>'+masterInfoData[m].gudongtype+'</td>' +
                    '<td>'+masterInfoData[m].yingmoney+'</td>' +
                    '<td>'+masterInfoData[m].shimoney+'</td>' +
                    '<td>'+masterInfoData[m].chuzitype+'</td>' +
                    '<td>'+masterInfoData[m].bili+'</td>' +
                    '<td>' +
                    '<a class="icon-trash-alt deleteMaster" title="删除"><input type="hidden" name="masterId" value="'+masterInfoData[m].id+'"></a>' +
                    '</td>' +
                    '</tr>'
            }
            $(".masterInfo").html(masterInfo);
            //删除股东信息
            $(".deleteMaster").click(function () {
                var that = $(this);
                var masterId = $(this).find("input").val();
                shopAjax("post","signup/step4/master/del",{userId:sessionStorage.userId,masterId:masterId},function (res) {
                    that.parents("tr").hide();
                },function (res) {
                    console.log(res)
                })
            })
        },function (res) {

        })
    }
    saveMaster();

    // 企业组获取用户信息
    function getCompany() {
        var urls = "signup/step3/partAll/load?userId=" + sessionStorage.userId;
        shopAjax("post",urls,{userId:sessionStorage.userId},function (res) {
            console.log(res)

        },function (res) {

        })
    }getCompany();






    // 团队信息
    $(".saveTeamInfo").click(function () {
        var that = $(this);
/*        if($(this).parents("form").find("input[name=name]").val().length == 0){
            alert("请填写名字");
            return
        }
        if($(this).parents("form").find("input[name=age]").val().length == 0){
            alert("请填写年龄");
            return
        }
        if($(this).parents("form").find("input[name=job]").val().length == 0){
            alert("请填写职位");
            return
        }
        if($(this).parents("form").find("input[name=honor]").val().length == 0){
            alert("请填写成就");
            return
        }
        if($(this).parents("form").find("input[name=workExperience]").val().length == 0){
            alert("请填写工作经历");
            return
        }
        if($(this).parents("form").find("input[name=school]").val().length == 0){
            alert("请填写学校");
            return
        }
        if($(this).parents("form").find("input[name=workExperience]").val().length == 0){
            alert("请填写专业");
            return
        }*/


        $(this).parents("form").ajaxSubmit(function(message) {
            console.log(message);
            if(message.code == 0){
                alert(message.data);
                that.parents("form")[0].reset();
                teamInfo();
            }else {
                alert("请补全信息!");
                /*if(message.indexOf("name") != -1){
                    alert("请填写姓名!")
                }*/
            }
        });
        return false;
    });


    //获取团队列表
    function teamInfo() {
        var team = "";
        shopAjax("post","signup/step4/load",{userId:userId},function (res) {
            console.log(res);
            for(var t = 0 ;t < res.data.length; t++){
                team += '<tr>' +
                    '<td>'+res.data[t].memberName+'</td>' +
                    '<td>'+res.data[t].memberSex+'</td>' +
                    '<td>'+res.data[t].age+'</td>' +
                    '<td>'+res.data[t].memberJob+'</td>' +
                    '<td>'+res.data[t].isThousand+'</td>' +
                    '<td>'+res.data[t].isTechnology+'</td>' +
                    '<td>'+res.data[t].eduBack+'</td>' +
                    '<td><input class="saveSchool" type="text" disabled value="'+res.data[t].school+'"></td>' +
                    '<td>'+res.data[t].major+'</td>' +
                    '<td>'+res.data[t].isAbroad+'</td>' +
                    '<td>'+res.data[t].honor+'</td>' +
                    '<td>'+res.data[t].workExperience+'</td>' +
                    '<td><a class="icon-trash-alt deleteTeam" title="删除"><input type="hidden" value="'+res.data[t].memberId+'"></a>' +
                    '<a class="icon-pencil7 updateTeam" title="更改"><input type="hidden" value="'+res.data[t].memberId+'"></a></td>' +
                    '</tr>'
            }
            $(".teamInfo").html(team);
            //删除成员
            $(".deleteTeam").click(function () {
                var memberId = $(this).find("input").val();
                var that = $(this);
                shopAjax("post","signup/step4/del",{userId:userId,memberId:memberId},function (res) {
                    console.log(res);
                    that.parents("tr").hide();
                    alert(res.data);

                },function (res) {
                    console.log(res)
                })
            });
            //更新成员
            $(".updateTeam").click(function () {
                $(this).parents("tr").find("input[type=text]").removeAttr("disabled").focus();
            });
            //保存
            $(".saveSchool").blur(function () {
                var school = $(this).val();
                var memberId = $(this).parents("tr").find("input[type=hidden]").val();
                shopAjax("post","signup/step4/update",{userId:userId,school:school,memberId:memberId},function () {
                    alert(res.msg);
                    $(".saveSchool").attr("disabled","disabled");
                    // console.log(res);
                },function (res) {
                    console.log(res);
                })
            })
        },function (res) {

        })
    }
    teamInfo();



    // 退出登录
    $(".logOut").click(function () {
        if(confirm("确定退出当前账号吗")){
            sessionStorage.clear();
            location.href = "../../cn/login.html"
        }
    });


    // 资料填写状态
    shopAjax("post","signup/state",{userId:userId},function (res) {
        $(".static").html("已报名")
    },function (res) {
        console.log(res)

    });

    var url = location.href;
    if(url.indexOf("company") == -1){
        //团队组

        shopAjax("post","signup/stepFinal/check",{userId:sessionStorage.userId},function (res) {
            console.log(res);
            $("a[href=#finish]").parent("li").show();
            $(".stepFinal").html("<p>资料填写完整，可以提交</p>").attr("disabled",false);
        },function (res) {
            console.log(res);
            var link = "#";
            if(res.data.jump == "uploadFile"){
                link = "setSourceTwo.html"
            }else if(res.data.jump == "member"){
                link = "setSourcefour.html"
            }else if(res.data.jump == "baseInfo"){
                link = "setSourceThree.html"
            }else{
                link = "setSourceOne.html"
            }
            $("a[href=#finish]").parent("li").hide();
            $(".stepFinal").html("<p class='text-center text-danger'><span>"+res.data.msg+"</span><a style='margin-left: 30px;' title='前往编辑' href='"+link+"'><i class='icon-pencil7'></i></a></p>")
        })

    }else {
        //企业组

        shopAjax("post","signup/stepFinal/check",{userId:sessionStorage.userId},function (res) {
            console.log(res);
            $("a[href=#finish]").parent("li").show();
            $(".stepFinal").html("<p>资料填写完整，可以提交</p>").attr("disabled",false);
        },function (res) {
            var link = "#";
            if(res.data.jump == "uploadFile"){
                link = "setSourceTwo.html"
            }else if(res.data.jump == "member"){
                link = "setSourcefour.html"
            }else if(res.data.jump == "master"){
                link = "setSourceSix.html"
            }else if(res.data.jump == "baseInfo"){
                link = "setSourceThree.html"
            }else{
                link = "setSourceOne.html"
            }
            $("a[href=#finish]").parent("li").hide();
            $(".stepFinal").html("<p class='text-center text-danger'><span>"+res.data.msg+"</span><a style='margin-left: 30px;' title='前往编辑' href='"+link+"'><i class='icon-pencil7'></i></a></p>")
        })

    }

    //年份
    var now = new Date();
    var year = now.getFullYear();
    $(".year2015").html(year - 2);
    $(".year2016").html(year - 1);
    $(".year2017").html(year);
    $(".year2018").html(year + 1);
    $(".year2019").html(year + 2);
    $(".year2020").html(year + 3);

});
function saveReport(el) {
    // jquery 表单提交
    $(el).ajaxSubmit(function(message) {
        console.log(message);
        alert(message.data)
        // 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容
    });

    return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
}
// 时间格式化 yyyy-mm-dd
var FormatDate = function(strTime) {
    var date = new Date(strTime);
    var Month = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1);
    var day = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
    var hours = date.getHours() < 10 ? "0"+date.getHours() : date.getHours();
    var minute = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();
    var second = date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds();
    return date.getFullYear()+"-"+Month+"-"+day + "  " + hours + ":" + minute + ":" + second;
};
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
//AJAX公用函数
var shopAjax = function (type, url, data, callback,error) {
    if($.isFunction(data)){
        callback = data;
    }else if(data == undefined || data == null){
        data = '';
    }
    $.ajax({
        type:type,
        url: "http://119.23.12.96:8080/jc/"+url,
        data:data,
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
            console.log("error : ",res);
        }
    });
};
//邮箱正则验证
function isEmail(str){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}
//手机正则验证
function isPhone(str){
    var reg = /^1[34578]\d{9}$/;
    return reg.test(str);
}






