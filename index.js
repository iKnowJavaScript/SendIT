const toggler = document.querySelector("#menu");
const toggle = document.querySelector(".mobile-hide");

  toggler.addEventListener("click", () => {
    "" == toggle.style.display ? (toggle.style.display="none") : (toggle.style.display = "")
    });
  
