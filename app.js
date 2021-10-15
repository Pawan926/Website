const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector(".navigation");
  const navLinks = document.querySelectorAll(".navigation a");
  

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease backwards ${index / 7 + 0.5}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });

}

navSlide();