var tl = gsap.timeline();

tl

.from("nav",{
    y: -300,
    opacity: 0,
    duration: 1
})
.from(".head-p p",{
    x: -50,
    delay: 0.5,
    opacity: 0,
    duration: 0.7
})
.from(".contents h2",{
    // y: 30,
    opacity: 0,
    duration: 1
})
.from(".foot-p p",{
    x: 50,
    opacity: 0,
    duration: 0.7
})

var icon = document.querySelector(".icon");
var respoNav = document.querySelector(".responsive-nav");
var nav = document.querySelector("nav");
var flag = 0;

icon.addEventListener('click',()=>{
    if(flag == 0){
        respoNav.style.left = 0;
        nav.style.borderBottom = 0;
        flag = 1;
    }
    else if(flag == 1){
        respoNav.style.left = "-100%";
        nav.style.borderBottom = "1px solid #222";
        flag = 0;
    }
})