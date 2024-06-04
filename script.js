

function navAnim(){
    gsap.from("nav",{
        y:-100,
        opacity:0,
        duration:1,
        delay:1
    })
    window.addEventListener("wheel",function(dets){

        if(dets.deltaY >= 3){
            gsap.to("nav",{
                y: -100,
                opacity:0,
                ease:"power2",
                duration:1
            })
         }else if(dets.deltaY <=-3){
            gsap.to("nav",{
                y:0,
                opacity:1,
                duration:1
            })
         }
    })
}
navAnim()
function heroAnim(){
    var tl = gsap.timeline();
tl.from(".hero-content .bound h1",{
    y:100,
    opacity:0,
    duration:1,
    delay:1,
    stagger:.3,
    ease:"power2"
},"a")
tl.from(".img-con img",{
    x:-400,
    duration:1,
    delay:1.5,
    ease: "power2"
},"a")
tl.from(".hero-footer h3",{
    y:30,
    opacity:0
})

}
heroAnim()
function page2Anim(){
    gsap.from(".page2 video",{
        opacity:0,
        duration:1,
        ease:Power2,
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            start:"top 40%"
        }
    })
}
page2Anim()

function page3Anim(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            scrub:1,
            start:"top 30%",
            end:"top 50%"
        }
    });
    tl.to(".change-text h2",{
        opacity:0
    })
    tl.to(".chng h1",{
        y:0,
        duration:2
    })
    
}
page3Anim()

function svgAnim(){
    var sPath = "M 80 270 350 270";
var cPath = "M 10 60 Q 50 270 350 270";


gsap.to(".simpleL",{
    attr:{
        d:sPath
    },
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:".simpleL",
        scroller:"body",
        start:"top 80%",
        end:"end end",
        scrub:1
    }
})

gsap.to(".curveL",{
    attr:{
        d:cPath
    },
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:".curveL",
        scroller:"body",
        start:"top 80%",
        end:"end end",
        scrub:1
    }
})
}
svgAnim()


function textSplit(){
    document.querySelectorAll(".intro-right p").forEach((p)=>{
        let temp = "";
    
        p.textContent.split(" ").forEach(function(e){
            temp += `<span>&nbsp${e}</span>`;
        })
        
        p.innerHTML = temp;
    })
    
}
textSplit()

function page4Anim(){
    gsap.from(".page4 .image-con",{
        x:"-10%",
        opacity:0,
        duration:1,
        ease: Power4,
        scrollTrigger:{
            trigger:".image-con",
            scroller:"body",
            start:"top 50%"
        }
    })
    
    gsap.to(".targ p span",{
        opacity:1,
        stagger:.3,
        ease: Power4,
        scrollTrigger:{
            trigger:".intro",
            scroller:"body",
            start:"top 50%",
            end:"bottom 50%",
            scrub:true,
            
        }
    })
    
}
page4Anim()

function page5Anim(){
    gsap.from(".page5 .image-con",{
        x:"-10%",
        opacity:0,
        duration:1,
        ease: Power4,
        scrollTrigger:{
            trigger:".page5 .image-con",
            scroller:"body",
            start:"top 50%",
        }
    })
    gsap.to(".targ2 p span",{
        opacity:1,
        stagger:.3,
        ease: Power4,
        scrollTrigger:{
            trigger:".business",
            scroller:"body",
            start:"top 50%",
            end:"bottom 50%",
            scrub:true,
        }
    })
}
page5Anim()


function footerAnim(){
    document.querySelectorAll(".element").forEach(function(e){
        e.addEventListener("mousemove",function(dets){
            
            var elemY = e.getBoundingClientRect().top;
            var elemX = e.getBoundingClientRect().left;
    
            e.querySelector("h1").style.color="#fff"
    
            gsap.to(e.querySelector("img"),{
                opacity:1,
                x:dets.x-elemX,
                y:dets.y-elemY,
                ease:"power4",
                duration:1
            })
        })
    
        e.addEventListener("mouseleave",function(){
            e.querySelector("h1").style.color="#a1a1a1"
            gsap.to(e.querySelector("img"),{
                opacity:0,
                ease:"power4",
                duration:1
            })
        })
    })
    
}
footerAnim()

function brandAnim(){
    
let brand = document.querySelector(".brand");
let overlay = document.querySelector(".overlay");
brand.addEventListener("mouseenter",function(){
    gsap.to(overlay,{
        width:"100%",
        duration:1,
        ease:"power2"
    })
})
brand.addEventListener("mouseleave",function(){
    gsap.to(overlay,{
        width:"0%",
        duration:1
    })
})
}

brandAnim()

