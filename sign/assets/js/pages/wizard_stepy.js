/* ------------------------------------------------------------------------------
*
*  # Stepy wizard
*
*  Specific JS code additions for wizard_stepy.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Override defaults
    $.fn.stepy.defaults.legend = false;
    $.fn.stepy.defaults.transition = 'fade';
    $.fn.stepy.defaults.duration = 150;
    $.fn.stepy.defaults.backLabel = '<i class="icon-arrow-left13 position-left"></i> 上一步';
    $.fn.stepy.defaults.nextLabel = '下一步 <i class="icon-arrow-right14 position-right"></i>';



    // Wizard examples
    // ------------------------------

    // Basic wizard setup
    $(".stepy-basic").stepy();


    // Hide step description
    $(".stepy-no-description").stepy({
        description: false
    });


    // Clickable titles
    $(".stepy-clickable").stepy({
        titleClick: true
    });


    // Stepy callbacks
    $(".stepy-callbacks").stepy({
        next: function(index) {
            if(index == 6){
                // 检查报名流程完整性
                // (function () {
                    shopAjax("post","signup/stepFinal/check",{userId:sessionStorage.userId},function (res) {
                        console.log(res);
                        $(".stepFinal").html("<p>资料填写完整，可以提交</p>").attr("disabled",false);
                    },function (res) {
                        console.log(res);
                        var link = "#";
                        if(res.data.jump == "uploadFile"){
                            link = "setSourceTwo.html"
                        }else if(res.data.jump == "member"){
                            link = "setSourceFive.html"
                        }else if(res.data.jump == "master"){
                            link = "setSourceFour.html"
                        }else if(res.data.jump == "baseInfo"){
                            link = "setSourceThree.html"
                        }else{
                            link = "setSourceOne.html"
                        }
                        $(".stepFinal").html("<p class='text-center text-danger'><span>"+res.data.msg+"</span><a style='margin-left: 30px;' title='前往编辑' href='"+link+"'><i class='icon-pencil7'></i></a></p>")
                    })
                // })();
            }
        },
        back: function(index) {
            alert('Returning to step: ' + index);
        },
        finish: function() {
            shopAjax("post","signup/stepFinal/submit",{userId:sessionStorage.userId},function (res) {
                console.log(res)
                alert(res.data)
            },function (res) {
                console.log(res)
            })
        }
    });


    //
    // Validation
    //

    // Initialize wizard
    $(".stepy-validation").stepy({
        validate: true,
        block: true,
        next: function(index) {
            if (!$(".stepy-validation").validate(validate)) {
                return false
            }
        }
    });


    // Initialize validation
    var validate = {
        ignore: 'input[type=hidden], .select2-input',
        errorClass: 'validation-error-label',
        successClass: 'validation-valid-label',
        highlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        },
        errorPlacement: function(error, element) {
            if (element.parents('div').hasClass("checker") || element.parents('div').hasClass("choice") || element.parent().hasClass('bootstrap-switch-container') ) {
                if(element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                    error.appendTo( element.parent().parent().parent().parent() );
                }
                 else {
                    error.appendTo( element.parent().parent().parent().parent().parent() );
                }
            }
            else if (element.parents('div').hasClass('checkbox') || element.parents('div').hasClass('radio')) {
                error.appendTo( element.parent().parent().parent() );
            }
            else if (element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                error.appendTo( element.parent().parent() );
            }
            else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
                error.appendTo( element.parent().parent() );
            }
            else {
                error.insertAfter(element);
            }
        },
        rules: {
            email: {
                email: true
            }
        }
    }



    // Initialize plugins
    // ------------------------------

    // Apply "Back" and "Next" button styling
    $('.stepy-step').find('.button-next').addClass('btn btn-primary');
    $('.stepy-step').find('.button-back').addClass('btn btn-default');


    // Select2 selects
    $('.select').select2();


    // Simple select without search
    $('.select-simple').select2({
        minimumResultsForSearch: '-1'
    });


    // Styled checkboxes and radios
    $('.styled').uniform({
        radioClass: 'choice'
    });


    // Styled file input
    $('.file-styled').uniform({
        wrapperClass: 'bg-warning',
        fileButtonHtml: '<i class="icon-googleplus5"></i>'
    });
    
});
