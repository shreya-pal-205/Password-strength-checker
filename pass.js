let p = document.querySelector(".password");
let msg = document.querySelector(".message");

p.addEventListener("input",()=>{
    if(p.value.length > 0){
        msg.style.display = "block";
    }else{
        msg.style.display = "none";
    }

    if(p.value.length <=4){
        msg.innerHTML = "Password is weak";
        msg.style.color = "red";
    }else if(p.value.length > 4 && p.value.length <= 8){
        msg.innerHTML = "Password is moderate";
        msg.style.color = "yellow";
    }else{
        msg.innerHTML = "Password is strong";
        msg.style.color = "green";
    }


})







