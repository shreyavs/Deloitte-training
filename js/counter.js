var num = 0;
var increment = 0;
var decrement = 0;
function incr(){
    
    num = num + 1;
    document.getElementById("num_display").value = num;
   
    increment = increment + 1;
    document.getElementById("inc_display").value = increment;
}
function decr(){
    
    num = num - 1;
    document.getElementById("num_display").value = num;
    
    decrement = decrement + 1;
    document.getElementById("dec_display").value = decrement;
}
