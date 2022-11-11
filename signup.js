let signup_arr=JSON.parse(localStorage.getItem("signup_data"))

document.querySelector("button").addEventListener("click",function(){
    let name=document.querySelector("#name").value;
    let mail=document.querySelector("#gmail").value;
    let mobile=document.querySelector("#mobile").value;
    let pswd=document.querySelector("#pswd").value;

    let obj={
        name,
        mail,
        mobile,
        pswd
    };
signup_arr.push(obj)
})