function validateForm(){
    var error=false;
    var txtName=document.getElementById("f-name");
    if (txtName.value.length==0){
        var emptyName=document.getElementById("empty-name");
        emptyName.textContent="First Name cannot be empty";
        emptyName.style.display="block";
        txtName.placeholder="";
        txtName.className=txtName.className+" border-danger";
        txtName.className=txtName.className+" icon";
        error=true;
    }
    var txtLastName=document.getElementById("l-name");
    if (txtLastName.value.length==0){
        var emptyLastName=document.getElementById("empty-last-name");
        emptyLastName.textContent="Last Name cannot be empty";
        emptyLastName.style.display="block";
        txtLastName.placeholder="";
        txtLastName.className=txtLastName.className+" border-danger";
        txtLastName.className=txtLastName.className+" icon";
        error=true;
    }
    var txtPassword=document.getElementById("password");
    if (txtPassword.value.length==0){
        var emptyPassword=document.getElementById("empty-password");
        emptyPassword.textContent="Password cannot be empty";
        emptyPassword.style.display="block";
        txtPassword.placeholder="";
        txtPassword.className=txtPassword.className+" border-danger";
        txtPassword.className=txtPassword.className+" icon";
        error=true;
    }


    var txtEmail=document.getElementById("email");
    var atPosition=txtEmail.value.indexOf("@");  
    var dotPosition=txtEmail.value.lastIndexOf(".");  
    if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=txtEmail.value.length){  
        var emptyEmail=document.getElementById("empty-email");
        emptyEmail.textContent="Looks like this is not an email";
        if (txtEmail.value.length==0){
            txtEmail.placeholder="";
        }
        txtEmail.style.color="red";
        txtEmail.className=txtEmail.className+" border-danger";
        txtEmail.className=txtEmail.className+" icon";
        error=true;  
    }  
    return !error;
}
function changeName(){
    var txtName=document.getElementById("f-name");
    if (txtName.value.length!=0){
        txtName.classList.remove("border-danger");
        txtName.classList.remove("icon");
        var emptyName=document.getElementById("empty-name");
        emptyName.style.display="none";
    }
}

function changeLastName(){
    var txtLastName=document.getElementById("l-name");
    if (txtLastName.value.length!=0){
        txtLastName.classList.remove("border-danger");
        txtLastName.classList.remove("icon");
        var emptyLastName=document.getElementById("empty-last-name");
        emptyLastName.style.display="none";
    }
}

function changeEmail(){
    var txtEmail=document.getElementById("email");
    if (txtEmail.value.length!=0){
        txtEmail.classList.remove("border-danger");
        txtEmail.classList.remove("icon");
        txtEmail.style.color="black";
        var emptyEmail=document.getElementById("empty-email");
        emptyEmail.style.display="none";
    }
}

function changePassword(){
    var txtPassword=document.getElementById("password");
    if (txtPassword.value.length!=0){
        txtPassword.classList.remove("border-danger");
        txtPassword.classList.remove("icon");
        var emptyPassword=document.getElementById("empty-password");
        emptyPassword.style.display="none";
    }
}