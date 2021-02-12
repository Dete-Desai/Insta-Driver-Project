jQuery(document).ready(function() {

    jQuery("#frmLogin").validate({
        errorElement: 'div',
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: {
                required: ""
            },
            password: {
                required: "",
                minlength: $.validator.format("Enter at least {0} characters"),
                maxlength: $.validator.format("Enter at most {0} characters")
            }
        }
    });
});


   