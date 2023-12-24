var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"top 95%",
    end:"30% 40%",
    // markers:true,
    scrub:2    
}})

tl.to(".one #fanta",{
    top:"110%",
    left:"0%"
},'a1')

tl.to(".one #orange",{
    top:"140%",
    left:"18%"
},'a1')

tl.to(".one #leaf2",{
    top:"150%",
    left:"2%"
},'a1')

tl.to("#orange2",{
    top:"155%",
    left:"70%"
},'a1')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"top 80%",
    end:"40% 50%",
    scrub:2    
}})

tl2.from("#sprite",{
    rotate:"180deg",
},'a2')

tl2.from("#pepsi",{
    rotate:"-180deg",
},'a2')

tl2.to("#fanta",{
    width:"38%",
    top:"208%",
    left:"31%"
},'a2')

tl2.to("#orange",{
    top:"180%",
    left:"45%"
},'a2')

tl2.to("#leaf2",{
    top:"245%",
    left:"33%"
},'a2')