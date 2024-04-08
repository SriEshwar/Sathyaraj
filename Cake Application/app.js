let nextButton=document.getElementById('next');
let prevButton=document.getElementById('prev');
let backButton=document.getElementById('back');
let seeeMore=document.querySelectorAll('.seeMore');
let carousel=document.querySelector('.carousel');
let listHTML=document.querySelector('.carousel .list');

nextButton.onclick=function(){
    showSlider('next')            //allows the display of multiple images in a single location, usually in a sliding motion.
}
prevButton.onclick=function(){
    showSlider('prev')
}
let unAcceptClick;

const showSlider=(type)=>{
    carousel.classList.remove('prev','next');
    let items=document.querySelectorAll('.carousel .list .item')
    if(type==='next'){
        listHTML.appendChild(items[0])
        carousel.classList.add('next')
    }
    else{
        let positionLast=items.length-1;
        listHTML.prepend(items[positionLast])
        carousel.classList.add('prev')
    }
    clearTimeout(unAcceptClick)
    unAcceptClick=setTimeout(()=>{
        nextButton.style.pointerEvents='none'
        prevButton.style.pointerEvents='none'
    },2000)
}
seeeMore.forEach(button=>{
    button.onclick=function(){
        carousel.classList.add('showDetail');
    }
})
backButton.onclick=function(){
    carousel.classList.remove('showDetail')
}

