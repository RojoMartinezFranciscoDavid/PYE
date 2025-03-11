document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('grafico').getContext('2d');
    const grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1M-1.67M', '1.67M-2.34M', '2.34M-3.01M', '3.01M-3.68M', '3.68M-4.35M', '4.35M-5.02M', '5.02M-5.69M', '5.69M-6.36M', '6.36M-7.03M', '7.03M-7.70M'],
            datasets: [{
                label: 'Cantidad de Casas',
                data: [13, 6, 12, 18, 12, 15, 9, 7, 3, 5],
                backgroundColor: 'rgba(180, 125, 243)',
                borderColor: 'rgb(180, 125, 243)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
