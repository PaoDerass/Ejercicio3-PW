document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('conversionForm');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const conversionType = document.getElementById('conversionType').value;
        const valor = parseFloat(document.getElementById('valor').value);

        if (isNaN(valor) || valor <= 0) {
            alert("valor incorrecto, ingrese un valor numérico mayor que cero.");
            return;
        }

        let resultado;
        switch (conversionType) {
            case 'kmaM':
                resultado = `${valor} km son ${valor * 1000} metros.`;
                break;
            case 'maCm':
                resultado = `${valor} metros son ${valor * 100} centímetros.`;
                break;
            case 'ftaIn':
                resultado = `${valor} pies son ${valor * 12} pulgadas.`;
                break;
            case 'ydaIn':
                resultado = `${valor} yardas son ${valor * 36} pulgadas.`;
                break;
            default:
                alert("Seleccione un tipo de conversión válido.");
                return;
        }

        resultadoDiv.style.display = 'block';
        resultadoDiv.textContent = resultado;
    });
});
