const phoneNumber=document.getElementById("PhoneNumber");
const submitBtn=document.querySelector(".btn");
const form=document.querySelector("form");
const errorElement=document.querySelector(".error");
const instruct=document.querySelector(".instructions");
const otp=document.querySelector(".otp");
// const inputs=document.querySelectorAll(".otpV");
// console.log(inputs);
const digit1=document.getElementById("otpValue1");
const digit2=document.getElementById("otpValue2");
const digit3=document.getElementById("otpValue3");
const digit4=document.getElementById("otpValue4");

const input=[digit1,digit2,digit3,digit4];
console.log(input);


otp.style.display="none";
form.addEventListener('submit',function(e){
    // document.classList.remove('otp');
e.preventDefault();
validatePhoneNumber();


});

function validatePhoneNumber(){
    const value=phoneNumber.value;
    if(value=="" || value.length<10){
        errorElement.textContent="please enter valid phone number";
        
            // document.classList.add('otp');
            
        }
    if(value.length==10){
        instruct.textContent="enter one-time-password";
        // document.add('.otp');
        // otp.style.display.visible;
        // otp.classList.add("otpH");
otp.style.display="block";

        checkOtp();
         }

        //  if(value.length<10 || value==""){
        //     //  otp.classList.remove("otpH");
        //  }
    // if(value.length===10){
    //     errorElement.textContent="";
    // }
    
}
// || input[1].value==="5" || input[2].value==="8" || input[3].value==="2" 
function checkOtp(){
    input[0].focus();
for(let i=0;i<3;i++){
    input[i].addEventListener("keyup",function(){
        if(input[i].value.length<2 && input[0].value==="3" ){
            input[1].removeAttribute("disabled");
            input[1].focus();
            if(input[1].value==="5"){
                input[2].removeAttribute("disabled");
                input[2].focus();

                if(input[2].value==="8"){
                    input[3].removeAttribute("disabled");
                    input[3].focus();

                    
                }

            }

            if(input[i].value.length>1){
                input[i].value=" ";
            }

            // console.log("hii");
            // input[i+1].removeAttribute("disabled");
            // input[i+1].focus();
            

        }
        
    })
    if(input.value !==""){
        submitBtn.textContent="verify";  


    }
    // document.alert("verifed");
}

        
    
    
    
}





