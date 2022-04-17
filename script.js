const btnSearch = document.querySelector(".btn-search");
const formSearch = document.querySelector(".input-search");
const headerLinkList = document.querySelector(".header__link--list");
const headerLinkList2 = document.querySelector(".header__link--list2");
const categoryLink = document.querySelector(".category-link");
const releaseyearLink = document.querySelector(".releaseyear-link");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".btn-menu");

btnSearch.addEventListener("click", function (e) {
  formSearch.classList.toggle("input-search-open");
});

headerLinkList.addEventListener("click", function (e) {
  categoryLink.classList.toggle("hidden");
  releaseyearLink.classList.add("hidden");
  overlay.classList.remove("hidden2");
});

headerLinkList2.addEventListener("click", function (e) {
  releaseyearLink.classList.toggle("hidden");
  categoryLink.classList.add("hidden");
  overlay.classList.remove("hidden2");
});
let i = 0;
overlay.addEventListener("click", function (e) {
  i++;
  console.log(i);
  releaseyearLink.classList.add("hidden");
  categoryLink.classList.add("hidden");
  overlay.classList.add("hidden2");
});

menu.addEventListener("click", function () {
  document.querySelector(".header__nav").classList.toggle("open-nav");
});
