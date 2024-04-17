var tl = gsap.timeline();

tl

.from("nav",{
    y: -300,
    opacity: 0,
    duration: 1
})
.from(".part-1 h2",{
    y: -30,
    opacity: 0,
    duration: 0.6
})
.from(".part-1 p",{
    y: 30,
    opacity: 0,
    duration: 0.7
})
.from(".part-1 button",{
    opacity: 0,
    duration: 1
})
.from(".cards",{
    opacity: 0,
    duration: 1,
    y: 300
})

