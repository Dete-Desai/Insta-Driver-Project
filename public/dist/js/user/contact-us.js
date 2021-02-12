$(document).ready(function(){

	$.validator.addMethod("letterspaceonly", function(value, element) {
	return this.optional(element) || /^([a-z]+([\s][a-z]+)?)+$/i.test(value);
	}, "Letters and Single space only");

	$.validator.addMethod("number1", function(value, element) {
	var temp;
	temp = true;
	str = /[^0-9]/;
	temp = !str.test(value);
	return temp;
	}, "Only 0 to 9 is allowed.");

	jQuery("#frmContact").validate({
		errorElement:'div',
		ignore: ":hidden",
		rules: {
			
			name: {
				required: true,
				maxlength: 100
			},
                        mobile: {
				required: true,
                                number1:true,
                                minlength:10,
				maxlength: 15
			},
                        email: {
				required: true,
				email: true
			},
                        msg:{
                                required: true
			}
		},
		messages: 
		{
			name: {
                                required: "",
                                maxlength:  $.validator.format("Enter at most {0} characters")
			},
                        mobile:{
				required: "",
				minlength:  $.validator.format("Enter at least {0} characters"),
				maxlength:  $.validator.format("Enter at most {0} characters")
			},
                        email: {
				required: ""
			},
                        msg: {
				required: ""
			}
		}
	});
      
});

