let btn = document.querySelector("#btn");
let alert = document.querySelector(".alert");
let closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", function(){
    alert.classList.remove("none");
    alert.classList.remove("hide");
    alert.classList.add("show");
})





closeBtn.addEventListener("click", function(){
    alert.classList.remove("show");
    alert.classList.add("hide");
})



