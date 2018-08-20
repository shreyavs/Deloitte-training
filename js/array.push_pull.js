function submit2(){
    var array1 =[];
    array1.push(document.getElementById('firstname').value);
    array1.push(document.getElementById('lastname').value);
    array1.push(document.getElementById('phonenumber').value);
    array1.push(document.getElementById('email').value);
    // array1.toString();
    document.getElementById('mail').innerHTML = array1.pop();
    document.getElementById('phnum').innerHTML = array1.pop();
    document.getElementById('lname').innerHTML = array1.pop();
    document.getElementById('fname').innerHTML = array1.pop();
}