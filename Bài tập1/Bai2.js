function get2a() {
    var date = new Date();
    var data = 'mm-dd-yyyy: ' + date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear();
    document.getElementById('bai2a').innerHTML = data;
}
function get2b() {
    var date = new Date();
    var data = 'mm/dd/yyyy: ' + date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
    document.getElementById('bai2b').innerHTML = data;
}
function get2c() {
    var date = new Date();
    var data = 'dd-mm-yyyy: ' + date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    document.getElementById('bai2c').innerHTML = data;
}
function get2d() {
    var date = new Date();
    var data = 'mm/dd/yyyy: ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    document.getElementById('bai2d').innerHTML = data;
}