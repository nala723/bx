import './styles/project.css';
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












markers();


/* 질문 

######## 구동 느낌은 시안 폴더의 [ 홈-어바웃 구동컷.jpg, 프로젝트-구동컷.jpg ] 참고해주세요 #####
나머지 부분들은 원리만 알면 제가 해볼수 있을 것 같아서 물어볼 섹션들만 정리해봤어요!


- about 페이지 

✅ 1. 메인섹션 : 사진들이 스크롤에 따라 사라짐(해결) 그 주변 자잘이들이 (작은 글, 화살표들)또한 동시에 없어지는 애니메이션을 적용하고 싶다. 

✅ 2. 메인 밑 소개 섹션 : 역시 스크롤을 내리면서 자연스럽게 제목, 이미지, 그 밑 설명부분(다이아몬드와 그 양옆 선포함)이 
등장하게 하고 싶은데 스크롤 트리거 start 지점을 설정하는 기준? 원리를 잘 모르겠어요.
(등장이 너무 빠르거나 늦거나 해요)

ex: https://theshift.tokyo/about/
https://selemen.liqium.com/index.html

✅ 3. 그리고 핀을 고정하고, 해당 섹션의 height를 늘렸을때 (100vh -> 400vh) 기존에 디자인한 섹션과 섹션사이의 간격 같은 것을
유지하려면 어떻게 계산해야하나요?

✅ 4. 히스토리 섹션 (history-sc) : 스크롤을 내리면 자연스럽게 글자들이 연한색이었다가 진한색으로 변해요! 

https://www.phsofia.com/about


- project 페이지

✅ 1. 메인섹션 : 스크롤을 내리면 동영상이 확대되는 구동

https://www.mccann.fr/en/
https://kozowood.com/en/about


✅ 2. circle.sc : 스크롤 내리면 네장의 그림들이 가운데로 합쳐지고 그 중 한장이 확대되면서 글자들이 나오는 구동, 스크롤 내리면 다시 다른 화면들이 보임
(intro에서 메인 화면 넘어갈때 처럼 한페이지 한페이지가 삭제되는 방식으로 해야하는지..)





*/


















