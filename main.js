/*
window.scrollY : 스크롤시 스크롤 되는 거리값 (동적)
DOM.offset().top : 전체 페이지에서 특정 DOM의 세로 위치값 (정적)
*/
const secs = document.querySelectorAll('section');
const h1 = secs[0].querySelector('h1');

window.addEventListener('scroll', ()=>{
    const scroll = window.scrollY;
    h1.style.transform = `translateX(${scroll}px) rotate(${scroll}deg)`
});