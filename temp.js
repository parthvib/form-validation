const phoneNumber=document.getElementById("PhoneNumber");
const submitBtn=document.querySelector(".btn");
const form=document.querySelector("form");
const errorElement=document.querySelector(".error");
const instruct=document.querySelector(".instructions");
const otp=document.querySelector(".otp");
const inputs=document.querySelectorAll(".otpV");
// console.log(inputs);
const digit1=document.getElementById("otpValue1");
const digit2=document.getElementById("otpValue2");
const digit3=document.getElementById("otpValue3");
const digit4=document.getElementById("otpValue4");

const input=[digit1,digit2,digit3,digit4];

// function otp(){

for(let i=0;i<3;i++){
    input[i].addEventListener("keyup",function(){
        if(input[i].value.length<2 && input[i].value==="3" ||input[i].value==="5"||input[i].value==="6"||input[i].value==="8" ){
            if(input[i].value.length>1){
                input[i].value=" ";
            }
            console.log("hii");
            input[i+1].removeAttribute("disabled");
            input[i+1].focus();

        }
        
    })
    submitBtn.textContent="verify";  
    
}
// }

// input.forEach(function(inputs,index){
//     inputs.addEventListener("keyup",function(){
//         let nextElement=inputs.nextElementSibling;
//         console.log(index);
//         if(index===0 && inputs.value==="3"){
//             console.log("heelo");
//             nextElement.focus();
           
                
                
            


            
//         }

//     })
// })
    
    



// for(let i=0;i<4;i++){
//     input[i].addEventListener("keyup",function(){

//         if(input[i].value==="3"){
//             input[i+1].focus();
//             console.log(input[i].value);
//             if(input[i+1].value==="5"){
//                 input[i+1+1].focus();
//                 if(input[i+2].value==="6"){
//                     input[i+3].focus();
//                     if(input[i+3].value!==""){
//                         submitBtn.text="verify";
//                     }
//                 }
//             }
//         }

        
//     });
// }