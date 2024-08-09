import formatCardNumber from "./formatCardNumber.js";

export default function printDeck1(arrToRender, siteToPrint) {
    let template = '';
    arrToRender.forEach(card => {
        const cardNumber = formatCardNumber(card.number);
        const cardColor = (card.icon === "♥" || card.icon === "♦") ? 'text-danger' : 'text-dark';
        
        template += `
        <div class="card ${cardColor} border-dark m-1" style="width: 60px; height: 90px;">
            <div class="card-body d-flex flex-column justify-content-center align-items-center p-1">
                <h6 class="card-title m-0">${cardNumber}</h6>
                <h6 class="card-text m-0">${card.icon}</h6>
            </div>
        </div>
        `;
    });
    siteToPrint.innerHTML = `<div class="d-flex flex-wrap justify-content-center">${template}</div>`;
}