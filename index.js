let navbar = document.querySelector(".btn-navbar");
let navlink = document.querySelector(".nav-link");
let flag = "close";
navlink.classList.add(flag);
navbar.addEventListener("click", function () {
  if (flag == "close") {
    navlink.classList.remove("close");

    flag = "open";

    navlink.classList.add(flag);
  } else {
    navlink.classList.remove("open");
    flag = "close";
    navlink.classList.add(flag);
  }
});
