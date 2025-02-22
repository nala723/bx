import "../lib/smooth";
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger,Draggable,MotionPathPlugin);

// 1. git pull
// 2. 터미널 창에서 npm i 실행한다.
// 3. npm run dev로 사이트를 연다.
// 5. 코딩 시작.



// gsap.from('.contents *',{
//   stagger:0.3,
//   delay:2,
//   y:30,
//   opacity:0
// })


const enter = document.querySelector('.enter');



const intro = document.querySelector('.intro');




enter.addEventListener('click',()=>{

  const tl = gsap.timeline();


  tl.to('.small-circle',{
    scale:1.5,
    opacity:0
  })

  tl.to(intro,{
    opacity:0,
    onComplete:()=>{
      
      intro.remove();

      gsap.from('.background img',{
        opacity: 0,
        stagger: 0.3  
      })
    }
  })
})





gsap.from('.background img',{
  duration:2,
  opacity: 0,
  stagger: 0.3  
})




const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');



let clicked = false;

hamburger.addEventListener('click',()=>{
  
  
  if(!clicked){
    gsap.to(menu,{
      height:'100vh'
    })
  }else{
    gsap.to(menu,{
      height:0
    })
  }

  clicked = !clicked
  
  
})













markers();
