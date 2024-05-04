
var t = gsap.timeline()

t.from("header",{
    y: -100,
    opacity:0,
    duration:1
})
t.from(".page1 .container .cont1",{
    y: -100,
    opacity:0,
    duration:1
},"tr")
t.from(".page1 .container .cont2",{
    y: 100,
    opacity:0,
    duration:1
},"tr")

t.to(".page1 .groups .img1",{
    x: "-20px",
    opacity: 1,
    duration:0.5
})
t.to(".page1 .groups .img2",{
    x: "-20px",
    opacity: 1,
    duration:0.5
})
t.to(".page1 .groups .img3",{
    x: "-20px",
    opacity: 1,
    duration:0.5
})
t.to(".page1 .groups .img4",{
    x: "-20px",
    opacity: 1,
    duration:0.5
})