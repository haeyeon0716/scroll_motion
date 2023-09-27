const box = document.querySelector('article');

box.addEventListener('click', ()=>{
    new Anime(box,
         {left: 1000, backgroundColor:'#fcfda4'},
         {duration: 1000, easeType: 'linear', callback:()=>{
            new Anime(box, {top:300, background: '#70ffcf'})
         }});
})