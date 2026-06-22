const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const applyForm = document.getElementById("applyForm");
const platformButtons = document.querySelectorAll("[data-platform]");

const whatsappNumber = "40720567098";
const glovoReferral = "https://to.glovoapp.com/a/kh3jq07";

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    if (navMenu) {
      navMenu.classList.remove("active");
    }
  });
});

platformButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const platforma = button.getAttribute("data-platform");
    const platformSelect = document.getElementById("platforma");

    if (platformSelect) {
      platformSelect.value = platforma;
    }

    const formular = document.getElementById("formular");
    if (formular) {
      formular.scrollIntoView({ behavior: "smooth" });
    }
  });
});

if (applyForm) {
  applyForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nume = document.getElementById("nume").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const platforma = document.getElementById("platforma").value;
    const vehicul = document.getElementById("vehicul").value;
    const oras = document.getElementById("oras").value.trim();

    if (!nume || !telefon || !platforma || !vehicul || !oras) {
      alert("Completează toate câmpurile.");
      return;
    }

    if (platforma === "Glovo") {
      window.open(glovoReferral, "_blank");
      return;
    }

    const mesaj =
      "Salut! Vreau să aplic pentru " + platforma + " prin Project X Delivery.\n\n" +
      "Nume: " + nume + "\n" +
      "Telefon: " + telefon + "\n" +
      "Platformă: " + platforma + "\n" +
      "Vehicul: " + vehicul + "\n" +
      "Oraș: " + oras;

    const whatsappUrl =
      "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(mesaj);

    window.open(whatsappUrl, "_blank");
  });
}
