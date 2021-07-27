"use strict";

//TODO: DECLARE ALL REQUIRED VARIABLES
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const logo1 = document.querySelector(".logo-1");
const logo2 = document.querySelector(".logo-2");
const mobileMenu = document.querySelector(".menu__inner");
const body = document.body;

const tabContainer = document.querySelector(".features__tabs");
const tab = document.querySelectorAll(".feature__tab");
const panelContainer = document.querySelector(".features__content");
const panel = document.querySelectorAll(".feature__content");

//TODO: MOBILE NAVIGATION MENU

const openNav = function () {
  navOpen.classList.add("nav-inactive");
  navClose.classList.remove("nav-inactive");
  mobileMenu.style.display = "flex";
  logo1.classList.add("nav-inactive");
  logo2.classList.remove("nav-inactive");
  body.style.overflow = "hidden";
};

const closeNav = function () {
  navOpen.classList.remove("nav-inactive");
  navClose.classList.add("nav-inactive");
  mobileMenu.style.display = "none";
  logo1.classList.remove("nav-inactive");
  logo2.classList.add("nav-inactive");
  body.style.overflow = "auto";
};

//* OPEN MENU
navOpen.addEventListener("click", function (e) {
  openNav();
});

//* CLOSE MENU
navClose.addEventListener("click", function (e) {
  closeNav();
});

//TODO: TABBED COMPONENT

tabContainer.addEventListener("click", function (e) {
  //Prevent default button action
  e.preventDefault();

  console.log(tabContainer);

  const targetTab = e.target.closest(".feature__tab");

  if (targetTab) {
    //Remove active from all tabs
    tab.forEach((t) => {
      t.classList.remove("tab-active");
    });
    //Remove active from all panels
    panel.forEach((p) => {
      p.classList.remove("features-active");
    });
    //Add active to target panel
    targetTab.classList.add("tab-active");

    const panelTarget = document.querySelector(`.features--${targetTab.dataset.tab}`);
    panelTarget.classList.add("features-active");
  }
});
