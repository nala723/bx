import './styles/about.css';
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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




const wordsItem = document.querySelectorAll('.words > div');
const photosItem = document.querySelectorAll('.photos > div');

wordsItem.forEach((item,i)=>{
  item.addEventListener('mouseenter',()=>{
    gsap.to(photosItem[i].children,{width:379,height:537})
    gsap.to(photosItem[i].children.children,{scale:1})
  })
  item.addEventListener('mouseleave',()=>{
    gsap.to(photosItem[i].children,{width:0,height:0})
    gsap.to(photosItem[i].children.children,{scale:1.2})
  })
})




const tl = gsap.timeline();
tl.to('.photo-box > div',{
  stagger:{
    each:0.2,
    from:'random'
  },
  clipPath: 'inset(0%)'
})
tl.from('.title-s',{
  y:100
},'-=0.5')
tl.from('.title-l',{
  y:300
},'-=0.3')
tl.from('.mid-words-box,.bottom-words-box,.circle-arrow',{
  stagger:0.1,
  opacity:0,
  
})
tl.from('.shop,.logo,.hamburger',{
  opacity:0
})


const card = gsap.timeline();

card.to('.photo-box > div:nth-child(7)',{ x:600, y:400, opacity:0, duration:10,ease: "sine.inOut"})
card.to('.photo-box > div:nth-child(6)',{ x:-600, y:400, opacity:0,duration:10,ease: "sine.inOut" },1)
card.to('.photo-box > div:nth-child(2)',{ x:-600, y:-400,opacity:0,duration:10,ease: "sine.inOut"},2)
card.to('.photo-box > div:nth-child(3)',{ x:600, y:-400,opacity:0,duration:6,ease: "sine.inOut" },3)
card.to('.photo-box > div:nth-child(4)',{ x:600, y:400,opacity:0,duration:5,ease: "sine.inOut" },4)
card.to('.photo-box > div:nth-child(1)',{ x:600, y:-400,opacity:0,duration:4,ease: "sine.inOut" },5)
card.to('.photo-box > div:nth-child(5)',{ x:-600, y:-400,opacity:0,duration:4,ease: "sine.inOut"},6)
card.to('.blink',{opacity:0},7)



ScrollTrigger.create({
  trigger: '.main-sc',
  start: 'top top',
  end: '+=3000',
  animation: card,
  pin: true,
  pinSpacing: false,
  // markers: true,
  scrub: 1,
})


const introduce = gsap.timeline();
/* default: duration:0.5 */

introduce.from('.section-title-main *',{y:200},0)
introduce.from('.section-title-box .horizontal-line ',{scale:0},0.2)
introduce.from('.introduce-img',{clipPath: 'inset(50%)'},0.4)
// introduce.from('.sub-contents-box .diamond',{opacity:0},0)
// introduce.from('.center-content > div:nth-child(1)',{left:0},0,0)
// introduce.from('.center-content > div:nth-child(3)',{right:0},0)
// introduce.from('.left-content,.right-content',{y:200},0)



const introduceBottom = gsap.timeline();
introduceBottom.from('.diamond',{duration: 0.2, opacity:0},0.5)
introduceBottom.from('.center-content > div:nth-child(1)',{duration: 1, scale:0},0.7)
introduceBottom.from('.center-content > div:nth-child(3)',{duration: 1, scale:0},0.7)
introduceBottom.from('.left-content,.right-content',{duration: 1, y:200},0.8)


ScrollTrigger.create({
  trigger: '.introduce-inner',
  start: 'top top',
  end: '+=2000',
  animation: introduce,
  pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: 1,
})

ScrollTrigger.create({
  trigger: '.introduce-sc .sub-contents-box',
  start: '900px top',
  end: '+=500',
  animation: introduceBottom,
  // pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: 1,
})

//?? ----> 잘모르겠다.. 

const bigNumberLine = gsap.timeline();
const bigNumber = gsap.timeline();

bigNumberLine.from('.big-number-inner .horizontal-line',{scale:0})
bigNumberLine.from('.big-number-inner .vertical-line',{height:0},0)
bigNumberLine.to('.big-number-inner .detail *',{y:-200,opacity:0},0.1)

bigNumber.to('.big-number-inner .big-number',{fontWeight:'bold', scale:5,rotate:'-45deg'},0.1)


ScrollTrigger.create({
  trigger: '.big-number-inner',
  start: '-=500',
  // start: 'top top',
  end: '+=2000',
  animation: bigNumberLine,
  // pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: 1,
})


ScrollTrigger.create({
  trigger: '.big-number-inner',
  start: 'top top',
  // start: 'top top',
  end: '+=1800',
  animation: bigNumber,
  pin: true,
  pinSpacing: false,
  // markers: true,
  scrub: 1,
})



// top-content

// .history-sc


const history = gsap.timeline();

history.from('.top-content span',{stagger:0.1,opacity:0.2})

ScrollTrigger.create({
  trigger: '.history-sc',
  start: 'top center',
  // start: 'top top',
  end: '+=300',
  animation: history,
  // pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: 1,
})







const video = document.getElementById('video');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play(); // 동영상 재생
    playButton.classList.add('hidden'); // 버튼 숨김
  }
  else if (video.paly){
    video.paused();
    playButton.classList.remove('hidden');
}
  } );

// 동영상이 끝나면 버튼 다시 보이게
video.addEventListener('ended', () => {
  playButton.classList.remove('hidden');
});

markers();
