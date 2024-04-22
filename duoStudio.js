function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init();



var cursor = document.querySelector(".cursor");
var main = document.querySelector("main");
main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
});

var video = document.querySelectorAll("video");

video.forEach(val => val.addEventListener("mouseenter", function(){
        cursor.innerHTML = "<p>SOUND ON</p>",
        cursor.style.width = "auto",
        cursor.style.height = "auto",
        cursor.style.borderRadius = "0.3rem"
        cursor.style.padding = "0.2rem 0.3rem"
        cursor.style.transition = "padding 0.4s linear"
    }));
    video.forEach(val=> val.addEventListener("mouseleave", function(){
        cursor.innerHTML = ""
        cursor.style.width = "20px",
        cursor.style.height = "20px",
        cursor.style.borderRadius = "50%"
        cursor.style.padding = "0"
    }))

    var ts = gsap.timeline();

    ts.to(".page1 nav",{
        opacity: 1,
        duration: 1.5
    })
    ts.to(".page1 h1",{
        y: -10,
        opacity: 1,
        duration: 1
    })
    ts.to(".page1 h2",{
        y: -10,
        opacity: 1,
        duration: 1,
        delay: -0.5
    })
    ts.to(".page1 video",{
        y: -10,
        opacity: 1,
        duration: 1,
        // delay: -0.5
    })
    
var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: "main",
        // markers: true,
        start: "top 50%",
        end: "top -80%",
        scrub: 2
    }
})



tl.to(".page1 h1",{
    x: -60,
},"anime")

tl.to(".page1 h2",{
    x: 60,
},"anime")

tl.to(".page1 video",{
    width: "100%"
},"anime")

var t2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: "main",
        // markers: true,
        start: "top -10%",
        end: "top -120%",
        scrub: 2
    }
})
t2.to("main",{
    backgroundColor: "#FFFFFF"
})

var t3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: "main",
        // markers: true,
        start: "top -320%",
        end: "top -340%",
        scrub: 2
    }
})

t3.to("main",{
    backgroundColor: "#0F0D0D",
})

var menu = document.querySelector(".menu");
var respoNav = document.querySelector(".sec-nav");
var nav = document.querySelector("nav");
var flag = 0;

menu.addEventListener('click',()=>{
    if(flag == 0){
        respoNav.style.right = "0%";
        flag = 1;
    }
    else if(flag == 1){
        respoNav.style.right = "-100%";
        flag = 0;
    }
});