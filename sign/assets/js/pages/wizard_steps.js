/* ------------------------------------------------------------------------------
*
*  # Steps wizard
*
*  Specific JS code additions for wizard_steps.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Wizard examples
    // ------------------------------

    // Basic wizard setup
    $(".steps-basic").steps({
        headerTag: "h6",
        bodyTag: ".formWrap",
        transitionEffect: "fade",
        startIndex: 1,
        titleTemplate: '<span class="number">#index#</span> #title#',
        labels: {
            finish: '提交'
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            console.log("currentIndex",currentIndex)
            console.log("priorIndex",priorIndex)
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
                    console.log(res);
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
        },
        onFinished: function (event, currentIndex) {
            finish();
        }
    });
    $(".steps-basic-2").steps({
        headerTag: "h6",
        bodyTag: ".formWrap",
        transitionEffect: "fade",
        startIndex: 2,
        titleTemplate: '<span class="number">#index#</span> #title#',
        labels: {
            finish: '提交'
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            console.log("currentIndex",currentIndex)
            console.log("priorIndex",priorIndex)
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
                    console.log(res);
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
        },
        onFinished: function (event, currentIndex) {
            finish();
        }
    });
    $(".steps-basic-3").steps({
        headerTag: "h6",
        bodyTag: ".formWrap",
        transitionEffect: "fade",
        startIndex: 3,
        titleTemplate: '<span class="number">#index#</span> #title#',
        labels: {
            finish: '提交'
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            console.log("currentIndex",currentIndex)
            console.log("priorIndex",priorIndex)
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
                    console.log(res);
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
        },
        onFinished: function (event, currentIndex) {
            finish();
        }
    });
    $(".steps-basic-4").steps({
        headerTag: "h6",
        bodyTag: ".formWrap",
        transitionEffect: "fade",
        startIndex: 4,
        titleTemplate: '<span class="number">#index#</span> #title#',
        labels: {
            finish: '提交'
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            console.log("currentIndex",currentIndex)
            console.log("priorIndex",priorIndex)
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
                    console.log(res);
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
        },
        onFinished: function (event, currentIndex) {
            finish();
        }
    });
    $(".steps-basic-5").steps({
        headerTag: "h6",
        bodyTag: ".formWrap",
        transitionEffect: "fade",
        startIndex: 5,
        titleTemplate: '<span class="number">#index#</span> #title#',
        labels: {
            finish: '提交'
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            console.log("currentIndex",currentIndex)
            console.log("priorIndex",priorIndex)
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
                    console.log(res);
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
        },
        onFinished: function (event, currentIndex) {
            finish();
        }
    });
    // Async content loading
    $(".steps-async").steps({
        headerTag: "h6",
        bodyTag: ".formWrap",
        transitionEffect: "fade",
        titleTemplate: '<span class="number">#index#</span> #title#',
        labels: {
            finish: '提交'
        },
        onContentLoaded: function (event, currentIndex) {
            $(this).find('select.select').select2();

            $(this).find('select.select-simple').select2({
                minimumResultsForSearch: '-1'
            });

            $(this).find('.styled').uniform({
                radioClass: 'choice'
            });

            $(this).find('.file-styled').uniform({
                wrapperClass: 'bg-warning',
                fileButtonHtml: '<i class="icon-googleplus5"></i>'
            });
        },
        onFinished: function (event, currentIndex) {
            finish();
        }
    });


    // Saving wizard state
    $(".steps-state-saving").steps({
        headerTag: "h6",
        bodyTag: ".formWrap",
        saveState: true,
        titleTemplate: '<span class="number">#index#</span> #title#',
        autoFocus: true,
        onFinished: function (event, currentIndex) {
            finish();
        }
    });


    // Specify custom starting step
    $(".steps-starting-step").steps({
        headerTag: "h6",
        bodyTag: ".formWrap",
        startIndex: 2,
        titleTemplate: '<span class="number">#index#</span> #title#',
        autoFocus: true,
        onFinished: function (event, currentIndex) {
            finish();
        }
    });

    function finish() {
        shopAjax("post","signup/stepFinal/submit",{userId:sessionStorage.userId},function (res) {
            console.log(res);
            alert(res.data)
        },function (res) {
            console.log(res)
        })
    }

    //
    // Wizard with validation
    //

    // Show form
    var form = $(".steps-validation").show();


    // Initialize wizard
    $(".steps-validation").steps({
        headerTag: "h6",
        bodyTag: "formWrap",
        transitionEffect: "fade",
        titleTemplate: '<span class="number">#index#</span> #title#',
        autoFocus: true,
        onStepChanging: function (event, currentIndex, newIndex) {
            console.log("currentIndex",currentIndex)
            console.log("priorIndex",newIndex)
            // Allways allow previous action even if the current form is not valid!
            if (currentIndex > newIndex) {
                return true;
            }

            // Forbid next action on "Warning" step if the user is to young
            if (newIndex === 3 && Number($("#age-2").val()) < 18) {
                return false;
            }

            // Needed in some cases if the user went back (clean up)
            if (currentIndex < newIndex) {

                // To remove error styles
                form.find(".body:eq(" + newIndex + ") label.error").remove();
                form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
            }

            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },

        onStepChanged: function (event, currentIndex, priorIndex) {
            console.log("currentIndex",currentIndex)
            console.log("priorIndex",priorIndex)
            // Used to skip the "Warning" step if the user is old enough.
            if (currentIndex === 2 && Number($("#age-2").val()) >= 18) {
                form.steps("next");
            }

            // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
            if (currentIndex === 2 && priorIndex === 3) {
                form.steps("previous");
            }
        },

        onFinishing: function (event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },

        onFinished: function (event, currentIndex) {
            alert("Submitted!");
        }
    });


    // Initialize validation
    $(".steps-validation").validate({
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
    });



    // Initialize plugins
    // ------------------------------

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
