let select_busca = document.querySelectorAll(".select_busca");
let links = document.querySelectorAll(".link_menu");
let imoveis_destaque = document.querySelectorAll(".card_imovel");



// Hover nos imóveis em destaque
function hover_destaque(){
  imoveis_destaque.forEach((item)=>{
    item.addEventListener('mouseover', function(){
        let filho = item.firstElementChild
        filho.style.height = '170px'
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



// função para animar os selects
select_busca.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("select_foco");
  });

  item.addEventListener("blur", function () {
    item.classList.remove("select_foco");
  });
});



// Carrosel

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
  
  function init() {
      resize();
      move(Math.floor(items.length / 2));
      bindEvents();
    
      timer();
  }
  
  function resize() {
      width = Math.max(window.innerWidth * .25, 275),
      height = window.innerHeight * .5,
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
  }




  
  init();
  
})();
