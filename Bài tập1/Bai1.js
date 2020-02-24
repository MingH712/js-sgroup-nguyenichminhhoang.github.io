function get1() {
    var date = new Date();
    var data = 'Hôm nay là ngày ' + date.getDate() + ' tháng ' + date.getMonth() + ' năm ' + date.getFullYear() + '.'; 
    window.alert(data);
}