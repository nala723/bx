import 'swiper/css/bundle';
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titlesItem = document.querySelectorAll('.product-title > div');
const photosItem = document.querySelectorAll('.main-photos-box > div > div');


const start = gsap.timeline();
// let hoverEnabled = false;

start.from('.main-sc .row >div,.row >p',{stagger:0.05,y:100})
start.from('.main-sc .default-title',{y:300},0.5)
start.from('.main-sc .text-bottom *',{y:100},0.7)
start.to('.main-sc .main-photos-box-inner',{duration: 16,x:"-2600px",repeat: -1,ease: "linear"
  })

// ,onComplete: () => {
//     hoverEnabled = true; // 애니메이션이 끝난 후에 호버 가능하도록 변경


photosItem.forEach((item,i)=>{
  item.addEventListener('mouseenter',()=>{
    // if (!hoverEnabled) return; 
    gsap.to('.default-title img',{opacity:0})
    gsap.to(titlesItem[i].children[0],{opacity:1})
    gsap.to(photosItem[i],{zIndex:50})
    gsap.to(photosItem[i].children[0],{scale:1.5})
  })
  item.addEventListener('mouseleave',()=>{
    // if (!hoverEnabled) return; 
    gsap.to(photosItem[i],{zIndex:"initial"})
    gsap.to(photosItem[i].children[0],{scale:1})
    gsap.to(titlesItem[i].children[0],{opacity:0})
    gsap.to('.default-title  img',{opacity:1})
  })
})






// ScrollTrigger.create({
//   trigger: '.main-inner',
//   start: 'top bottom',
//   end: '+=2000',
//   animation:  start,
//   // markers: true,
//   scrub: 1,
// })




const product = gsap.timeline();


product.from('.products-box .photo',{duration:5,stagger:0.4,clipPath:"inset(50%)"})


ScrollTrigger.create({
    trigger: '.products-box',
    start: 'top bottom',
    end: '+=3600',
    animation:  product,
    // markers: true,
    scrub: 2,
  })

  const footer = gsap.timeline();

footer.from('.footer-sc .top-line',{duration:1,scale:0})
footer.from('.footer-sc .title *',{duration:6,stagger:2,y:-1000})
footer.to('.footer-sc .vertical-line',{scaleY:1},2)
footer.from('.footer-sc .diamond',{stagger:0.2,opacity:0})
footer.from('.footer-sc .sns-box,.footer-sc .info,.footer-sc .arrow-box',{stagger:0.2,opacity:0})

ScrollTrigger.create({
  trigger: '.footer-sc-inner',
  start: 'top center',
  end: 'bottom bottom',
  animation:  footer,
  //  pin: true,
  // markers: true,
  scrub: 4,
})
  
  
markers();