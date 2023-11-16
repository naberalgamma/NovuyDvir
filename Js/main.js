let menuMenuBox = document.querySelector(".menuMenuBox");
let menuItems = menuMenuBox.querySelectorAll(".menuItem");

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    var current = document.querySelectorAll(".menuItemActive");
    current[0].className = current[0].className.replace(" menuItemActive", "");
    this.className += " menuItemActive";
  });
}

// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   },
// });
let footerMenuBox = document.querySelector(".footerMenuBox");

// let footerMenuItem = footerMenuBox.querySelectorAll(".footerMenuItem");
// for (var i = 0; i < footerMenuItem.length; i++) {
//   footerMenuItem[i].addEventListener("click", function () {
//     var current = document.querySelectorAll(".footerMenuItemActive");
//     current[0].className = current[0].className.replace(
//       " footerMenuItemActive",
//       ""
//     );
//     this.className += " footerMenuItemActive";
//   });
// }

//-----------location google---------------------------
let footerPic = document.querySelector(".locationMap");
footerPic?.addEventListener("click", () => {
  window.open(
    "https://www.google.com/maps/place/%D0%A2%D0%9E%D0%92+%D0%9D%D0%9E%D0%92%D0%98%D0%99-%D0%94%D0%92%D0%86%D0%A0/@50.6112487,26.3086376,18.38z/data=!4m6!3m5!1s0x472f137f4cf6e0ed:0x66e44472359e001a!8m2!3d50.610753!4d26.3073363!16s%2Fg%2F11gblf3060?entry=ttu"
  );
});

const burger = document.querySelector(".menuBurger");
const menuBox = document.querySelector(".menuMenuBox");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menuBox.classList.toggle("open");
  body.classList.toggle("lock");
});

function test(e) {
  console.log(e, "hello world");
  e.preventDefault();
}
// const tes = document.querySelector(".test");
// tes.addEventListener("click", () => {
//   console.log("test");
// });

//--------call pop up-------------------------------

const closePhoneBox = document.querySelector(".closeIcon");
const phoneBox = document.querySelector(".CallBox");
const showPhoneBox = document.querySelector(".manuLink");
const showPhoneBox2 = document.querySelector(".headerCalcPrice");
const showPhoneBox3 = document.querySelector(".showPhoneBox3");
const showPhoneBox4 = document.querySelector(".showPhoneBox4");
const showPhoneBox5 = document.querySelector(".showPhoneBox5");
const showBoxAbout = document.querySelector(".showBoxAbout");
const productCall = document.querySelector(".productInfoDetailCall");

closePhoneBox?.addEventListener("click", hideModal);
showPhoneBox?.addEventListener("click", showModal);
showPhoneBox2?.addEventListener("click", showModal);
showPhoneBox3?.addEventListener("click", showModal);
showPhoneBox4?.addEventListener("click", showModal);
showPhoneBox5?.addEventListener("click", showModal);
showBoxAbout?.addEventListener("click", showModal);
productCall?.addEventListener("click", showModal);

function hideModal() {
  phoneBox.classList.remove("active");
}
function showModal() {
  phoneBox.classList.add("active");
}

//-------------copy text-----------------
let text = document.querySelector(".callNumber").innerHTML;

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    alert("Номер скопійовано");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
//--------------- navigate to call form ---------------------
const getCall = document.querySelector(".headerGetCall");
const getCall2 = document.querySelector(".getCall");
const ab = document.querySelector(".consultation");

getCall?.addEventListener("click", scrollToConsultation);
getCall2?.addEventListener("click", scrollToConsultation);
function scrollToConsultation() {
  ab.scrollIntoView({ block: "center", behavior: "smooth" });
}

//------production detail-------------------------
// ------------------product1----------------------------
const MeshWelded1 = document.querySelector(".weldedMeshInfoWrapper1");
const meshBtn1 = document.querySelector(".meshBtn1");
const meshClose1 = document.querySelector(".meshClose1");
const product1 = document.querySelector(".product1");

meshClose1?.addEventListener("click", hideProduct1);
meshClose1?.addEventListener("click", scrollToCard1);
meshBtn1?.addEventListener("click", showProduct1);
meshBtn1?.addEventListener("click", scrollToProduct);

function hideProduct1() {
  MeshWelded1.classList.remove("active");
  product1.classList.remove("active");
}
function showProduct1() {
  MeshWelded1.classList.add("active");
  product1.classList.add("active");
}
// ------------------product2----------------------------
const MeshWelded2 = document.querySelector(".weldedMeshInfoWrapper2");
const meshBtn2 = document.querySelector(".meshBtn2");
const meshClose2 = document.querySelector(".meshClose2");
const product2 = document.querySelector(".product2");

meshClose2?.addEventListener("click", hideProduct2);
meshClose2?.addEventListener("click", scrollToCard2);
meshBtn2?.addEventListener("click", showProduct2);
meshBtn2?.addEventListener("click", scrollToProduct);

function hideProduct2() {
  MeshWelded2.classList.remove("active");
  product2.classList.remove("active");
}
function showProduct2() {
  MeshWelded2.classList.add("active");
  product2.classList.add("active");
}
// ------------------product3----------------------------
const MeshWelded3 = document.querySelector(".weldedMeshInfoWrapper3");
const meshBtn3 = document.querySelector(".meshBtn3");
const meshClose3 = document.querySelector(".meshClose3");
const product3 = document.querySelector(".product3");

meshClose3?.addEventListener("click", hideProduct3);
meshClose3?.addEventListener("click", scrollToCard3);
meshBtn3?.addEventListener("click", showProduct3);
meshBtn3?.addEventListener("click", scrollToProduct);

function hideProduct3() {
  MeshWelded3.classList.remove("active");
  product3.classList.remove("active");
}
function showProduct3() {
  MeshWelded3.classList.add("active");
  product3.classList.add("active");
}
// ------------------product4----------------------------
const MeshWelded4 = document.querySelector(".weldedMeshInfoWrapper4");
const meshBtn4 = document.querySelector(".meshBtn4");
const meshClose4 = document.querySelector(".meshClose4");
const product4 = document.querySelector(".product4");

meshClose4?.addEventListener("click", hideProduct4);
meshClose4?.addEventListener("click", scrollToCard4);
meshBtn4?.addEventListener("click", showProduct4);
meshBtn4?.addEventListener("click", scrollToProduct);

function hideProduct4() {
  MeshWelded4.classList.remove("active");
  product4.classList.remove("active");
}
function showProduct4() {
  MeshWelded4.classList.add("active");
  product4.classList.add("active");
}
// ------------------product5----------------------------
const MeshWelded5 = document.querySelector(".weldedMeshInfoWrapper5");
const meshBtn5 = document.querySelector(".meshBtn5");
const meshClose5 = document.querySelector(".meshClose5");
const product5 = document.querySelector(".product5");

meshClose5?.addEventListener("click", hideProduct5);
meshClose5?.addEventListener("click", scrollToCard5);
meshBtn5?.addEventListener("click", showProduct5);
meshBtn5?.addEventListener("click", scrollToProduct);

function hideProduct5() {
  MeshWelded5.classList.remove("active");
  product5.classList.remove("active");
}
function showProduct5() {
  MeshWelded5.classList.add("active");
  product5.classList.add("active");
}
// ------------------product6----------------------------
const MeshWelded6 = document.querySelector(".weldedMeshInfoWrapper6");
const meshBtn6 = document.querySelector(".meshBtn6");
const meshClose6 = document.querySelector(".meshClose6");
const product6 = document.querySelector(".product6");

meshClose6?.addEventListener("click", hideProduct6);
meshClose6?.addEventListener("click", scrollToCard6);
meshBtn6?.addEventListener("click", showProduct6);
meshBtn6?.addEventListener("click", scrollToProduct);

function hideProduct6() {
  MeshWelded6.classList.remove("active");
  product6.classList.remove("active");
}
function showProduct6() {
  MeshWelded6.classList.add("active");
  product6.classList.add("active");
}
// ------------------product7----------------------------
const MeshWelded7 = document.querySelector(".weldedMeshInfoWrapper7");
const meshBtn7 = document.querySelector(".meshBtn7");
const meshClose7 = document.querySelector(".meshClose7");
const product7 = document.querySelector(".product7");

meshClose7?.addEventListener("click", hideProduct7);
meshClose7?.addEventListener("click", scrollToCard7);
meshBtn7?.addEventListener("click", showProduct7);
meshBtn7?.addEventListener("click", scrollToProduct);

function hideProduct7() {
  MeshWelded7.classList.remove("active");
  product7.classList.remove("active");
}
function showProduct7() {
  MeshWelded7.classList.add("active");
  product7.classList.add("active");
}
// ------------------product8----------------------------
const MeshWelded8 = document.querySelector(".weldedMeshInfoWrapper8");
const meshBtn8 = document.querySelector(".meshBtn8");
const meshClose8 = document.querySelector(".meshClose8");
const product8 = document.querySelector(".product8");

meshClose8?.addEventListener("click", hideProduct8);
meshClose8?.addEventListener("click", scrollToCard8);
meshBtn8?.addEventListener("click", showProduct8);
meshBtn8?.addEventListener("click", scrollToProduct);

function hideProduct8() {
  MeshWelded8.classList.remove("active");
  product8.classList.remove("active");
}
function showProduct8() {
  MeshWelded8.classList.add("active");
  product8.classList.add("active");
}
// ------------------product9----------------------------
const MeshWelded9 = document.querySelector(".weldedMeshInfoWrapper9");
const meshBtn9 = document.querySelector(".meshBtn9");
const meshClose9 = document.querySelector(".meshClose9");
const product9 = document.querySelector(".product9");

meshClose9?.addEventListener("click", hideProduct9);
meshClose9?.addEventListener("click", scrollToCard9);
meshBtn9?.addEventListener("click", showProduct9);
meshBtn9?.addEventListener("click", scrollToProduct);

function hideProduct9() {
  MeshWelded9.classList.remove("active");
  product9.classList.remove("active");
}
function showProduct9() {
  MeshWelded9.classList.add("active");
  product9.classList.add("active");
}
// ------------------product10----------------------------
const MeshWelded10 = document.querySelector(".weldedMeshInfoWrapper10");
const meshBtn10 = document.querySelector(".meshBtn10");
const meshClose10 = document.querySelector(".meshClose10");
const product10 = document.querySelector(".product10");

meshClose10?.addEventListener("click", hideProduct10);
meshClose10?.addEventListener("click", scrollToCard10);
meshBtn10?.addEventListener("click", showProduct10);
meshBtn10?.addEventListener("click", scrollToProduct);

function hideProduct10() {
  MeshWelded10.classList.remove("active");
  product10.classList.remove("active");
}
function showProduct10() {
  MeshWelded10.classList.add("active");
  product10.classList.add("active");
}

function scrollToProduct() {
  MeshWelded1?.scrollIntoView({ block: "start", behavior: "smooth" });
  MeshWelded2?.scrollIntoView({ block: "start", behavior: "smooth" });
  MeshWelded3?.scrollIntoView({ block: "start", behavior: "smooth" });
  MeshWelded4?.scrollIntoView({ block: "start", behavior: "smooth" });
  MeshWelded5?.scrollIntoView({ block: "start", behavior: "smooth" });
  MeshWelded6?.scrollIntoView({ block: "start", behavior: "smooth" });
  MeshWelded7?.scrollIntoView({ block: "start", behavior: "smooth" });
  MeshWelded8?.scrollIntoView({ block: "start", behavior: "smooth" });
  MeshWelded9?.scrollIntoView({ block: "start", behavior: "smooth" });
  MeshWelded10?.scrollIntoView({ block: "start", behavior: "smooth" });
}
function scrollToCard1() {
  product1?.scrollIntoView({ block: "start", behavior: "smooth" });
}
function scrollToCard2() {
  product2?.scrollIntoView({ block: "start", behavior: "smooth" });
}
function scrollToCard3() {
  product3?.scrollIntoView({ block: "start", behavior: "smooth" });
}
function scrollToCard4() {
  product4?.scrollIntoView({ block: "start", behavior: "smooth" });
}
function scrollToCard5() {
  product5?.scrollIntoView({ block: "start", behavior: "smooth" });
}
function scrollToCard6() {
  product6?.scrollIntoView({ block: "start", behavior: "smooth" });
}
function scrollToCard7() {
  product7?.scrollIntoView({ block: "start", behavior: "smooth" });
}
function scrollToCard8() {
  product8?.scrollIntoView({ block: "start", behavior: "smooth" });
}
function scrollToCard9() {
  product9?.scrollIntoView({ block: "start", behavior: "smooth" });
}
function scrollToCard10() {
  product10?.scrollIntoView({ block: "start", behavior: "smooth" });
}
//-------------------------orderGoods----------------------------------------------------

const closeIconProduction = document.querySelector(".closeIconProduction");
const orderGoodsWrapper = document.querySelector(".orderGoodsWrapper");
const orderGoods = document.querySelector(".orderGoods");
const orderGoods2 = document.querySelector(".orderGoods2");
const orderGoods3 = document.querySelector(".orderGoods3");
const orderGoods4 = document.querySelector(".orderGoods4");
const orderGoods5 = document.querySelector(".orderGoods5");
const orderGoods6 = document.querySelector(".orderGoods6");
const orderGoods7 = document.querySelector(".orderGoods7");
const orderGoods8 = document.querySelector(".orderGoods8");
const orderGoods9 = document.querySelector(".orderGoods9");
const orderGoods10 = document.querySelector(".orderGoods10");

closeIconProduction?.addEventListener("click", hideModalOrder);
orderGoods?.addEventListener("click", showModalOrder);
orderGoods2?.addEventListener("click", showModalOrder);
orderGoods3?.addEventListener("click", showModalOrder);
orderGoods4?.addEventListener("click", showModalOrder);
orderGoods5?.addEventListener("click", showModalOrder);
orderGoods6?.addEventListener("click", showModalOrder);
orderGoods7?.addEventListener("click", showModalOrder);
orderGoods8?.addEventListener("click", showModalOrder);
orderGoods9?.addEventListener("click", showModalOrder);
orderGoods10?.addEventListener("click", showModalOrder);

function hideModalOrder() {
  orderGoodsWrapper.classList.remove("active");
}
function showModalOrder() {
  orderGoodsWrapper.classList.add("active");
}

const form = document.querySelector("#form");
const nameInput = document.querySelector("[name=name]");
const phone = document.querySelector("[name=phone]");
const footerForm = document.querySelector("#footerForm");
const email = document.querySelector("[name=email]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(nameInput.value);
  console.log(phone.value);

  fetch("https://novuy-dvir.vercel.app/api/form", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify({ name: nameInput.value, phone: phone.value }), // body data type must match "Content-Type" header
  }).then((response) => {
    console.log(response.status);
    if (response.status === 200) {
      alert("Дані відправлено!");
      nameInput.value = "";
      phone.value = "";
    } else {
      console.log("somthing went wrong");
    }
  });
});
footerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("https://novuy-dvir.vercel.app/api/form", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify({ name: nameInput.value, email: email.value }), // body data type must match "Content-Type" header
  }).then((response) => {
    console.log(response.status);
    if (response.status === 200) {
      alert("Дані відправлено!");
      nameInput.value = "";
      email.value = "";
    } else {
      console.log("somthing went wrong");
    }
  });
});
