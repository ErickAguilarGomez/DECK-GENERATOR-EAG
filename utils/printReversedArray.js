import formatCardNumber from "./formatCardNumber.js";

export default function printReversedArray(reversedArray, siteToPrint) {
    let template = '';

    reversedArray.forEach((state) => {
        // Parsear el estado actual en objetos con número e ícono
        const items = state.split(', ').map(item => {
            const [number, icon] = item.split(' (');
            return {
                number: parseInt(number, 10),
                icon: icon ? icon.replace(')', '') : ''
            };
        });

        // Generar el HTML para cada número e ícono en el estado actual
        const cards = items.map(item => {
            // Determinar el color basado en el ícono
            const textColor = (item.icon === '♥' || item.icon === '♦') ? 'text-danger' : 'text-dark';
            const borderColor = textColor; // Usar el mismo color para el borde
            
            return `
                <div class="card ${textColor} border-${borderColor} m-1" style="width: 60px; height: 90px;">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center p-1">
                        <h6 class="card-text m-0">${formatCardNumber(item.number)}</h6>
                        <span style="font-size: 24px;">${item.icon}</span>
                    </div>
                </div>
            `;
        }).join('');
        
        // Agregar las tarjetas al template
        template += `<div class="d-flex flex-wrap justify-content-center">${cards}</div>`;
    });

    siteToPrint.innerHTML = template;
}


