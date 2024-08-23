document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['3 horas', '2.5 - 1.5 horas', '1.5 horas'],
            datasets: [
                {
                    label: '3 horas',
                    data: [323, 0, 0],
                    backgroundColor: '#FF0000', 
                    borderColor: '#FF0000',
                    borderWidth: 1.5
                },
                {
                    label: '2.5 - 1.5 horas',
                    data: [0, 123, 0],
                    backgroundColor: '#FF8000',
                    borderColor: '#FF8000',
                    borderWidth: 1.5
                },
                {
                    label: '1.5 horas',
                    data: [0, 0, 12],
                    backgroundColor: '#008000', 
                    borderColor: '#008000',
                    borderWidth: 1.5
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        autoSkip: false
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        callback: function(value) {
                            // Ocultar ceros en el eje y
                            return value === 0 ? '' : value;
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#000',
                        font: {
                            size: 14,
                            family: 'Arial',
                            weight: 'bold'
                        },
                        boxWidth: 20,
                        padding: 10
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.label + ': ' + context.raw;
                        }
                    }
                },
                datalabels: {
                    color: '#000',
                    font: {
                        weight: 'bold',
                        size: 12
                    },
                    anchor: 'end',
                    align: 'start',
                    offset: -10,
                    display: function (context) {
                        // Mostrar solo las etiquetas para los valores mayores que 0
                        return context.dataset.data[context.dataIndex] > 0;
                    }
                }
            },
            elements: {
                bar: {
                    barThickness: 40,
                    categoryPercentage: 0.8,
                    barPercentage: 0.9
                }
            }
        },
        plugins: [ChartDataLabels] // Asegúrate de incluir el plugin de Data Labels
    });

    // Datos iniciales
    let dataValues = [323, 123, 12];

    // Función para actualizar los datos
    function updateData() {
        dataValues = dataValues.map(value => value + Math.floor(Math.random() * 5) - 2); // Simulación de cambios

        // Actualizar los datos del gráfico
        myChart.data.datasets[0].data = [dataValues[0], 0, 0];
        myChart.data.datasets[1].data = [0, dataValues[1], 0];
        myChart.data.datasets[2].data = [0, 0, dataValues[2]];
        myChart.update();

        document.getElementById('3 horas').textContent = dataValues[0];
        document.getElementById('2.5 - 1.5 horas').textContent = dataValues[1];
        document.getElementById('1.5 horas').textContent = dataValues[2];
    }

    // Actualizar los datos cada 3 horas (10800000 ms)
    setInterval(updateData, 10800000);

    updateData();
});



