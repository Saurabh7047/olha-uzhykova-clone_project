// gsap.to("#gola",{
//     left:"110%",
//     rotate:360,
//     top:"35vw",
//     scrollTrigger:{
//         trigger:"#gola",
//         scroller:"body",
//         markers:true,
//         start:"top 38%",
//         scrub:3
//     }
// })

// gsap.to("#plateform",{
//     rotate:15,
//     scrollTrigger:{
//         trigger:"#plateform",
//         scroller:"body",
//         markers:true,
//         scrub:2,
//         start:"top 90%",
//         end:"top 83%"
//     }
// })

// gsap.to("#plateform",{
//     rotate:0,
//     scrollTrigger:{
//         trigger:"#plateform",
//         scroller:"body",
//         markers:true,
//         scrub:2,
//         start:"top 10%",
//         end:"top 5%"
//     }
// })
function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
loco();

// var a = -200
// setInterval(function(){
//     if(a >= -1100){
//         gsap.to("#inner h1",{
//             opacity:1,
//         })
//         gsap.to("#inner h1",{
//             delay:1,
//             y:a+"%",
//             opacity:1,
//         })
//     }else{
//         a = 0
//         gsap.to("#inner h1",{
//             y:"0%",
//             opacity:0,
//             duration:0
//         })
//     }

//     a -= 200
// },2000)

gsap.from("#nav",{
    y:-100,
    duration:0.8,
    delay:0.2,
    opacity:0
})


gsap.from("#gola",{
    y:-1000,
    duration:1.1,
    delay:0.6,
})

gsap.from("#plateform",{
    y:200,
    duration:0.8,
    delay:0,
})


gsap.from("#page1 h1",{
    y:50,
    duration:1.1,
    delay:1.6,
    opacity:0,
    onStart:function(){
        $('#page1 h1').textillate({ in: { effect: 'fadeInUp' } });
    }
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top -5%",
        scrub:3
    }
})

var t2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top -42%",
        scrub:3
    }
})

tl.to("#gola",{
    left:"110%",
    rotate:360,
    top:"36vw",
    duration:2,
},"anim1")

tl.to("#plateform",{
    rotate:15,
},"anim1")

tl.to("#page2-in h1",{
    delay:2,
    onStart:function(){
        $('#page2-in h1').textillate({ in: { effect: 'fadeInUp' } });
    }
},"anim1")

t2.to("#plateform",{
    rotate:0,
},"anim1")

gsap.to(".snake__snake",{
    
    onStart:function snake(){
        var a = document.querySelector("#page2-cicle svg .snake__text-path")
        var b = 100
        setInterval(()=> {
            if(b>5){
                a.setAttribute("startOffset",`${b--}%`)
            }
        },50);
    },
    scrollTrigger:{
        trigger:".snake__snake",
        scroller:"#main",
        // markers:true,
        start:"top 40%",
        end:"top 50%",
        scrub:true
    }
})


gsap.to("#safed_gola",{
    top:"36vw",
    scale:15,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top -40%",
        scrub:3
    }
})


// var prt = document.querySelectorAll(".prt img")
// prt.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         elem.childNodes[1].style.opacity = 1
//     })
//     elem.addEventListener("mouseleave",function(){
//         elem.childNodes[1].style.opacity = 0
//     })
//     elem.addEventListener("mousemove",function(dets){
//         elem.childNodes[1].style.left = `${dets.x}px`
//     })
    
// })

gsap.to("#page6 h1",{
    delay:2,
    onStart:function(){
        $('#page6 h1').textillate({ in: { effect: 'fadeInUp' } });
    },
    scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        start:"top 30%",
        scrub:3
    }
})
 
var flag = 0
document.querySelector("#menu-icon").addEventListener("click",function(){
    if(flag == 0)
    {
        document.querySelector("#full-scr").style.opacity = 1
        document.querySelector("#full-scr").style.top = 0
        document.querySelector("#line1").style.rotate = "45deg"
        document.querySelector("#line2").style.rotate = "-45deg"
        flag =1
    }
    else{
        document.querySelector("#full-scr").style.opacity = 0
        document.querySelector("#full-scr").style.top = "-100%"
        document.querySelector("#line1").style.rotate = "0deg"
        document.querySelector("#line2").style.rotate = "0deg"
        flag =0
    }
})

window.addEventListener("resize",function(){
    location.reload()
})