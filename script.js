function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}


function loadingAnimation(){
    var tl = gsap.timeline();
    tl.from("#hero",{
        opacity:0,
        duration:0.3,
        delay:0.2,
    })
    tl.from("#hero",{
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("header",{
        opacity:0,
        delay:-0.3,
    })
    tl.from("#hero h1, #hero p, #hero div",{
        opacity:0,
        duration:0.5,
        stagger:0.2,

    })    
}

function NavAnimation(){
    var header = document.querySelector("header")

header.addEventListener("mouseenter", function(){
 
    let tl = gsap.timeline()
    tl.to("#nav-bottom",{
        height: "13vw",
        duration:0.5
    })
    tl.to(".nav-menu h4",{
        display: "block",
        duration:0.1
    })
    tl.to(".nav-menu h4 span",{
        y:0,
        stagger:{
            amount:0.5
        }
    })

})

header.addEventListener("mouseleave", function(){

    let tl =gsap.timeline()
    tl.to(".nav-menu h4 span",{
        y:25,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-menu h4",{
        display: "none",
        duration: 0.1
    })
    tl.to("#nav-bottom",{
        height: "0vw",
        duration: 0.1
    })

})
}



function hoveronimage(){
    
   var imageanim = document.querySelectorAll(".row2-col2-row")

   imageanim.forEach(function(elem){
     elem.addEventListener("mouseenter", function(){
       gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1,
       })
     })
     elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0,
           })
     })

     elem.addEventListener("mousemove", function(dets){

        gsap.to(elem.childNodes[3],{
            x:dets.x-elem.getBoundingClientRect().x-60,
            y:dets.y-elem.getBoundingClientRect().y-150,
        })
     })
   })
}



function VideoBtn(){
    
 var btn = document.querySelector(".videobtn")
 var video = document.querySelector(".row3 video")
 btn.addEventListener("mouseenter", function(){

    gsap.to("#videobtn h5",{
        opacity:1,
        scale:1,
   
    })
 })
 btn.addEventListener("mouseleave", function(){
    gsap.to("#videobtn h5",{
        opacity:0,
        scale:0,
    })
 })

  btn.addEventListener("click", function(){

    video.play()
    gsap.to(video,{
        transform: "scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0,

    })
  })

  video.addEventListener("click", function(){
    video.pause()
    gsap.to(video,{
        transform: "scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:30,
    })
  })
}

function videohov(){
 var videohover = document.querySelectorAll(".sectionRight")

   videohover.forEach(function(elem){
      elem.addEventListener("mouseenter", function(){
        console.log(elem.childNodes[3])
        elem.childNodes[3].style.opacity = 1,
        elem.childNodes[3].play()
      })
      elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })

      
   })
}

function row7Animations() {
    gsap.from(".row7-row2-col2 h5", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".row7-row2-col2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from(".row7-row2-col3 h5", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".row7-row2-col2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from(".row7-row2-col4 h5", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".row7-row2-col2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}


function row2box(){
    var row1box = document.querySelectorAll(".row1-box")
    row1box.forEach(function(elem){  
        var videosec = elem.querySelector("video")
        elem.addEventListener("mouseenter", function(){
            console.log(videosec);
            videosec.currentTime= 0;
            videosec.play();

            gsap.to(elem.childNodes[7],{
                opacity:1,
                duration:0.5,
                ease:"cubic-bezier(.39, .575, .565, 1)",
            })
        })

        elem.addEventListener("mouseleave", function(){
            videosec.pause();
            gsap.to(elem.childNodes[7],{
                opacity:0,
            })
        })
    })

}



locomotiveAnimation()
loadingAnimation()
 NavAnimation()
 hoveronimage()
 VideoBtn()
 videohov()
 row7Animations()
 row2box()



