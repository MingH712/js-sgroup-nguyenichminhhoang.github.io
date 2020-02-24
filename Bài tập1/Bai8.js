function get8() {
    var Thang
    Thang = prompt("Bạn hãy nhập số tháng ", 1);
    if (Thang <= 12) {
        document.getElementById('bai8').innerHTML = "Tháng " +Thang;
    } else {
        document.getElementById('bai8').innerHTML = "Không có tháng như này nha !! ";
    }
}
