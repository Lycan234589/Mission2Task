let myheading=document.getElementById("MyNewHeading")
myheading.style.fontSize="25px";
myheading.style.textAlign="center";
myheading.style.color="red";

let myform=document.getElementById("MyForm")
myform.style.textAlign="center";

let mainbox=document.getElementById("MyContactBox")
mainbox.style.height="270px";
mainbox.style.width="30%";
mainbox.style.backgroundColor="red";
mainbox.style.margin="auto";


document.getElementById("MyForm").addEventListener("submit",MyFormFilled);
function MyFormFilled(e){
    
    let fname=document.getElementById("FirstName").value
    let Lname=document.getElementById("LastName").value
    let email=document.getElementById("Email").value
    let phone=document.getElementById("Phone").value
    if (fname==''){
        alert("please enter your firstname")
    }
    else if(Lname==''){
        alert("please enter your lastname")
    }
    else if(email==''){
        alert("please enter your email");
    }
    else if(phone==''){
        alert("please enter your phone number");
    }
    else{
        alert("The form has been filled in");
        let div=document.getElementById("newbox")
        div.textContent=`FirstName:${fname}
        lastname:${Lname}
        email:${email}
        phonenumber:${phone}`
        div.style.backgroundColor="red";
        div.style.fontSize="55px";
        div.style.textAlign="centre";
        div.style.height="400px";
        div.style.width="700px";
        div.style.marginLeft="30%";
        div.style.marginTop="5%";
        div.style.padding="20px";


    }
    e.preventDefault();
    //alert("Your Form has been successful sent")
}

