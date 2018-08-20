var emailvalid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

function mainFunction(username,emailid,country,phonenumber){
    nameValidation(username);
    emailValidator(emailid);
    countryValidation(country);
    phoneNoValidation(phonenumber);
}
function nameValidation(username)
{ 
    if(username.value != "") 
        return true; 
    else{ 
        alert("Invalid Username"); 
        username.focus(); 
        return false; 
    } 
}
function emailValidator(emailid)
{ 
if(emailid.value.match(emailvalid)) 
   return true; 
else{ 
    alert("Invalid Email ID"); 
    emailid.focus(); 
    return false; 
    } 
}
function countryValidation(country)
{
    if(country.value != "") 
        return true; 
    else{ 
        alert("Invalid Country"); 
        country.focus(); 
        return false; 
    } 
}
function phoneNoValidation(phonenumber)
{ 
    if(isNaN(phonenumber.value) == false && phonenumber.length == 10) 
    { 
        alert("Invalid Phone Number"); 
        phonenumber.focus(); 
        return false;
    }
    else{ 
        return true;
        } 
}


