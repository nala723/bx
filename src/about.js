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


const tl = gsap.timeline();
tl.to('.photo-box > div',{
  stagger:{
    each:0.2,
    from:'random'
  },
  clipPath: 'inset(0%)'
})


const card = gsap.timeline();

card.to('.photo-box > div:nth-child(1)',{ x:500, y:-300})
card.to('.photo-box > div:nth-child(2)',{ x:500, y:-300 },0)
card.to('.photo-box > div:nth-child(3)',{ x:500, y:-300 },0)
card.to('.photo-box > div:nth-child(4)',{ x:500, y:-300 },0)

ScrollTrigger.create({
  trigger: '.main-inner',
  start: 'top top',
  end: '+=3000',
  animation: card,
  pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})








markers();
