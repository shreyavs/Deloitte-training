function funcPara(){
    
    var a= document.getElementsByTagName("p")[0].getAttribute("class");
    var b= document.getElementsByTagName("p")[0].getAttribute("id");
    var c= document.getElementsByTagName("p")[0].getAttribute("alt");
    
    //document.write(a);
    var table=document.getElementById("table_id");

    var tr=table.insertRow(0);
    var td1=tr.insertCell(0);
    var td2=tr.insertCell(1);
    var td3=tr.insertCell(2);
    

    td1.innerHTML=a;
    td2.innerHTML=b;
    td3.innerHTML=c;
    
}