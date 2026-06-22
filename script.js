// PROJECT X DELIVERY V5

// MENIU MOBIL
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// FORMULAR WHATSAPP
const form = document.getElementById("applyForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nume = document.getElementById("nume").value;
    const telefon = document.getElementById("telefon").value;
    const platforma = document.getElementById("platforma").value;
    const vehicul = document.getElementById("vehicul").value;
    const oras = document.getElementById("oras").value;

    const mesaj =
`🚀 Aplicare Project X Delivery

👤 Nume: ${nume}
📞 Telefon: ${telefon}
📦 Platformă: ${platforma}
🛵 Vehicul: ${vehicul}
📍 Oraș: ${oras}

Salut! Doresc mai multe informații despre colaborarea cu Project X Delivery.`;

    const whatsappNumber = "40720567098";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mesaj)}`;

    window.open(whatsappURL, "_blank");
  });
}

// SCROLL SMOOTH
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
