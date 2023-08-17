document.getElementById("btn").addEventListener("click",function(){
    const addemail = document.getElementById("email-text");
    const inputemailfield = addemail.value;
    
    //dap 2 
        const addpassword= document.getElementById("password-text");
        const inputpasswordfield = addpassword.value;
    //dap3
    if(inputemailfield==="joba@gmail.com" && inputpasswordfield=== "jobarjamai"){
        window.location.href = "bank.html"; 
    }
    else{
        alert("wrong password");
    }
   


})