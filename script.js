const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const calcBtn = document.getElementById("calcBtn");

menuBtn.onclick = function () {
  navMenu.classList.toggle("active");
};

calcBtn.onclick = function () {
  const zile = Number(document.getElementById("zile").value);
  const castig = Number(document.getElementById("castig").value);
  const cash = Number(document.getElementById("cash").value);

  const total = zile * castig - cash;

  document.getElementById("rezultat").innerText = total + " LEI";
};
