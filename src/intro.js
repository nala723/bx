import "../lib/smooth";
import { markers } from "../lib/smooth";
import Parallax from "parallax-js";
import "./header";

import { gsap } from "gsap";


// let FollowBox = ".cursor";
// gsap.set(FollowBox, {
//   // xPercent: -50,
//   // yPercent: -50,
//   scale: 1,
// });

// window.addEventListener("mousemove", (e) => {
//   gsap.to(FollowBox, 0.5, {
//     duration: 1.5,
//     x: e.clientX,
//     y: e.clientY,
//     stagger: 0.15,
//     // ease: "none",
//   });
// });

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
  const photosItem = document.querySelectorAll(".bigImg-box");

  photosItem.forEach((photo) => {
    photo.addEventListener("mouseenter", () => {
      FollowBox.style.display = "flex"; // 커서 보이게 설정

      // 기존 텍스트 숨기고 특정 텍스트만 보이게
      document.querySelectorAll(".cursor p").forEach((p) => (p.style.display = "none"));

      let targetText;
      if (photo.classList.contains("smile")) targetText = ".toAbout";
      if (photo.classList.contains("redChair")) targetText = ".toProject";
      if (photo.classList.contains("brownChair")) targetText = ".toProduct";
      if (photo.classList.contains("orangeChair")) targetText = ".toAbout";
      if (targetText) {
        document.querySelector(targetText).style.display = "block";
      }
    });

    photo.addEventListener("mouseleave", () => {
      FollowBox.style.display = "none"; // 마우스 벗어나면 다시 숨김
    });
  });
});

/* 1. 메뉴에서서 home 클릭할때: 인트로는 패스하고고 바로 메인화면으로로 간다.

   2. 프레츠한센 로고 클릭했을때는 인트로로 간다. */

const intro = document.querySelector(".intro");

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

const scene01 = document.querySelector(".background");
const parallax01 = new Parallax(scene01);

const tl = gsap.timeline();
tl.from(".big-circle-wrapper", {
  duration: 1,
  scale: 0.5,
  opacity: 0,
});

tl.from(
  ".small-circle-wrapper",
  {
    duration: 1,
    scale: 1.5,
    opacity: 0,
  },
  "-=1"
);
tl.from(
  ".contents img,.enter > p",
  {
    stagger: 0.3,
    delay: 1.5,
    y: 30,
    opacity: 0,
    // ease: "power1.out"
  },
  "-=2"
);
tl.from(
  ".line",
  {
    scale: 0,
  },
  "-=0.5"
);

const enter = document.querySelector(".enter");

enter.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.to(".big-circle-wrapper", {
    duration: 1,
    scale: 1.5,
    opacity: 0,
  });

  tl.to(
    ".small-circle-wrapper",
    {
      duration: 1,
      scale: 1.5,
      opacity: 0,
    },
    "-=1"
  );

  tl.to(
    ".contents *",
    {
      stagger: 0.3,
      delay: 1,
      y: 30,
      opacity: 0,
    },
    "-=2"
  );

  tl.to(intro, {
    opacity: 0,
    onComplete: () => {
      intro.remove();

      gsap.to(".background", { opacity: 1 });
      gsap.from(".img-box,.bigImg-box", {
        duration: 1,
        opacity: 0,
        // clipPath:"inset(100%)",
        scale: 0.5,
        stagger: {
          // wrap advanced options in an object
          amount: 1.2,
          from: "random",
          ease: "power2.inOut",
        },
        ease: "power2.inOut",
      });
      gsap.fromTo(".drop",{  opacity: 0, scale: 0.5},{  opacity: 1, scale: 1,   ease: "power2.inOut",})
  
    },
  });
});

markers();
