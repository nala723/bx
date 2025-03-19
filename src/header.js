import { scrollbar } from "../lib/smooth";
import { gsap } from "gsap";
// 1. git pull
// 2. 터미널 창에서 npm i 실행한다.
// 3. npm run dev로 사이트를 연다.
// 5. 코딩 시작.




const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');



let clicked = false;

hamburger.addEventListener('click',()=>{
  
  
  if(!clicked){

    gsap.set(photosItem[0],{clipPath:'inset(0%)'})
    gsap.set(photosItem[0].children[0],{scale:1})

    gsap.to(menu,{ height:'100vh' })
    gsap.to('.words img',{ stagger:0.1, y:0 })
    gsap.to('.info-box *',{ stagger:0.1, delay:0.3, opacity:1})  
    gsap.to('.sns-box *',{ stagger:0.1, delay:1, opacity:1}) 

  }else{
    gsap.to(menu,{
      height:0
    })
    gsap.to('.words img',{ y:'100%' })
    gsap.to('.info-box *',{opacity:0})  
    gsap.to('.sns-box *',{ opacity:0}) 

  }
  clicked = !clicked
  
  
})




const wordsItem = document.querySelectorAll('.words > div');
const photosItem = document.querySelectorAll('.photos > div');


photosItem.forEach((_,i)=>{
  gsap.set(photosItem[i],{clipPath:'inset(50%)'})
  gsap.set(photosItem[i].children[0],{scale:1.2})
})


wordsItem.forEach((item,i)=>{
  item.addEventListener('mouseenter',()=>{
    gsap.to(photosItem[i],{clipPath:'inset(0%)'})
    gsap.to(photosItem[i].children[0],{scale:1})
  })
  item.addEventListener('mouseleave',()=>{
    gsap.to(photosItem[i],{clipPath:'inset(50%)'})
    gsap.to(photosItem[i].children[0],{scale:1.2})
  })
})



document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu a");
  
    // ✅ 메뉴 클릭 시 페이지 이동 로직
    menuLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetPage = link.getAttribute("href");
   {
          window.location.href = targetPage; // 다른 메뉴는 페이지 이동
        }
      });
    });
  });


  let lastScrollY = window.scrollY;
  const header = document.querySelector("header");
  
  // 스크롤 이벤트 리스너 추가
  scrollbar.addListener(({ offset }) => {
    let currentScrollY = offset.y; // smooth-scrollbar의 스크롤 값 사용*/
  
    if (currentScrollY > window.innerHeight) { // 100vh 아래로 내려갔을 때만 실행
      if (currentScrollY > lastScrollY) {
        // 아래로 스크롤하면 헤더 숨김 
       console.log(currentScrollY,lastScrollY ,"헤더숨김")
        gsap.to(header, {
          y: -100,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        console.log(currentScrollY,lastScrollY ,"헤더보임")
        // 위로 스크롤하면 헤더 보이게
        gsap.to(header, {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }
  
    lastScrollY = currentScrollY;
  });
  