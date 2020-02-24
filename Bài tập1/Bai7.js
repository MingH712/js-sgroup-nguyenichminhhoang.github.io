function get7() {
    var Doan
    Doan = prompt("Bạn hãy nhập chuỗi: ","...")
    if (Doan.indexOf('java') > 0) {
        // document.getElementById("bai7").innerHTML = 'true';
        window.alert("true");
    } else {
        // document.getElementById('bai7').innerHTML = 'false';
        window.alert('false');
    }
}