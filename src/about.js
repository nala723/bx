// import './styles/about.css';
import { markers, scrollbar } from "../lib/smooth";
import  "./header";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);

document.addEventListener("DOMContentLoaded", () => {
  let FollowBox = document.querySelector(".cursor");

  // 🚨 오류 방지: .cursor 요소가 없으면 실행하지 않음
  if (!FollowBox) {
    console.error("🚨 Error: .cursor 요소가 존재하지 않습니다!");
    return;
  }

  // 🔹 마우스 따라다니는 애니메이션
 window.addEventListener("mousemove", (e) => {
  gsap.to(FollowBox, 0.5, {
    duration: 1.5,
    x: e.clientX,
    y: e.clientY,
    stagger: 0.15,
    scale:1,
    // ease: "none",
  });
});


  // 🔹 특정 요소 위에 마우스 올리면 커서 변경
  const designersBox = document.querySelector(".designers-box");


    designersBox.addEventListener("mouseenter", () => {
      FollowBox.style.display = "flex"; // 커서 보이게 설정
      document.querySelector(".cursor p").style.display = "block";
      // 기존 텍스트 숨기고 특정 텍스트만 보이게
      // document.querySelector(".cursor p")((p) => (p.style.display = "none"));

      designersBox.addEventListener("mouseleave", () => {
      FollowBox.style.display = "none"; // 마우스 벗어나면 다시 숨김
      document.querySelector(".cursor p").style.display = "none";
    });
  });
})

const tl = gsap.timeline();
tl.to(".photo-box > div", {
  stagger: {
    each: 0.2,
    from: "random",
  },
  clipPath: "inset(0%)",
});
tl.from(
  ".title-s",
  {
    y: 100,
  },
  "-=0.5"
);
tl.from(
  ".title-l",
  {
    y: 300,
  },
  "-=0.3"
);
tl.from(".mid-words-box,.bottom-words-box,.circle-arrow", {
  stagger: 0.1,
  opacity: 0,
});

const card = gsap.timeline();

card.to(".photo-box > div:nth-child(7)", {
  x: 600,
  y: 400,
  opacity: 0,
  duration: 10,
  ease: "sine.inOut",
});
card.to(
  ".photo-box > div:nth-child(6)",
  { x: -600, y: 400, opacity: 0, duration: 10, ease: "sine.inOut" },
  1
);
card.to(
  ".photo-box > div:nth-child(2)",
  { x: -600, y: -400, opacity: 0, duration: 10, ease: "sine.inOut" },
  2
);
card.to(
  ".photo-box > div:nth-child(3)",
  { x: 600, y: -400, opacity: 0, duration: 6, ease: "sine.inOut" },
  3
);
card.to(
  ".photo-box > div:nth-child(4)",
  { x: 600, y: 400, opacity: 0, duration: 5, ease: "sine.inOut" },
  4
);
card.to(
  ".photo-box > div:nth-child(1)",
  { x: 600, y: -400, opacity: 0, duration: 4, ease: "sine.inOut" },
  5
);
card.to(
  ".photo-box > div:nth-child(5)",
  { x: -600, y: -400, opacity: 0, duration: 4, ease: "sine.inOut" },
  6
);
card.to(".blink", { duration: 4, stagger: 0.5, opacity: 0 }, 7);

ScrollTrigger.create({
  trigger: ".main-sc",
  start: "-100 top",
  end: "+=3000",
  animation: card,
  pin: true,
  pinSpacing: false,
  // markers: true,
  scrub: 1,
});

const introduce = gsap.timeline();

introduce.from(".introduce-sc .section-title-main *", { y: 200 }, 0);
introduce.from(
  ".introduce-sc .section-title-box .horizontal-line ",
  { scale: 0 },
  0.2
);
introduce.from(".introduce-img", { clipPath: "inset(50%)" }, 0.4);

const introduceBottom = gsap.timeline();
introduceBottom.from(
  ".sub-contents-box .diamond",
  { duration: 4, opacity: 0 },
  0.5
);
introduceBottom.to(
  ".center-content > div:nth-child(1)",
  { scaleX: 1, duration: 7, ease: "power2.out" },
  0.7
);
introduceBottom.to(
  ".center-content > div:nth-child(3)",
  { scaleX: 1, duration: 7, ease: "power2.out" },
  0.7
);
introduceBottom.from(
  ".left-content,.right-content",
  { duration: 2, y: 200 },
  0.8
);

ScrollTrigger.create({
  trigger: ".introduce-inner",
  start: "top top",
  end: "+=2000",
  animation: introduce,
  pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: 1,
});

ScrollTrigger.create({
  trigger: ".introduce-sc .sub-contents-box",
  start: "900px top",
  end: "+=800",
  animation: introduceBottom,
  // pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: 1,
});

const bigNumberLine = gsap.timeline();
const bigNumber = gsap.timeline();

bigNumberLine.from(".big-number-inner .horizontal-line", { duration:1, scale: 0 });
bigNumberLine.to(".big-number-inner .vertical-line", { duration:1, scaleY: 1 }, 0);
bigNumberLine.to(
  ".big-number-inner .detail *",
  { duration: 5, y: -200, opacity: 0 },
  1
);

bigNumber.to(
  ".big-number-inner .big-number",
  { fontWeight: "bold", scale: 5, rotate: "-45deg", ease: 'power2.out' },
  0.1
);

ScrollTrigger.create({
  trigger: ".big-number-inner",
  start: "top 90%",
  end: "+=4000",
  animation: bigNumberLine,
  // pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: 1,
});

ScrollTrigger.create({
  trigger: ".big-number-inner",
  start: "top top",
  // start: 'top top',
  end: "+=1800",
  animation: bigNumber,
  pin: true,
  pinSpacing: false,
  // markers: true,
  scrub: 2,
});


/*마우스 후버하면 세부내역(추후 추가) */
// const titlesItem = document.querySelectorAll('.product-title > div');
const historyPhoto = document.querySelectorAll(".history-sc .img-box > div");

// const start = gsap.timeline();
// let hoverEnabled = false;
// start.from('.main-sc .main-photos-box',{duration: 10,left:"50%",repeat: -1,ease: "linear",onComplete: () => {
//     hoverEnabled = true; // 애니메이션이 끝난 후에 호버 가능하도록 변경
//   }})

historyPhoto.forEach((item, i) => {
  item.addEventListener("mouseenter", () => {
    // if (!hoverEnabled) return;

    gsap.to(historyPhoto[i].children[0], { scale: 1.2, clipPath: "inset(8%)" });
    // gsap.to(historyPhoto[i].children[0].children[2], { opacity: 1 });
    // gsap.to(historyPhoto[i].children[0].children[0], {
    //   opacity: 1,
    //   stagger: 0.2,
    // });
  });
  item.addEventListener("mouseleave", () => {
    // if (!hoverEnabled) return;
    gsap.to(historyPhoto[i].children[0], { scale: 1, clipPath: "inset(0%)" });
    // gsap.to(historyPhoto[i].children[0].children[2], { opacity: 0 });
    // gsap.to(historyPhoto[i].children[0].children[0], { opacity: 0 });
  });
});

const history = gsap.timeline();

history.from(".top-content span", { stagger: 0.1, opacity: 0.2 });
history.from(".history-box .diamond", { stagger: 0.1, opacity: 0 });

history.to(".history-box .first", { duration: 1, scaleY: 1 });
// history.from('.img1876 img',{duration: 5, scale: 0 })
history.to(".img1876", { duration: 5, clipPath: "inset(0%)" });
history.from(".year1878", { duration: 6, y: 100 });
history.from(".first .horizontal-line", { duration: 1, scale: 0 });
history.to(".first .vertical-line", { duration: 1, scaleY: 1 });
history.from(".img1918,.img1921", { duration: 5, scale: 0 });
history.from(".year1918,.year1921", { duration: 6, y: 100 });

history.to(".second.vertical-line", { duration: 1, scaleY: 1 });
history.from(".img1931", { duration: 5, scale: 0 });
history.from(".year1931", { duration: 6, y: 100 });
history.from(".second .horizontal-line", { duration: 1, scale: 0 });
history.to(".second .vertical-line", { duration: 1, scaleY: 1 });
history.from(".img1933,.img1943", { duration: 5, scale: 0 });
history.from(".year1933,.year1943", { duration: 6, y: 100 });

history.to(".third.vertical-line", { duration: 1, scaleY: 1 });
history.from(".img1954", { duration: 5, scale: 0 });
history.from(".year1954", { duration: 6, y: 100 });
history.from(".third .horizontal-line", { duration: 1, scale: 0 });
history.to(".third .vertical-line", { duration: 1, scaleY: 1 });
history.from(".img1955,.img1974", { duration: 5, scale: 0 });
history.from(".year1955,.year1974", { duration: 6, y: 100 });

history.to(".firth.vertical-line", { duration: 1, scaleY: 1 });
history.from(".img1988", { duration: 5, scale: 0 });
history.from(".year1988", { duration: 6, y: 100 });
history.from(".firth .horizontal-line", { duration: 1, scale: 0 });
history.to(".firth .vertical-line", { duration: 1, scaleY: 1 });
history.from(".img2011,.img2016", { duration: 5, scale: 0 });
history.from(".year2011,.year2016", { duration: 6, y: 100 });

ScrollTrigger.create({
  trigger: ".history-inner",
  start: "top center",
  end: "+=4000",
  animation: history,
  // pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: 2,
});

const video = document.getElementById("video");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const videoBox = document.querySelector(".video-box");

let hideControlsTimeout; // 버튼 자동 숨김 타이머

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

videoMoving.to("video", { scaleY: 1 });
videoMoving.from(".button-container *", { opacity: 0 }, 0.1);
videoMoving.to(".video-sc .vertical-line", { scaleY: 1 });

ScrollTrigger.create({
  trigger: ".video-sc-inner",
  start: "top bottom",
  end: "+=2000",
  animation: videoMoving,
  // pin: true,
  // pinSpacing: false,
  // markers: true,
  scrub: 1,
});

const pictures = gsap.timeline();

pictures.from(".pictures-sc-inner .horizontal-line:first-child", {
  duration: 1,
  scale: 0,
  ease: "power2.out",
});
pictures.to(
  ".pictures-sc .vertical-line",
  { duration: 1, scaleY: 1, ease: "power2.out" },
  0.1
);
pictures.to(
  ".pictures-sc .left-picture,.right-box-inner img ",
  { clipPath: "inset(0%)" },
  0.1
);
pictures.to(".hanger p", { scaleY: 1 }, 0.3);
pictures.to(".lamp p", { scaleX: 1 }, 0.3);
pictures.from(".pictures-sc .text", { duration: 1, y: 300 }, 0.5);
pictures.from(".pictures-sc-inner .horizontal-line:last-child", {
  duration: 1,
  scale: 0,
  ease: "power2.out",
});

ScrollTrigger.create({
  trigger: ".pictures-sc-inner",
  start: "top bottom",
  end: "+=1900",
  animation: pictures,
  // markers: true,
  scrub: 1,
});

const designer = gsap.timeline();

designer.to(".designer-sc .top-line", { scaleY: 1 });
designer.from(".designer-sc .diamond", { duration: 1, opacity: 0 }, 0.4);
designer.to(
  ".designer-sc .semiCircle-right,.designer-sc .semiCircle-left",
  { duration: 1, width: "100%" },
  0.2
);
designer.from(".designer-sc .section-title-main *", { duration: 2, y: 200 }, 1);
designer.from(
  ".designer-sc .section-title-box .horizontal-line ",
  { duration: 2, scale: 0 },
  2.5
);
designer.from(".designer-sc .section-title-sub", { duration: 2, y: 200 }, 2.7);
designer.from(".designers-inner", { duration: 4, left: "100vw" }, 2.9);

Draggable.create(".drag", {
  type: "x",
  bounds: ".designers-box",
  inertia: true,
});

ScrollTrigger.create({
  trigger: ".designer-sc-inner",
  start: "top center",
  end: "+=1000",
  animation: designer,
  // markers: true,
  scrub: 1,
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
  start: "top bottom",
  end: "+=1500",
  animation: wordsMoving,
  // markers: true,
  one: true,
  scrub: 1,
});

const environment = gsap.timeline();

environment.to(".environment-sc .top-line", { scaleY: 1 });
environment.from(".environment-sc .diamond", { duration: 1, opacity: 0 });
environment.to(
  ".environment-sc .semiCircle-right,.environment-sc .semiCircle-left",
  { duration: 1, width: "100%" },
  0.2
);
environment.from(
  ".environment-sc .section-title-main *",
  { duration: 2, y: 200 },
  0.8
);
environment.from(
  ".environment-sc .section-title-box .horizontal-line ",
  { duration: 2, scale: 0 },
  1.5
);
environment.from(
  ".environment-sc .section-title-sub",
  { duration: 1, y: 200 },
  1.7
);
environment.from(
  ".environment-sc .detail >div",
  { duration: 2, stagger: 0.2, y: 300 },
  2
);
environment.from(
  ".environment-sc .image-contents img",
  {
    duration: 1.5,
    stagger: {
      each: 0.3,
      from: "center",
    },
    y: 600,
     ease: "power2.inOut"
  },
  2.5
);
environment.from(
  ".environment-sc .info",
  {
    duration: 1,
    stagger: {
      each: 0.5,
      from: "center",
    },
    y: 200,
       ease: "power2.inOut"
  },
  2.8
);
environment.from(
  ".environment-sc .info-line",
  {
    duration: 1,
    stagger: {
      each: 0.7,
      from: "center",
    },
    scale: 0,
     ease: "power2.inOut"
  },
  3
);
environment.to(
  ".environment-sc .bottom-line",
  { duration: 1.5, scaleY: 1 },
  3.2
);

ScrollTrigger.create({
  trigger: ".environment-sc-inner",
  start: "top center",
  end: "+=2000",
  animation: environment,
  // markers: true,
  scrub: 2,
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

const scrollToTopButton = document.querySelector(".arrow-box"); // 이미지 선택

scrollToTopButton.addEventListener("click", () => {
  scrollbar.scrollTo(0, 0, 600);

  
});

markers();
