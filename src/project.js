import "./styles/project.css";
import "swiper/css/bundle";
import { markers,scrollbar } from "../lib/smooth";
import './header'
import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Swiper from "swiper/bundle";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const swiper = new Swiper(".swiper", {
//   Optional: "parameters",
//   direction: "vertical",
//   parallax: true,
//   // loop: true,
//   mousewheel: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },

//   on: {
//     slideChangeTransitionStart: function () {
//       gsap.from(
//         ".page01 .contents",
//         { opacity:0, duration:1, y:200,  ease: "power2.out" },
//       );
//       gsap.from(
//         ".page02 .contents",
//         { opacity:0, duration:1,y:200,  ease: "power2.out" },
//       );
//       gsap.from(
//         ".page03 .contents",
//         { opacity:0, duration:1,y:200,  ease: "power2.out" },
//       );
//       gsap.from(
//         ".page04 .contents",
//         { opacity:0, duration:1,y:200,  ease: "power2.out" },
//       );
//     },
//   },
// });

// const swiper = new Swiper(".swiper", {
  
//   direction: "vertical", // 수직 스크롤
//   slidesPerView: 1,
//   parallax: true,
//   loop: true,
//   Optional: "parameters",
//   spaceBetween: 0,
//   // mousewheel: true, // 마우스 휠로 슬라이드 넘기기
  
//   on: {
//     slideChangeTransitionStart: function () {
//       gsap.fromTo(
//         ".swiper-slide .title-box",
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//       );
//     },
//   },
// });



// 1. git pull
// 2. 터미널 창에서 npm i 실행한다.
// 3. npm run dev로 사이트를 연다.
// 5. 코딩 시작.



const start = gsap.timeline();
const videoAni = gsap.timeline();

// gsap.set(".video-box-inner", {
//   clipPath: "inset(20.42% 58.07% 85.75% 25.16%)"
// });
start.from(".main-sc img", {
  stagger: 0.2,
  y: 200,
  ease: "power2.out",
});
start.from(".main-sc .text", { stagger: 0.2, opacity: 0 });

videoAni.to(".main-sc .word-box", {
  duration: 0.1,
  opacity: 0,
  ease: "power2.out",
});
videoAni.to(
  ".main-sc .video-box-inner",
  { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.out" },
  0
);
videoAni.from(
  ".main-sc .toleft div",
  {  y: 300 ,  ease: "power2.out",},
  0.2
);
videoAni.from(
  ".main-sc .toright div",
  {  y: 300 ,  ease: "power2.out",
    onStart: () => {
      // 등장 애니메이션이 끝난 후 CSS 애니메이션 추가
      document.querySelectorAll(".main-sc .toleft, .main-sc .toright").forEach(el => {
        el.classList.add("move")
      })}},
  0.3
);


ScrollTrigger.create({
  trigger: ".main-inner",
  start: "top top",
  end: "+=3000",
  animation: videoAni,
  scrub: 1,
  pin: true,
  // markers: true
});


const videoBottom = gsap.timeline();


videoBottom.to(".videoBottom-sc .vertical-line", { scaleY: 1 });
videoBottom.from(".videoBottom-sc .horizontal-line", { duration:1,scale: 0 });

ScrollTrigger.create({
  trigger: ".videoBottom-inner",
  start: "top center",
  end: "+=500",
  animation: videoBottom,
  // markers: true,
  scrub: 1,
});

const homeStory = gsap.timeline();

homeStory.to(".homeStory-sc .top-line", { scaleY: 1 });
homeStory.from(".homeStory-sc .diamond", { duration: 1, opacity: 0 }, 0.4);
homeStory.to(
  ".homeStory-sc .semiCircle-right,.homeStory-sc .semiCircle-left",
  { duration: 1, width: "100%" },
  0.2
);
homeStory.from(".homeStory-sc .section-title-main *", { duration: 2, y: 200 }, 1);
homeStory.from(
  ".homeStory-sc .section-title-box .horizontal-line ",
  { duration: 2, scale: 0 },
  2.5
);
homeStory.from(".homeStory-sc .section-title-sub", {  y: 200 }, 2.7);
homeStory.to(
  ".homeStory-sc .right-title-box .horizontal-line,.homeStory-sc .left-title-box .horizontal-line",
  { scaleX: 1 },"-=1"
);
homeStory.from(".homeStory-sc .contents-box .title p", {  y: 50 }, "<");
homeStory.from(".homeStory01-box img", { duration:2, clipPath: "inset(50%)",ease: "power2.out" },"+=2");
homeStory.from(".homeStory01-box .bigDeco p", { duration:2, y: 200, opacity:0,ease: "power2.out" });
homeStory.from(".homeStory02-box .smallDeco p", { duration:2, y: 200, opacity:0,ease: "power2.out" },"<");
homeStory.from(".homeStory02-box img", { duration:2, clipPath: "inset(50%)",ease: "power2.out" },"+=2");
homeStory.from(".homeStory03-box img", { duration:2, clipPath: "inset(50%)",ease: "power2.out" },"+=2");
homeStory.from(".homeStory04-box img", { duration:2, clipPath: "inset(50%)",ease: "power2.out" },"+=2");
homeStory.from(".homeStory04-box .bigDeco p", { duration:2, y: 200, opacity:0,ease: "power2.out" });
homeStory.from(".homeStory05-box .smallDeco p", {  duration:2,y: 200, opacity:0,ease: "power2.out" },"<");
homeStory.from(".homeStory05-box img", { duration:2, clipPath: "inset(50%)",ease: "power2.out" });



ScrollTrigger.create({
  trigger: ".homeStory-inner",
  start: "top center",
  end: "+=3600",
  animation: homeStory,
  // markers: true,
  scrub: 3,
});

const longLine =  gsap.timeline();

longLine.to(".homeStory-sc .contents-box .vertical-line", { duration:2,scaleY: 1 });
longLine.to(
  ".double-line-box .line",
  { scaleX: 1 },"+=1"
);
longLine.from(
  ".double-line-box .viewMore",
  { y:200},"<"
);

ScrollTrigger.create({
  trigger: ".homeStory-inner .contents-box",
  start: "top 80%",
  end: "+=3700",
  animation: longLine,
  // markers: true,
  scrub: 2,
});


const typho = gsap.timeline();
const typhoSmall = gsap.timeline();

typho.from(".typho-sc span",{stagger:0.1, opacity:0.2})
typhoSmall.from(".typho-sc .top p",{ duration:1, x:200})
typhoSmall.from(".typho-sc .bottom p",{duration:1, y:200})

ScrollTrigger.create({
  trigger: ".typho-inner",
  start: "top center",
  end: "+=1000",
  animation: typho,
  // markers: true,
  scrub: 2,
});

ScrollTrigger.create({
  trigger: ".sub-content",
  start: "top bottom",
  end: "+=1100",
  animation: typhoSmall,
  // markers: true,
  scrub: 2,
});



const circleMoving = gsap.timeline();

gsap.to(".circle-sc .circle-box", {
  rotation: 360, // 360도 회전
  duration: 10, // 5초 동안 회전
  ease: "linear", // 일정한 속도로 회전
  repeat: -1,
});
circleMoving.from('.circle-sc .photo-box .background',{ duration:0.2,ease: "power2.out", y:1500})
circleMoving.from('.circle-sc .photo-2 img',{ ease: "power2.out", y:1500},"-=0.2")
circleMoving.from('.circle-sc .photo-3 img',{ ease: "power2.out", y:1500},"-=0.2")
circleMoving.from('.circle-sc .photo-4 img',{ ease: "power2.out", y:1500},"-=0.2")
circleMoving.from('.circle-sc .float',{ left:"-37.344vw"})
circleMoving.from('.circle-sc .photo-2 >div',{ left:"-12.499vw"},"<")
circleMoving.from('.circle-sc .photo-3 >div',{  left:"12.346vw"},"<")
circleMoving.from('.circle-sc .photo-4 >div',{  left:"37.191vw"},"<")
circleMoving.to('.circle-sc .float',{ scale:1})
circleMoving.to(
  ".intro-page .dark",
  { opacity: 1, ease: "power2.out",  }
);
circleMoving.from(".circle-sc .content", {
  stagger:0.2,
  duration:1,
  opacity:0,
  y:200,
  ease: "power2.out",onEnter: () => {
    circleMoving.to(".swiper", { opacity: 1, duration: 1, pointerEvents: "all" });
  }

});





// circleMoving.from(".circle-sc .photo img", {
//   duration: 1,
//   y: 500,
//   stagger: 0.2,
//   ease: "power2.out",
// });
// circleMoving.to(".circle-sc .photo", {
//   left: "50%",
//   x: "-50%",
//   ease: "power2.out",
// });
// circleMoving.to(".circle-sc .photo01 img", {
//   scale: 1,
//   ease: "power2.out",
// });
// circleMoving.to(".circle-sc .dark", {
//   duration: 1,
//   opacity: 1,
//   ease: "power2.out",
// });
// circleMoving.to(".circle-sc .content", {
//   duration: 1,
//   opacity: 1,
//   ease: "power2.out",
// });

ScrollTrigger.create({
  trigger: ".circle-inner",
  start: "top top",
  end: "+=4000",
  animation: circleMoving,
  scrub: 2,
  pin: true,
  // markers: true
});

const wordsMoving = gsap.timeline();

wordsMoving.to(".moving-words-sc .top-vertical", { duration: 1.5, scaleY: 1 });
wordsMoving.from(
  ".moving-words-sc .top-line,.bottom-line",
  { stagger: 0.2, scaleX: 0 },
  0.3
);
wordsMoving.from(".moving-words-sc .top-words p", { y: 100 }, 0.5);
wordsMoving.from(".moving-words-sc .small-words", { y: 200 }, 0.6);
wordsMoving.from(
  ".toleft p,.toright p",
  {  duration: 1, stagger: 0.2, y: 400 ,  ease: "power2.out",
    onStart: () => {
      // 등장 애니메이션이 끝난 후 CSS 애니메이션 추가
      document.querySelectorAll(".toleft, .toright").forEach(el => {
        el.classList.add("move")
      })}},
  0.7
);
wordsMoving.to(
  ".moving-words-sc .bottom-vertical",
  { duration: 1.5, scaleY: 1 },
  0.9
);


ScrollTrigger.create({
  trigger: ".moving-words-inner",
  start: "top center",
  end: "+=1500",
  animation: wordsMoving,
  // markers: true,
  one: true,
  scrub: 1,
});


const exploring = gsap.timeline();

exploring.to(".exploring-sc .top-line", { scaleY: 1 });
exploring.from(".exploring-sc .diamond", { duration: 1, opacity: 0 }, 0.4);
exploring.to(
  ".exploring-sc .semiCircle-right,.exploring-sc .semiCircle-left",
  { duration: 1, width: "100%" },
  0.2
);
exploring.from(".exploring-sc .section-title-main *", { duration: 1, y: 200 }, 0.8);
exploring.from(
  ".exploring-sc .section-title-box .horizontal-line ",
  { duration: 1, scale: 0 },
  1.5
);
exploring.from(".exploring-sc .section-title-sub *", {  y: 200 }, 1.7);
exploring.from(".exploring-sc .photos-box *", { duration:3,stagger:0.2, y: 100, opacity:0, ease: "power2.out" },"<");
exploring.from(".exploring-sc .words-box div", { duration:1, stagger:0.2, y: 100, opacity:0, ease: "power2.out" },"-=5");
exploring.to(".exploring-sc .bottom-line", { scaleY: 1 },"-=1.5");

ScrollTrigger.create({
  trigger: ".exploring-sc-inner",
  start: "top 70%",
  end: "+=2400",
  animation: exploring,
  // markers: true,
  // one: true,
  scrub: 4,
});


const video = document.getElementById("video");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const videoBox = document.querySelector(".video-box");

let hideControlsTimeout; // 버튼 자동 숨김 타이머


// 🎬 비디오 재생 시 버튼 숨기기
video.addEventListener("play", () => {
  playButton.classList.add("hidden");
  pauseButton.classList.add("hidden"); // 처음 재생되면 버튼 숨김
});

// 재생 버튼 클릭 이벤트
playButton.addEventListener("click", () => {
  video.play();
  playButton.classList.add("hidden"); // 재생 버튼 숨김
  hidePauseButton(); // 일시정지 버튼도 숨김
});

// 일시정지 버튼 클릭 이벤트
pauseButton.addEventListener("click", () => {
  video.pause();
  playButton.classList.remove("hidden"); // 재생 버튼 다시 보이기
  pauseButton.classList.add("hidden"); // 일시정지 버튼 숨기기
});

// 영상이 끝나면 재생 버튼 다시 표시
video.addEventListener("ended", () => {
  playButton.classList.remove("hidden");
  pauseButton.classList.add("hidden");
});

// 마우스가 움직이면 일시정지 버튼 표시
videoBox.addEventListener("mousemove", () => {
  if (!video.paused) {
    // 영상이 재생 중일 때만 일시정지 버튼 표시
    showPauseButton();
    resetHideControlsTimer();
  }
});

// 일시정지 버튼 표시 함수
function showPauseButton() {
  pauseButton.classList.remove("hidden");
}

// 일시정지 버튼 숨김 함수
function hidePauseButton() {
  pauseButton.classList.add("hidden");
}

// 마우스 움직임이 멈춘 후 2초 뒤 버튼 숨김
function resetHideControlsTimer() {
  clearTimeout(hideControlsTimeout);
  hideControlsTimeout = setTimeout(hidePauseButton, 2000);
}




const videoMoving = gsap.timeline();
const videoElement = document.querySelector(".bottomVideo-sc video");
let played = false;

videoMoving.from(".bottomVideo-sc .top-line.horizontal-line", { scale: 0 });
videoMoving.to(".bottomVideo-sc .top-line.vertical-line", { scaleY: 1 },"<");
videoMoving.call(() => {
  if (!played) {
    videoElement.play();
    played = true; // 다시 실행되지 않도록 설정
  }
});
// videoMoving.from(".button-container *", { opacity: 0 });
videoMoving.to(".bottomVideo-sc .bottom-line.vertical-line", { scaleY: 1 },"+=2");
videoMoving.from(".bottomVideo-sc .bottom-line.horizontal-line", {scale: 0 },"-=0.5");


ScrollTrigger.create({
  trigger: ".bottomVideo-sc-inner",
  start: "top 80%",
  end: "+=1600",
  animation: videoMoving,
    one: true,
  // pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: 1,
});


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

const scrollToTopButton = document.querySelector(".footer-sc .arrow-box"); // 이미지 선택

scrollToTopButton.addEventListener("click", () => {
  scrollbar.scrollTo(0, 0, 600);

  
});

markers();
