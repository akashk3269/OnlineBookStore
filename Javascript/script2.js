let fnameNode = document.getElementById("name1");
let emailNode = document.getElementById("email1");
let messageNode = document.getElementById("message1");
let errorNode1 = document.getElementById("error1");
let errorNode2 = document.getElementById("error2");
let errorNode3 = document.getElementById("error3");

let array=[errorNode1,errorNode2,errorNode3];
for(let node of array){
  node.style.color="yellow";
}

function validateForm() {
    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();
    return (v1 && v2 && v3);
}

function validate1(){
    let fname=fnameNode.value;
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode1.innerHTML="";
    if(fname===''){
        errorNode1.innerHTML="<small>Name is required</small>";
        console.log(errorNode1);
        fnameNode.style.border="2px solid yellow";
        return false;
    }
    else if(regex.test(fname)===false){
        errorNode1.innerHTML="<small>Name must have only letters</small>";
        fnameNode.style.border="2px solid yellow";
        return false;
    }
    else{
        fnameNode.style.border="2px solid green";
        return true;
    }
}

function validate2(){
    let email=emailNode.value;
    errorNode2.innerHTML="";
    if(email===''){
        errorNode2.innerHTML="<small>Email is required</small>";
        emailNode.style.border="2px solid yellow";
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode2.innerHTML="<small>Please enter valid email</small>";
        emailNode.style.border="2px solid yellow";
        return false;
    }
    else{
        emailNode.style.border="2px solid green";
        return true;
    }
}

function validate3(){
    let msg=messageNode.value;
    errorNode3.innerHTML="";
    if(msg===''){
        errorNode3.innerHTML="<small>Message is required</small>";
        messageNode.style.border="2px solid yellow";
        return false;
    }
    else{
        messageNode.style.border="2px solid green";
        return true;
    }
}

$(document).ready(function(){
    $('#name1').css({transitionDuration:'2s'});
     $('#name1').focus(function(){
        $(this).css({height:'60px', width:'400px', border:'5px solid blue', backgroundColor:'#ddd'});  
     });
     $('#email1').css({transitionDuration:'2s'});
     $('#email1').focus(function(){
        $(this).css({height:'60px', width:'400px', border:'5px solid blue', backgroundColor:'#ddd'});  
     });
     $('#message1').css({transitionDuration:'2s'});
     $('#message1').focus(function(){
        $(this).css({height:'160px', width:'400px', border:'5px solid blue', backgroundColor:'#ddd'});  
     });
})