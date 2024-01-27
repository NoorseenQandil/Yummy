/// <reference types="../@types/jquery" />
// ? =============> Global ===============>
const search = document.getElementById("search")
const contact = document.getElementById("contact")
const categories = document.getElementById("categories")
const Filter = document.getElementById("Filter")
const area = document.getElementById("area")
const ingredients = document.getElementById("ingredients")
const btnSerch = document.getElementById("btnSerch")
const btnCategories = document.getElementById("btnCategories")
const btnContact = document.getElementById("btnContact")
const btnArea = document.getElementById("btnArea")
const btnIngredients = document.getElementById("btnIngredients")

// * =============> Events ===============>
let rowData = document.getElementById("rowData");
let submitBtn;

$(document).ready(() => {
    $(".loading-screen").fadeOut(500);
    $("body").css("overflow", "visible");
});

function openSideNav() {
    $("#inner-box").animate({ width: "toggle" }, 500);
    
    $(".links ul ").removeClass("animate__fadeOutDown");
    $(".links ul li").each(function (index) {
        $(this)
            .addClass("animate__animated animate__fadeInUp")
            .css("animation-delay", index * 200 + "ms");
    });
}

function closeSideNav() {
    $("#inner-box").animate({ width: "toggle" }, 500);

    $(".links ul ").addClass('animate__animated animate__fadeOutDown');
    $(".links ul li").each(function (index) {
        $(this)
            .removeClass("animate__fadeInUp")
            .css("animation-delay", index * 200 + "ms");
    });
}

$(".menuIcon").on("click", function () {
    $(this).toggleClass("fa-bars fa-xmark");

    if ($(".menuIcon").hasClass("fa-bars")) {
        closeSideNav();
    } else {
        openSideNav();
    }
});

btnSerch.addEventListener("click", function(){
  search.classList.replace("d-none", "d-block")
  categories.classList.replace("d-block", "d-none")
  contact.classList.replace("d-block", "d-none")
  area.classList.replace("d-block", "d-none")

  document.getElementById('Filter').classList.replace("d-block", "d-none");
  document.getElementById('details').classList.replace("d-block", "d-none");
  document.getElementById('AreaFilter').classList.replace("d-block", "d-none");
  document.getElementById("ingredients").classList.replace("d-block", "d-none");
  document.getElementById("openMeals").classList.replace("d-block", "d-none");


  $('.menuIcon').toggleClass('fa-bars fa-xmark');
  $("#inner-box").animate({ width: "toggle" }, 500);
    console.log("search");
})


btnArea.addEventListener("click", function(){

  getArea();
  area.classList.replace("d-none", "d-block")
  search.classList.replace("d-block", "d-none")
  contact.classList.replace("d-block", "d-none")
  categories.classList.replace("d-block", "d-none")
  document.getElementById('Filter').classList.replace("d-block", "d-none");
  document.getElementById('details').classList.replace("d-block", "d-none");
  document.getElementById('AreaFilter').classList.replace("d-block", "d-none");
  document.getElementById("ingredients").classList.replace("d-block", "d-none");
  document.getElementById("openMeals").classList.replace("d-block", "d-none");

  
  $('.menuIcon').toggleClass('fa-bars fa-xmark');
  $("#inner-box").animate({ width: "toggle" }, 500);
    console.log("Area");
})


btnCategories.addEventListener("click", function(){
  getCategories();
  categories.classList.replace("d-none", "d-block")
  search.classList.replace("d-block", "d-none")
  contact.classList.replace("d-block", "d-none")
  area.classList.replace("d-block", "d-none")

  document.getElementById('Filter').classList.replace("d-block", "d-none");
  document.getElementById('details').classList.replace("d-block", "d-none");
  document.getElementById('AreaFilter').classList.replace("d-block", "d-none");
  document.getElementById("ingredients").classList.replace("d-block", "d-none");
  document.getElementById("openMeals").classList.replace("d-block", "d-none");

  $('.menuIcon').toggleClass('fa-bars fa-xmark');
  $("#inner-box").animate({ width: "toggle" }, 500);
    console.log("categories");
})

btnContact.addEventListener("click", function(){
  contact.classList.replace("d-none", "d-block")
  search.classList.replace("d-block", "d-none")
  categories.classList.replace("d-block", "d-none")
  area.classList.replace("d-block", "d-none")
  document.getElementById('Filter').classList.replace("d-block", "d-none");
  document.getElementById('details').classList.replace("d-block", "d-none");
  document.getElementById('AreaFilter').classList.replace("d-block", "d-none");
  document.getElementById("ingredients").classList.replace("d-block", "d-none");
  document.getElementById("openMeals").classList.replace("d-block", "d-none");

  $('.menuIcon').toggleClass('fa-bars fa-xmark');
  $("#inner-box").animate({ width: "toggle" }, 500);
    console.log("contact");
})

btnIngredients.addEventListener("click", function(){
  getIngredients()
  ingredients.classList.replace("d-none", "d-block")
  contact.classList.replace("d-block", "d-none")
  search.classList.replace("d-block", "d-none")
  categories.classList.replace("d-block", "d-none")
  area.classList.replace("d-block", "d-none")
  document.getElementById('Filter').classList.replace("d-block", "d-none");
  document.getElementById('details').classList.replace("d-block", "d-none");
  document.getElementById('AreaFilter').classList.replace("d-block", "d-none");
  document.getElementById('openMeals').classList.replace("d-block", "d-none");


  $('.menuIcon').toggleClass('fa-bars fa-xmark');
  $("#inner-box").animate({ width: "toggle" }, 500);
    console.log("ingredients");
})




