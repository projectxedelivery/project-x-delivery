function calculeazaCastig() {
  const castigZi = Number(document.getElementById("castigZi").value);
  const zile = Number(document.getElementById("zile").value);
  const rezultat = document.getElementById("rezultat");

  if (!castigZi || !zile) {
    rezultat.innerText = "Completează ambele câmpuri.";
    return;
  }

  const castigSaptamanal = castigZi * zile;
  const castigLunar = castigSaptamanal * 4;

  rezultat.innerText =
    `Câștig estimat: ${castigSaptamanal} lei / săptămână și aproximativ ${castigLunar} lei / lună.`;
}
