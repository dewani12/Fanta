var tl = gsap.timeline();

tl.from(".nav img, .nav h2, .nav h3, .nav button",{
    y:-100,
    dureation:1,
    delay:0.5,
    stagger:0.3,
    opacity:0
})

tl.from(".page1 h1",{
    y:100,
    delay:0.3,
    stagger: 0.3,
    opacity:0
})

tl.from(".left-img, .right-img",{
    scale:0,
    opacity:0
})

tl.from(".page1 h5",{
    scale:0,
    opacity:0
})

tl.to(".page1 h5",{
    y:25,
    repeat:-1,
    yoyo:true,
    duration:0.7
})