$(document).ready(function(){
    // $(".cf3").hide();
    $("#ham_btn").click(function(){
        $(".cf2").hide(1000);
        $(".cf3").show(1000);
    });
    $("#back_btn").click(function(){
        $(".cf3").hide(1000);
        $(".cf2").show(1000);
    });
});
