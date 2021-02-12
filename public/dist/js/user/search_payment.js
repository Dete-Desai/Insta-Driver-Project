$(document).ready(function () {
    jQuery("#frmMpesa").validate({
        errorElement: 'div',
        ignore: ":hidden",
        rules: {
            mobile_no: {
                required: true,
                number: true,
                maxlength: 15
            },
            payer_email: {
                required: true,
                email: true
            }
        },
        messages:
                {
                    mobile_no: {
                        required: "",
                        maxlength: $.validator.format("Please enter no more than {0} digits")
                    },
                    payer_email: {
                        required: "",
                    }
                },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
        submitHandler: function (form) {
            $('#btnM1').attr('disabled', 'disabled');
            form.submit();
        }
    });

    jQuery("#frmMpesa_1").validate({
        errorElement: 'div',
        ignore: ":hidden",
        rules: {
            mobile_no_1: {
                required: true,
                number: true,
                maxlength: 15
            },
            payer_email_1: {
                required: true,
                email: true
            },
            short_code: {
                required: true,
                number: true,
                maxlength: 6
            },
            amount_to_pay: {
                required: true,
                number: true,
                maxlength: 6
            }
        },
        messages:
                {
                    mobile_no_1: {
                        required: "",
                        maxlength: $.validator.format("Please enter no more than {0} digits")
                    },
                    payer_email_1: {
                        required: "",
                    },
                    short_code: {
                        required: "",
                        maxlength: $.validator.format("Please enter no more than {0} digits")
                    },
                    amount_to_pay: {
                        required: "",
                        maxlength: $.validator.format("Please enter no more than {0} digits")
                    }
                },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
        submitHandler: function (form) {
            $('#btnM2').attr('disabled', 'disabled');
            form.submit();
        }
    });
});



function check_payment()
{
    if ($('#frmMpesa').valid()) // check if form is valid
    {
        showloader();
        // Ajax Post 
        $.ajax({
            type: "post",
            url: "/payment/check_payment",
            data: $("#frmMpesa").serialize(),
            cache: false,
            success: function (data)
            {
                if ($.trim(data.status) == 'error') {
                    $("#errorDiv").html(data.message).addClass('errorMsg').show();
                    setTimeout(function () {
                        $("#errorDiv").fadeOut("slow", function () {
                            window.location = data.redirect;
                            hideloader();
                        });
                    }, 30000);
                } else {
                    $("#btnM1").attr('disabled', 'disabled');
                    $("#errorDiv").html(data.message).removeClass('errorMsg').addClass('successMsg').show();
                    setInterval("check_cross_payment();", 20000);
                }
            },
            error: function (data) {
                $("#errorDiv").html('Something went wrong').addClass('errorMsg').show().fadeOut(5000);
                hideloader();
            }
        });
    }
    return false;
}

function check_cross_payment()
{
    // Ajax Post 
    $.ajax({
        type: "post",
        url: "/payment/check_payment",
        data: $("#frmMpesa").serialize(),
        cache: false,
        success: function (data)
        {
            if ($.trim(data.status) == 'success') {
                $("#btnM1").attr('disabled', 'disabled');
                $("#errorDiv").html(data.message).removeClass('errorMsg').addClass('successMsg').show();
                setTimeout(function () {
                    $("#errorDiv").fadeOut("slow", function () {
                        window.location = data.redirect;
                        hideloader();
                    });
                }, 5000);
            }
            else if ($.trim(data.status) == 'error') {
                    $("#errorDiv").html(data.message).removeClass('successMsg').addClass('errorMsg').show();
                    setTimeout(function () {
                        $("#errorDiv").fadeOut("slow", function () {
                            window.location = data.redirect;
                            hideloader();
                        });
                    }, 30000);
            } 
            else {
                $("#errorDiv").html(data.message).removeClass('errorMsg').addClass('successMsg').show();
            }
        },
        error: function (data) {
            $("#errorDiv").html('Something went wrong').addClass('errorMsg').show().fadeOut(5000);
            hideloader();
        }
    });

}


$(function () {
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-pills a[href="#' + url.split('#')[1] + '"]').tab('show');
    }
    $('.nav-pills a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
        $(window).scrollTop(0);
    })
});


/***************************/

function mpesa_stkpush_processrequest()
{
    if ($('#frmMpesa').valid()) // check if form is valid
    {
        showloader();
        // Ajax Post 
        $.ajax({
            type: "post",
            url: "/payment/mpesa_stkpush_processrequest",
            data: $("#frmMpesa").serialize(),
            cache: false,
            success: function (data)
            {
                if ($.trim(data.status) == 'error') {
                    $("#errorDiv").html(data.message).addClass('errorMsg').show().fadeOut(5000);
                    hideloader();
                } else {
                    $("#lipana-mpesa-tab").trigger('click');
                    $("#btnM1").attr('disabled', 'disabled');
                    $("#errorDiv").html(data.message).removeClass('errorMsg').addClass('successMsg').show();
                    setInterval("check_cross_payment();", 20000);
                }
            },
            error: function (data) {
                $("#errorDiv").html('Something went wrong').addClass('errorMsg').show().fadeOut(5000);
                hideloader();
            }
        });
    }
    return false;
}
