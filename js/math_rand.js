function myFunction() {
    var num;
    var x= Math.random();
    x = x*100;
    num=parseInt(x);
    document.getElementById("num_display").innerHTML = num;
    if(num%2 == 0){
        document.getElementById("demo").innerHTML = "Good Morning";
    }
    else{
        document.getElementById("demo").innerHTML = "Good Night";
    }

}