import './styles/project.css';
import 'swiper/css/bundle';
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Swiper from 'swiper/bundle';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


gsap.registerPlugin(ScrollTrigger);

// 1. git pull
// 2. 터미널 창에서 npm i 실행한다.
// 3. npm run dev로 사이트를 연다.
// 5. 코딩 시작.

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');



let clicked = false;

hamburger.addEventListener('click',()=>{
  
  
  if(!clicked){
    gsap.to(menu,{ height:'100vh' })
    gsap.to('.words img',{ stagger:0.1, y:0 })  

  }else{
    gsap.to(menu,{
      height:0
    })
    gsap.to('.words img',{ y:'100%' })

  }
  clicked = !clicked
  
  
})


const video = gsap.timeline();

// video.to('.main-sc .video-box',{clipPath: "inset(0%)"});
video.to('.main-sc .video-box',{left:0,top:0,width:"100vw",height:"100vh"});
video.to('.main-sc .first-box,.second-box,.third-box,.forth-box',{
  opacity:0
},0)




ScrollTrigger.create({
  trigger: '.main-innner',
  start: 'top top',
  end: '+=5000',
  animation: video,
  scrub: 1,
  pin:true,
  // markers: true
});


const circleMoving = gsap.timeline();

gsap.to('.circle-sc .circle-box',{rotation: 360,  // 360도 회전
  duration: 10,   // 5초 동안 회전
  ease: "linear", // 일정한 속도로 회전
  repeat: -1})
circleMoving.from(".circle-sc .photo img", { duration:1,
    y:500,stagger:0.2,ease: "power2.out"
   });  
circleMoving.to(".circle-sc .photo", { 
    left: "50%",x:"-50%",ease: "power2.out"
   });
circleMoving.to(".circle-sc .photo01", { 
  scale:5.2,ease: "power2.out"
   });
circleMoving.to(".circle-sc .dark", { 
   duration:1,
    opacity:1,
    ease: "power2.out",
   });
   circleMoving.to(".circle-sc .content", { 
    duration:1,
     opacity:1,
     ease: "power2.out",
    });

    /*잘 안됨..scale 때문? 아니면 위치설정 및 기타..? */
 





ScrollTrigger.create({
  trigger: '.circle-inner',
  start: 'top top',
  end: '+=3000',
  animation: circleMoving,
  scrub: 1,
  pin:true,
  // markers: true
});




const wordsMoving = gsap.timeline();

wordsMoving.to('.moving-words-sc .top-vertical',{duration:1.5,scaleY:1})
wordsMoving.from('.moving-words-sc .top-line,.bottom-line',{stagger:0.2 ,scaleX:0},0.3)
wordsMoving.from('.moving-words-sc .top-words p',{y:100},0.5)
wordsMoving.from('.moving-words-sc .small-words',{y:200},0.6)
wordsMoving.from('.moving-words-sc .moving-words-box',{duration:1,y:400},0.7)
wordsMoving.to('.moving-words-sc .bottom-vertical',{duration:1.5,scaleY:1},0.9)


function createMarquee(target, direction) {
  const distance = target.offsetWidth / 2;

  gsap.to(target, {
    x: direction === "left" ? `-${distance}px` : `${distance}px`,
    duration: 5, 
    repeat: -1,
    ease: "linear",
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % distance)
    }
  });
}



ScrollTrigger.create({
  trigger: '.moving-words-inner',
  start: 'top bottom',
  end: '+=1800',
  animation:  wordsMoving,
  // markers: true,
  one:true,
  scrub: 1,
  onEnter: () => {
    createMarquee(document.querySelector(".toleft"), "left");
    createMarquee(document.querySelector(".toright"), "right");
  }
})






markers();




















