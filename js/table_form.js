function form_fill(){
    var table = document.getElementById("table_id");
    var rows = table.rows;
    for(var i=1; i < rows.length; i++){
        rows[i].cells[2].onclick = function(e){
        fname= e.target.previousElementSibling.previousElementSibling.textContent;
        lname= e.target.previousElementSibling.textContent;
        phnum= e.target.textContent;

      
        document.getElementById("table_id").addEventListener('click',function(){
            var f_name = document.getElementById("first_name");
            f_name.value = fname;
            var l_name = document.getElementById("last_name");
            l_name.value = lname;
            var ph_num = document.getElementById("phone_number");
            ph_num.value = phnum;
        });
        };
        
    }
    
}
function submit_func(){
  
    var fname = document.getElementById("first_name").value;
    var img1 = document.getElementById("submit_img1");
    var img2 = document.getElementById("submit_img2");
    var img3 = document.getElementById("submit_img3");
    if(fname == "Shreya"){
        img1.style.display = 'block';
        img2.style.display = 'none';
        img3.style.display = 'none';

    }
    else if(fname == "Sumedha"){
        img1.style.display = 'none';
        img2.style.display = 'block';
        img3.style.display = 'none';
    }
    else if(fname == "Tejas"){
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'block';

    }
    
}
