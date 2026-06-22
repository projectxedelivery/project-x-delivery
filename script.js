const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const calcBtn = document.getElementById("calcBtn");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

function calculeazaVenit() {
  const zile = Number(document.getElementById("zile").value);
  const castig = Number(document.getElementById("castig").value);
  const cash = Number(document.getElementById("cash").value || 0);
  const rezultat = document.getElementById("rezultat");

  if (!zile || !castig) {
    rezultat.innerText = "Completează câmpurile";
    return;
  }

  const total = (zile * castig) - cash;
  rezultat.innerText = total.toLocaleString("ro-RO") + " LEI";
}

if (calcBtn) {
  calcBtn.addEventListener("click", calculeazaVenit);
}

calculeazaVenit();
