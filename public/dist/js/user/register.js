$(document).ready(function(){
	
    jQuery.validator.addMethod("validPassword", function(value, element) {
        return this.optional(element) || /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/.test(value);
    }, "Password must be a minimum of 6 characters long containing at least one letter, one number and one special character");

	
        jQuery("#frmRegister").validate({
		errorElement:'div',
		ignore: ":hidden",
		rules: {
			name: {
				required: true,
				maxlength: 50
			},
			contact_no: {
				required: true,
                                number:true,
                                maxlength:10
			},
			email: {
				required: true,
				email: true,
                                remote:{ url:SITEROOT + "/checkDuplicateEmail"}
			},
			password:{
				required: true,
                                validPassword:true,
				minlength:6,
				maxlength:15
			},
                        password_confirmation:{
				required: true,
                                equalTo:'#password',
                                minlength:6,
				maxlength:15
			},
                        terms: {
				required: true
			}
		},
		messages: 
		{
			name: {
                                required: "",
                                maxlength:  $.validator.format("Please enter no more than {0} characters")
			},
			contact_no: {
                                required: "",
                                maxlength:  $.validator.format("Please enter no more than {0} digits")
			},
			email: {
				required: "",
				remote: 'The email address you entered is already in use'
			},
			password:{
				required: "",
				minlength:  $.validator.format("Please enter at least {0} characters"),
				maxlength:  $.validator.format("Please enter no more than {0} characters")
			},
                        password_confirmation:{
				required: "",
				minlength:  $.validator.format("Please enter at least {0} characters"),
				maxlength:  $.validator.format("Please enter no more than {0} characters"),
                                equalTo: "Password and confirm password does not match"
			},
                        terms: {
				required:  "Please accept terms and condition"
			}
		}
	});
});



