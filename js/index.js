let select_busca = document.querySelectorAll(".select_busca");
let links = document.querySelectorAll(".link_menu");
let imoveis_destaque = document.querySelectorAll(".card_imovel");

let pai_card = document.querySelector(".pai_card");
let card = document.querySelectorAll(".card_depoimento");

let pai_equipe = document.querySelector(".pai_equipe");
let card_equipe = document.querySelectorAll(".card_equipe");

let volta = document.querySelector('.volta')
let passa = document.querySelector('.passa')




// Click para abrir menu responsivo
let ttt = document.querySelector('.ttt')
let fecha_icon = document.querySelector('.fecha_icon')


let links_res = document.querySelectorAll('.opcoes_res ul a')



let menu_responsivo = document.querySelector('.menu_responsivo')


ttt.addEventListener('click', function(){
  menu_responsivo.classList.add('menu_responsivo_vista')

})

fecha_icon.addEventListener('click', function(){
  menu_responsivo.classList.toggle('menu_responsivo_vista')
})

document.addEventListener('click', function(event) {
  const isClickInside = menu_responsivo.contains(event.target) || ttt.contains(event.target);
  
  if (!isClickInside) {
    menu_responsivo.classList.remove('menu_responsivo_vista');
  }
});







volta.addEventListener('click', function(){
  volta_equipe()
})

passa.addEventListener('click', function(){
  corresel_equipe()
})


let cont_equipe = 0

// Corresel Equipe
function corresel_equipe(){
 
  cont_equipe++

    if(cont_equipe > card_equipe.length - 1){
      cont_equipe = 0
    }

    pai_equipe.style.transform = `translateX(${-cont_equipe * 360}px)`
    

}


function volta_equipe(){
  
  
  cont_equipe--

  if(cont_equipe < 0){
    cont_equipe = card_equipe.length - 1
  }

    pai_equipe.style.transform = `translateX(-${cont_equipe * 350}px)`


}



setInterval(corresel_equipe, 6000)




let cont_depoimento = 0

// Corresel Depoimentos
function corresel(){
 
  cont_depoimento++

    if(cont_depoimento > card.length - 1){
      cont_depoimento = 0
    }

    pai_card.style.transform = `translateX(${-cont_depoimento * 350}px)`

}



setInterval(corresel, 8000)




// Hover nos imóveis em destaque
function hover_destaque(){
  imoveis_destaque.forEach((item)=>{
    item.addEventListener('mouseover', function(){
        let filho = item.firstElementChild
        filho.style.height = '150px'
        item.style.border = 'red'
    });
  });

  imoveis_destaque.forEach((item)=>{
    item.addEventListener('mouseleave', function(){
        let filho = item.firstElementChild
        filho.style.height = '0px'
        item.style.border = 'none'
    });
  });





}

hover_destaque()



// Função que anima os links
function animaLinks() {
  let temp = 100;

  links.forEach((link, index) => {
    setInterval(() => {
      link.classList.add("link_menu_avista");
    }, temp * (index + 1));
  });
}

animaLinks();


(function() {
  "use strict";

  var carousel = document.getElementsByClassName('carousel')[0],
      slider = carousel.getElementsByClassName('carousel__slider')[0],
      items = carousel.getElementsByClassName('carousel__slider__item'),
      prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
      nextBtn = carousel.getElementsByClassName('carousel__next')[0];
  
  var width, height, totalWidth, margin = 20,
      currIndex = 0,
      interval, intervalTime = 4000;

  var touchStartX = 0;
  var touchEndX = 0;
  
  function init() {
      resize();
      move(Math.floor(items.length / 2));
      bindEvents();
      timer();
  }
  
  function resize() {
      width = Math.max(window.innerWidth * .25, 275);
      height = window.innerHeight * .5;
      totalWidth = width * items.length;
      
      slider.style.width = totalWidth + "px";
      
      for(var i = 0; i < items.length; i++) {
          let item = items[i];
          item.style.width = (width - (margin * 2)) + "px";
          item.style.height = height + "px";
      }
  }
  
  function move(index) {
      if(index < 1) index = items.length;
      if(index > items.length) index = 1;
      currIndex = index;
      
      for(var i = 0; i < items.length; i++) {
          let item = items[i],
              box = item.getElementsByClassName('item__3d-frame')[0];
          if(i == (index - 1)) {
              item.classList.add('carousel__slider__item--active');
              box.style.transform = "perspective(1200px)";
          } else {
              item.classList.remove('carousel__slider__item--active');
              box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
          }
      }
      
      slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
  }
  
  function timer() {
      clearInterval(interval);    
      interval = setInterval(() => {
          move(++currIndex);
      }, intervalTime);    
  }
  
  function prev() {
      move(--currIndex);
      timer();
  }
  
  function next() {
      move(++currIndex);    
      timer();
  }
  
  function bindEvents() {
      window.onresize = resize;
      prevBtn.addEventListener('click', () => { prev(); });
      nextBtn.addEventListener('click', () => { next(); });

      // Adiciona eventos de toque
      slider.addEventListener('touchstart', handleTouchStart, false);        
      slider.addEventListener('touchmove', handleTouchMove, false);
      slider.addEventListener('touchend', handleTouchEnd, false);
  }

  function handleTouchStart(event) {
      touchStartX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
      touchEndX = event.touches[0].clientX;
  }

  function handleTouchEnd() {
      var deltaX = touchEndX - touchStartX;
      if (Math.abs(deltaX) > 50) { 
          if (deltaX > 0) {
              prev();
          } else {
              next();
          }
      }
  }

  init();
})();
