$(document).ready(function () {
    $('.page').hide();
    $('#page1').show();
})



var currentPage = 1;

function nextPage() {
    var pageHide = '#page' + currentPage;
    currentPage++;
    var pageShow = '#page' + currentPage;
    $(pageHide).hide();
    $(pageShow).show();
    console.log(currentPage, pageShow)
}




var select = '';
for (i=18;i<=100;i++) {
    select += '<option val=' + i + '>' + i + '</option>';
}
$('#18_100').html(select);

