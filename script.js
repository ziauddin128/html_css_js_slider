var tl = gsap.timeline({
    repeat: -1,
});

tl
.to(".img_box",{
    width:"100%",
    duration:2,
    ease: Expo.easeInOut,
    stagger:2,
},"anim")
.to(".text_box",{
    top:"0%",
    ease: Expo.easeInOut,
    stagger:2,
},"anim")
.to(".text_box",{
    top:"-100%",
    ease: Expo.easeInOut,
    delay:2,
    stagger:2,
},"anim")
