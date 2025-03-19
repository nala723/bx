import 'swiper/css/bundle';
import { markers,scrollbar } from "../lib/smooth";
import "./header";
import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titlesItem = document.querySelectorAll('.product-title > div');
const photosItem = document.querySelectorAll('.main-photos-box > div > div');


const start = gsap.timeline();
// let hoverEnabled = false;

start.from('.main-sc .row >div,.row >p',{stagger:0.05,y:100,ease: "power2.out"})
start.from('.main-sc .default-title',{y:300,ease: "power2.out"},0.5)
start.from('.main-sc .text-bottom *,.main-title .deco p',{opacity:0, y:100},0.7)
start.from('.main-sc .main-photos-box-inner >div',{ opacity:0,stagger:0.1,y:600,ease: "power2.out"
},"<")
start.to('.main-sc .main-photos-box-inner',{duration: 36,x:"-235vw",repeat: -1,ease: "linear"
  },"-=2")


  // start.from(
  //   ".main-photos-box-inner >div",
  //   {  stagger: 0.2, y: 400 ,  ease: "power2.out",
  //     onStart: () => {
  //       // 등장 애니메이션이 끝난 후 CSS 애니메이션 추가
  //       document.querySelectorAll(".toleft, .toright").forEach(el => {
  //         el.classList.add("move")
  //       })}},
  //   0.7
  // );
// ,onComplete: () => {
//     hoverEnabled = true; // 애니메이션이 끝난 후에 호버 가능하도록 변경


photosItem.forEach((item,i)=>{
  item.addEventListener('mouseenter',()=>{
    // if (!hoverEnabled) return; 
    gsap.to('.default-title img,.deco',{opacity:0})
    gsap.to(titlesItem[i].children[0],{opacity:1})
    gsap.to(photosItem[i],{zIndex:50})
    gsap.to(photosItem[i].children[0],{scale:1.5})
  })
  item.addEventListener('mouseleave',()=>{
    // if (!hoverEnabled) return; 
    gsap.to(photosItem[i],{zIndex:"initial"})
    gsap.to(photosItem[i].children[0],{scale:1})
    gsap.to(titlesItem[i].children[0],{opacity:0})
    gsap.to('.default-title  img,.deco',{opacity:1})
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

// img{
//   transform:scale(1.2)
// }


const productTitle = gsap.timeline();

productTitle.from('.products-sc .diamond',{duration: 1,stagger:0.2,opacity:0})
productTitle.from(".products-sc .section-title-main *", { duration: 1, y: 200 }, "-=0.8");
productTitle.from(
  ".products-sc .section-title-box .horizontal-line ",
  { duration: 1, scale: 0 },
 "-=0.3"
);
productTitle.from(".products-sc .section-title-sub *", { opacity:0,stagger:0.1, y: 100 },"-=0.6");


ScrollTrigger.create({
  trigger: '.products-sc-inner',
  start: 'top 80%',
  end: '+=900',
  animation:  productTitle,
  // markers: true,
  scrub: 2,
})



const product = gsap.timeline();

product.from('.products-box .photo.chair',{duration:1,stagger:0.2,clipPath:"inset(50%)",scale:0.5,ease: "power2.out"})
product.from('.products-box .leftSide.chair,.circle.top',
  { duration:1, opacity:0,ease: "power2.out"},"-=1")

product.from('.products-box .photo.table',{duration:1,stagger:0.2,clipPath:"inset(50%)",scale:0.5,ease: "power2.out"})
product.from('.products-box .rightSide.table, .centerSmall,.circle.mid,.circle.big',
  {duration:1, opacity:0,ease: "power2.out"},"-=1")

product.from('.products-box .photo.light',{duration:1,stagger:0.2,clipPath:"inset(50%)",scale:0.5,ease: "power2.out"})
product.from('.products-box .leftSide.light',
  {duration:1, opacity:0,ease: "power2.out"},"-=1")
product.from('.products-box .photo.acc',{duration:1,stagger:0.2,clipPath:"inset(50%)",scale:0.5,ease: "power2.out"})
product.from('.products-box .rightSide.acc',
  {duration:1, opacity:0,ease: "power2.out"},"-=1")
product.from('.viewMore-inner',{x:-200},"-=0.2")
product.from('.last-text .detail',{opacity:0,y:100},"<")

gsap.to('.products-sc-inner .bottom-line', {
  scrollTrigger: {
    trigger: ".products-sc-inner .bottom-line",
    start: "top 80%", // 트리거 시작 위치
    end: "top top", // 트리거 종료 위치
    scrub: 2, // 스크롤에 따라 부드럽게 변화
  },
  scaleY:1,
  ease: "power2.out" // 부드러운 감속 효과
});
    
ScrollTrigger.create({
    trigger: '.products-box',
    start: 'top center',
    end: '+=3600',
    animation:  product,
    once:true,
    // markers: true,
    scrub: 2,
  })


  
const footer = gsap.timeline();

footer.from(".footer-sc .top-line", { duration: 1, scale: 0 });
footer.from(".footer-sc .title *", { duration: 6, stagger: 2, y: -1000 });
footer.to(".footer-sc .vertical-line", {  duration: 6,scaleY: 1 },"-=12");
footer.from(".footer-sc .diamond", { stagger: 0.5, opacity: 0 },"-=6");
footer.from(".footer-sc .sns-box,.footer-sc .info,.footer-sc .arrow-box", {
  stagger: 0.2,
  opacity: 0,
},"-=3");

ScrollTrigger.create({
  trigger: ".footer-sc-inner",
  start: "top center",
  end: "bottom bottom",
  animation: footer,
  //  pin: true,
  // markers: true,
  scrub: 4,
});

const scrollToTopButton = document.querySelector(".arrow-box"); // 이미지 선택

scrollToTopButton.addEventListener("click", () => {
  scrollbar.scrollTo(0, 0, 600);

  
});
  
  
markers();