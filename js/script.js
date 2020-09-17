$(document).ready(function(){
    $('#collapseOneButton').on('click', function(){
        $('#collapseOne').collapse('show');
        $('#collapseTwo').collapse('hide');
    });
    $('#collapseTwoButton').on('click', function(){
        $('#collapseOne').collapse('hide');
        $('#collapseTwo').collapse('show');
    });
    $('#lgpdCookie0').on('click', function(){
        Cookies.set('lgpd', 1, { expires: 1, sameSite: 'strict' });
    });
    $('#lgpdCookie1').on('click', function(){
        Cookies.set('lgpd', 1, { expires: 1, sameSite: 'strict' });
    });
    var getLgpd = Cookies.get('lgpd');
    if (getLgpd != 1) {
        $('#bottom_modal').modal('show');
    } else {
        $('#bottom_modal').modal('hide');
    }
});