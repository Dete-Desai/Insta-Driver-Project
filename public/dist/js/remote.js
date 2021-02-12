

$(document).ready(function () {
    $(".errorMsg,.successMsg,.warningMsg").fadeOut(15000);
    $(".error_msg,.success_msg").fadeOut(10000);
});


function back()
{
    window.history.go(-1);
}

function pushurl(uri){
    var url = SITEROOT+"/"+uri;
    var stateObject = {};
    var title = "";
    history.pushState(stateObject,title,url);
}


function hideModal(){
    $('.modal').remove();
    $('.modal-backdrop').remove();
    $('body').removeClass( "modal-open" );
    $('#popupdiv').html('');
}


function showloader()
{
    $('#fade').fadeIn();
    $('#loader').fadeIn();
}
function hideloader()
{
    $('#fade').fadeOut();
    $('#loader').fadeOut();
}


$(function () {
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-pills a[href="#' + url.split('#')[1] + '"]').tab('show');
    }
    $('.nav-pills a').on('shown.bs.tab', function (e) {
      //  window.location.hash = e.target.hash;
       // $(window).scrollTop(0);
    })
});

$(function () {
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    }
    $('.nav-tabs a').on('shown.bs.tab', function (e) {
       // window.location.hash = e.target.hash;
      //  $(window).scrollTop(0);
    })
});


function toast_success(text)
{
        $.toast({
            heading: 'Success',
            text: text,
            icon: 'success',
            position: 'top-right',
            stack: false
        })
}

function toast_error(text)
{
        $.toast({
            heading: 'Error',
            text: text,
            icon: 'error',
            position: 'top-right',
            stack: false
        })
}

function toast_info(text)
{
        $.toast({
            heading: 'Information',
            text: text,
            icon: 'info',
            position: 'top-right',
            stack: false
        })
}

function toast_warning(text)
{
        $.toast({
            heading: 'Warning',
            text: text,
            icon: 'warning',
            position: 'top-right',
            stack: false
        })
}