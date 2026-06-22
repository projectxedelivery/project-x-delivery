const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const applyForm = document.getElementById("applyForm");

const whatsappNumber = "40720567098";

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

function calculeazaVenit() {
  const zile = Number(document.getElementById("zile").value);
  const comenzi = Number(document.getElementById("comenzi").value);
  const valoare = Number(document.getElementById("valoare").value);
  const cash = Number(document.getElementById("cash").value);
  const rezultat = document.getElementById("rezultat");

  if (!zile || !comenzi || !valoare || zile < 1 || comenzi < 1 || valoare < 1) {
    rezultat.textContent = "Completează corect toate câmpurile pentru calcul.";
    return;
  }

  const venitSaptamanal = zile * comenzi * valoare + cash;
  const venitLunar = venitSaptamanal * 4;

  rezultat.innerHTML = `
    Estimare săptămânală: ${venitSaptamanal.toLocaleString("ro-RO")} lei<br>
    Estimare lunară: ${venitLunar.toLocaleString("ro-RO")} lei
  `;
}

applyForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nume = document.getElementById("nume").value.trim();
  const telefon = document.getElementById("telefon").value.trim();
  const oras = document.getElementById("oras").value.trim();
  const transport = document.getElementById("transport").value;
  const platforma = document.getElementById("platforma").value;
  const mesajExtra = document.getElementById("mesaj").value.trim();

  if (!nume || !telefon || !oras || !transport || !platforma) {
    alert("Completează toate câmpurile obligatorii.");
    return;
  }

  const mesaj = `
Salut! Vreau să aplic pentru Project X Delivery.

Nume: ${nume}
Telefon: ${telefon}
Oraș: ${oras}
Mijloc de transport: ${transport}
Platformă dorită: ${platforma}
Mesaj: ${mesajExtra || "Nu am adăugat mesaj suplimentar."}
  `;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mesaj)}`;

  window.location.href = whatsappUrl;
});
