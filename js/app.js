const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

let testimonialSwiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
  loop: "true",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: "true",

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const cart = document.getElementById("cart"),
  cartShop = document.getElementById("cart-shop"),
  cartClose = document.getElementById("cart-close");

if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
}

if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// let delBtn = document.querySelector('.del__btn')
// let container = document.querySelector('.cart__card')

// delBtn.addEventListener('click', ()=>{
//  if (container) {
//   container.remove()
//  }
// })

// let price = document.querySelector('.cart__price')
// let number = document.querySelector('.cart__amount-number')
// let minus = document.querySelector('.cart__amount-box-minus')
// let plus = document.querySelector('.cart__amount-box-plus')
// plus.addEventListener('click',()=>{
//   let num = parseInt(number.textContent)
//   number.textContent=num+1
// })
// minus.addEventListener('click',()=>{
//   if(number.textContent<2){
//     return block;
//   }
//   else{
//     let num = parseInt(number.textContent)
//     number.textContent=num-1
//   }
// })

const deleteButtons = document.querySelectorAll('.del__btn');
const plusButtons = document.querySelectorAll('.bx-plus');
const minusButtons = document.querySelectorAll('.bx-minus');

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cartCard = button.closest('.cart__card');
    if (cartCard) {
      cartCard.remove();
    }
  });
});

plusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cartCard = button.closest('.cart__card');
    const amountNumber = cartCard.querySelector('.cart__amount-number');
    let currentAmount = parseInt(amountNumber.textContent);
    amountNumber.textContent = currentAmount + 1;
  });
});

minusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cartCard = button.closest('.cart__card');
    const amountNumber = cartCard.querySelector('.cart__amount-number');
    let currentAmount = parseInt(amountNumber.textContent);
    if (currentAmount > 1) {
      amountNumber.textContent = currentAmount - 1;
    }
  });
});
