let links = document.querySelectorAll(".link_menu");


let pai_fotos_imovel = document.querySelector('.pai_fotos_imovel')
let img_imovel = document.querySelectorAll('.foto_imovel')
let volta = document.querySelector('.volta')
let passa = document.querySelector('.passa')


console.log(img_imovel)

volta.addEventListener('click', function(){
  volta_equipe()
})

passa.addEventListener('click', function(){
  corresel_foto_imovel()
})

let cont_foto = 0
// Corresel passa foto do imóvel

function corresel_foto_imovel() {
  cont_foto++;

  if (cont_foto >= img_imovel.length) {
    cont_foto = 0;
  }

  // Calcular a posição acumulada
  let translateX = 0;
  for (let i = 0; i < cont_foto; i++) {
    translateX += img_imovel[i].offsetWidth;
  }


  pai_fotos_imovel.style.transform = `translateX(${-translateX}px)`;
}

// Corresel volta foto do imóvel
function volta_equipe() {
  cont_foto--;

  if (cont_foto < 0) {
    cont_foto = img_imovel.length - 1;
  }

  let translateX = 0;
  for (let i = 0; i < cont_foto; i++) {
    translateX += img_imovel[i].offsetWidth;
  }

  pai_fotos_imovel.style.transform = `translateX(${-translateX}px)`;
}





// Anima os links do menu
function animaLinks() {
    let temp = 100;
  
    links.forEach((link, index) => {
      setInterval(() => {
        link.classList.add("link_menu_pag");
      }, temp * (index + 1));
    });
  }
  
  animaLinks();