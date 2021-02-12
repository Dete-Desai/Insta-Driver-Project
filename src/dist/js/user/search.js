$(document).ready(function() {
    jQuery("#frmSearch1").validate({
        ignore: ":hidden",
        rules: {
            min: {
                number: true
            },
            max: {
                number: true
            },
            dlp: {
                number: true
            },
            dexp: {
                number: true
            }
        },
        messages: {
            min: {
                    number: 'Enter valid number'
            },
            max: {
                    number: 'Enter valid number'
            },
            dlp: {
                    number: 'Enter valid number'
            },
            dexp: {
                    number: 'Enter valid number'
            }
        }
    });
    
    jQuery("#frmSearchId").validate({
        errorElement:'div',
        ignore: ":hidden",
        rules: {
                search_id: {
                    required: true,
                    remote:{ url:SITEROOT + "/home/check_search_id"}
                }
        },
        messages: 
        {
            search_id: {
                required: "",
                remote: 'The search no you entered is invalid'
            }
        }
    });
});


function search_driver() 
{
    if ($('#frmSearch1').valid()) 
    {
        $("#cid1").val($.trim($("#cid").val()));
        $("#sty1").val($.trim($("#sty").val()));
        $("#loc1").val($.trim($("#loc").val()));
        document.frmSearch1.submit();
    }
}


function initialize() {
    var input = document.getElementById('loc');
    var autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']});
     google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        $("#loc").val(place.formatted_address);
        get_search_message($("#cid").val(), $("#sty").val(), place.formatted_address, 1) 
    });
}
google.maps.event.addDomListener(window, 'load', initialize); 


function get_search_message(category_id, s_type, location, flag) {
    if(category_id > 0 && s_type!=='') {
         
        $.get(SITEROOT+"home/get_search_message", {category_id: category_id,s_type:s_type,location:location}, function (data) {
           if ($.trim(data)) {
               if(flag === 1 && s_type!==''){
                   $('#sr_msg_nolist').html(data.html).addClass('alert alert-dark sr_msg_nolist');
               } else if(flag === 2 && s_type!==''){
                   $('#sr_msg_list').html(data.html).addClass('alert alert-dark sr_msg_list');
               }
               $("#verified_cnt").val(data.verified_cnt);
           }
       });
    } else {
         $('#sr_msg_nolist').html('').removeClass('alert alert-dark sr_msg_nolist');
    }
}

function go_search(s_type) {
    var  verified_cnt = $("#verified_cnt").val();
    if(verified_cnt > 0) {
        if(s_type === 'all') {
            save_search_log('frmSearch');
            document.frmSearch.submit();
            document.frmSearch.reset();
        } else if(s_type === 'Y') {
            save_search_log('frmSearch');
            $("#PremiumSearchModal").modal('show');
        }
        
    }
}

function search_driver_home() 
{
    if ($('#frmSearch1').valid()) 
    {
        var  verified_cnt = $("#verified_cnt").val();
        if(verified_cnt > 0) {
            $("#cid1").val($.trim($("#cid").val()));
            $("#sty1").val($.trim($("#sty").val()));
            $("#loc1").val($.trim($("#loc").val()));
            var s_type = $.trim($("#sty").val());
            if(s_type === 'all') {
                save_search_log('frmSearch1')
                document.frmSearch1.submit();
            } else if(s_type === 'Y') {
                save_search_log('frmSearch1');
                $("#filterModal").modal('hide');
                $("#PremiumSearchModal").modal('show');
            }
        }
    }
}


function save_search_log(form)
{
    $.ajax({
        type: "post",
        url: SITEROOT+"home/save_search_log",
        data: $("#"+form).serialize(),
        cache: false,
        success: function (data)
        {
            
        },
        error: function (data){
            
        }
    });
}


function search_with_id() 
{
    if ($('#frmSearchId').valid()) 
    {
       $.ajax({
                type: "post",
                url: "/home/get_search_id",
                data: $("#frmSearchId").serialize(),
                cache: false,
                success: function (data)
                {
                    if ($.trim(data.success) == 'error') {
                        
                    } else {
                         window.location = data.data.search_url;
                    }
                },
                error: function (data){
                     
                }
            });
    }
}


function get_search_message_1(category_id, s_type, location, flag) {
    if(category_id > 0 && s_type!=='') {
         
        $.get(SITEROOT+"home/get_search_message", {category_id: category_id,s_type:s_type,location:location}, function (data) {
           if ($.trim(data)) {
               if(flag === 1 && s_type!==''){
                   $('#sr_msg_nolist').html(data.html).addClass('');
               } else if(flag === 2 && s_type!==''){
                   $('#sr_msg_list').html(data.html).addClass('');
               }
               $("#verified_cnt").val(data.verified_cnt);
           }
       });
    } else {
         $('#sr_msg_nolist').html('').removeClass('');
         
    }
}

function show_premium_search(value,valid_token){
    if(value =='Y' && valid_token == false) 
    {
        var category_id = $('#cid').val(),s_type = $('#sty').val(),location = $('#loc').val();
        if(category_id > 0) {
            $("#filterModal").modal('hide');
            $("#PremiumSearchModal").modal('show');
            get_search_message_1(category_id, s_type, location, 1);
        }
        else {
            toast_info('Please select category for verified search.');
        }
    }
}
function show_premium_search_1(valid_token){
    if(valid_token === false || valid_token==='') 
    {
        var category_id = $('#cid').val(),s_type = $('#sty').val(),location = $('#loc').val();
        if(category_id > 0 && s_type === 'Y') {
            $("#filterModal").modal('hide');
            $("#PremiumSearchModal").modal('show');
            get_search_message_1(category_id, s_type, location, 1);
        }
        else  {
         
            document.frmSearch.submit();
        }
    }
}