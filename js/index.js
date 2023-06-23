  const toggleBtn = document.querySelector('.toggle_btn')
  const toggleBtnIcon = document.querySelector('.toggle_btn i')
  const dropDownMenu = document.querySelector('.dropdown-menu')

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
  
    toggleBtnIcon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
  }

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel-list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel-indicadores',
        arrows: {
          prev: '.carousel-anterior',
          next: '.carousel-siguiente'
        },
        responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 600,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          }
        ]
    })


})

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Aquí puedes agregar la lógica para enviar el formulario, como usar AJAX para enviar los datos al servidor

  // Ejemplo de mensaje de éxito (puedes modificarlo según tus necesidades)
  document.getElementById("success-message").innerHTML = "¡Mensaje enviado!";
  document.getElementById("error-message").innerHTML = "";
  document.getElementById("contact-form").reset();
});

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener("mousemove", function (e){
  const posX = e.clientX;
  const posY = e.clientY;
  
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`,
  }, {duration: 500, fill: "forwards"});

})