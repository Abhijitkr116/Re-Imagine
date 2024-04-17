var tl = gsap.timeline();

tl

.from("nav",{
    y: -300,
    opacity: 0,
    duration: 1
})
.from(".head-p p",{
    x: -50,
    opacity: 0,
    duration: 0.7
})
.from(".contents h2",{
    // y: 30,
    opacity: 0,
    duration: 0.8
})
.from(".foot-p p",{
    x: 50,
    opacity: 0,
    duration: 0.7
})
// .from(".cards",{
//     opacity: 0,
//     duration: 1,
//     y: 300
// })
