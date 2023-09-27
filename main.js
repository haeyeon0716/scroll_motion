/*
window.scrollY : 스크롤시 스크롤 되는 거리값 (동적)
DOM.offset().top : 전체 페이지에서 특정 DOM의 세로 위치값 (정적)
*/
const secs = document.querySelectorAll('section');
const h1 = secs[0].querySelector('h1');
const h1_2 = secs[1].querySelector('h1');
//baseline = box의 모션 시작 시점을 기본 box영역에서 300만큼 올림
const baseline = -300;

window.addEventListener('scroll', ()=>{
    const scroll = window.scrollY;
    //박스의 실 적용되는 스크롤 수치값은 반대로 300만큼 더해줘야 함
    const scroll_2 = scroll - secs[1].offsetTop - baseline;
    const initscroll = 0;

    h1.style.transform = `translateX(${scroll}px) rotate(${scroll}deg) scale(${1+ scroll/200})`
    h1.style.opacity = 1 - scroll/400;

    if(scroll > secs[1].offsetTop + baseline){
        h1_2.style.transform = `translateX(${scroll_2}px) rotate(${scroll_2}deg) scale(${1+ scroll_2/200})`
        h1_2.style.opacity = 1 - scroll_2/400;
    }else{
        //원래 위치로 스크롤시 조금싹 오차 범위가 발생하기 때문에 원래값으로 강제 보정처리
        h1_2.style.transform = `translateX(${initscroll}px) rotate(${initscroll}deg) scale(${1+ initscroll/200})`
        h1_2.style.opacity = 1 - initscroll/400;
    }

});