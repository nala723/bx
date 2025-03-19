import "../lib/smooth";
import { markers } from "../lib/smooth";
import Parallax from 'parallax-js';
import './header'

import { gsap } from "gsap";


/* 1. 메뉴에서서 home 클릭할때: 인트로는 패스하고고 바로 메인화면으로로 간다.

   2. 프레츠한센 로고 클릭했을때는 인트로로 간다. */


const intro = document.querySelector('.intro');

// document.addEventListener("DOMContentLoaded", () => {

    
//       // ✅ `sessionStorage`를 활용해 intro를 한 번만 보이게 설정
//       if (sessionStorage.getItem("visited")) {
//         intro.style.display = "none"; // 다시 방문 시 Intro 숨김
        
//       gsap.to('.background',{opacity:1})
//       gsap.from('.background-inner div',{
//         duration:2,
//         opacity: 0,
//         stagger: 0.3  
//       },)
//       } else {
//         sessionStorage.setItem("visited", "true"); // 방문 기록 저장
//       }
//     })





const scene01 = document.querySelector('.background');
const parallax01 = new Parallax(scene01);




const tl = gsap.timeline();
tl.from('.big-circle-wrapper',{
  duration:1,
  scale:0.5,
  opacity:0
})

tl.from('.small-circle-wrapper',{
  duration:1,
  scale:1.5,
  opacity:0
},'-=1')
tl.from('.contents img,.enter > p',{
  stagger:0.3,
  delay:1.5,
  y:30,
  opacity:0,
  // ease: "power1.out"
},'-=2')
tl.from('.line',{
  scale:0
},'-=0.5')


const enter = document.querySelector('.enter');


enter.addEventListener('click',()=>{

  const tl = gsap.timeline();

  tl.to('.big-circle-wrapper',{
    duration:1,
    scale:1.5,
    opacity:0
  })

  tl.to('.small-circle-wrapper',{
    duration:1,
    scale:1.5,
    opacity:0
  },'-=1')

  tl.to('.contents *',{
    stagger:0.3,
    delay:1,
    y:30,
    opacity:0
  },'-=2')

  tl.to(intro,{
    opacity:0,
    onComplete:()=>{
      
      intro.remove();

      gsap.to('.background',{opacity:1})
      gsap.from('.img-box *,.bigImg-box',{
        duration:1,
        opacity: 0,
        // clipPath:"inset(100%)",
        scale:0.5,
        stagger: {
          // wrap advanced options in an object
          amount:1.2,
          from: 'random',
          ease: 'power2.inOut'
      },
      ease: 'power2.inOut'
  
      },)
    }
  })
})






markers();
