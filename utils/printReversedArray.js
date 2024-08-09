import formatCardNumber from "./formatCardNumber.js";

export default function printReversedArray(reversedArray, siteToPrint) {
  let template = "";
  reversedArray.forEach((innerArray) => {
    let innerTemplate =
      '<div class="d-flex flex-wrap justify-content-center mb-4">';
    innerArray.forEach((card) => {
      const cardNumber = formatCardNumber(card.number);
      const cardColor =
        card.icon === "♥" || card.icon === "♦" ? "text-danger" : "text-dark";

      innerTemplate += `
            <div class="card ${cardColor} border-dark m-1" style="width: 60px; height: 90px;">
                <div class="card-body d-flex flex-column justify-content-center align-items-center p-1">
                    <h6 class="card-title m-0">${cardNumber}</h6>
                    <h6 class="card-text m-0" style="font-size: 24px;">${card.icon}</h6>
                </div>
            </div>
            `;
    });
    innerTemplate += "</div>";
    template += innerTemplate;
  });
  siteToPrint.innerHTML = template;
}
