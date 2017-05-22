$('.page').hide(); // hide all pages

$(document).ready(function () {
    $('#page1').show();
})

var currentPage = 1;

function nextPage() {
    var pageHide = '#page' + currentPage;
    currentPage++;
    var pageShow = '#page' + currentPage;
    $(pageHide).hide();
    $(pageShow).show();
    addData('test', 'age 33', 'male');
}




var database = firebase.database();

function addData (MTurkID, age, gender){
    database.set({ID: MTurkID, Age: age, Gender:gender});
}




var select = '';
for (i=18;i<=100;i++) {
    select += '<option val=' + i + '>' + i + '</option>';
}
$('#18_100').html(select);

