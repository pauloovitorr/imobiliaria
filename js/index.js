let select_busca = document.querySelectorAll(".select_busca");
let links = document.querySelectorAll(".link_menu");



// Função que anima os links
function animaLinks() {
  let temp = 150;

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
