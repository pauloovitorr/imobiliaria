let links = document.querySelectorAll(".link_menu");

function animaLinks() {
    let temp = 100;
  
    links.forEach((link, index) => {
      setInterval(() => {
        link.classList.add("link_menu_pag");
      }, temp * (index + 1));
    });
  }
  
  animaLinks();