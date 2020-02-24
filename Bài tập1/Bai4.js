
// function get4(str) {

//     var result = prompt( 'Hãy nhập chuỗi: ')
//     for (let i = 0; i < str.length; i++) {
//         result += String.fromCharCode(str[i].charCodeAt() + 1);
//     }
//     // return result;
//     window.alert("result");
// };



// common('input4', 'output4', function(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         result += String.fromCharCode(str[i].charCodeAt() + 1);
//     }
//     return result;
// });



function get4() {
    var str = prompt('Hãy nhập chuỗi:');
    for (i = 0; i < str.length; i++) {
        str += String.fromCharCode(str[i].charCodeAt() + 1);
    }
    window.alert('str');
    
}