// Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Configuración de estilo global para las gráficas ---
    // Usamos los colores de nuestras variables CSS
    const colors = {
        yellow: '#ffed00',
        darkPurple: '#4a148c', // Un guiño al Joker/villanos
        grey: '#b0b0b0',
        darkBg: '#1a1a1a'
    };

    Chart.defaults.color = colors.grey;
    Chart.defaults.font.family = "'Roboto', sans-serif";
    Chart.defaults.borderColor = '#333'; // Color de las líneas de la cuadrícula

    // =========================================
    // GRÁFICA 1: Tendencia de Ventas (Línea)
    // =========================================
    const ctxTrend = document.getElementById('trendChart').getContext('2d');

    // Datos ficticios de ventas totales por año (en millones)
    const dataYears = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
    const dataTotalSales = [12.5, 13.2, 14.8, 14.1, 15.5, 17.2, 13.8, 14.5, 15.1, 16.3];

    const trendChart = new Chart(ctxTrend, {
        type: 'line',
        data: {
            labels: dataYears,
            datasets: [{
                label: 'Ventas Totales del Universo Bat (Millones)',
                data: dataTotalSales,
                // Estilo de la línea para que parezca un monitor de la Baticueva
                borderColor: colors.yellow,
                backgroundColor: 'rgba(255, 237, 0, 0.1)', // Relleno amarillo transparente debajo de la línea
                borderWidth: 3,
                pointBackgroundColor: colors.yellow,
                pointBorderColor: '#000',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3, // Suaviza un poco la línea
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Importante para que se adapte al contenedor CSS
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                   backgroundColor: colors.darkBg,
                   titleColor: colors.yellow,
                   bodyColor: '#fff',
                   borderColor: colors.yellow,
                   borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    title: {
                        display: true,
                        text: 'Volumen (Millones)'
                    }
                },
                x: {
                     grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                }
            }
        }
    });


    // =========================================
    // GRÁFICA 2: Comparativa de Títulos (Barras)
    // =========================================
    const ctxComparison = document.getElementById('comparisonChart').getContext('2d');

    // Datos ficticios: Ventas acumuladas en los últimos 10 años de títulos específicos
    const comparisonData = {
        labels: ['La Broma Asesina (Reediciones)', 'Batman: Silencio', 'Luz de Gas', 'Serie Regular Actual', 'Dark Nights: Metal'],
        datasets: [{
            label: 'Ventas Acumuladas 10 Años',
            data: [8.5, 7.2, 4.1, 11.5, 9.8],
            // Usamos colores distintos para diferenciar clásicos de modernos
            backgroundColor: [
                colors.darkPurple, // Clásico oscuro
                '#29465B', // Silencio (azul noche)
                '#8d6e63', // Luz de gas (tono sepia/antiguo)
                colors.yellow,  // Serie actual (el amarillo brillante)
                '#d32f2f' // Evento moderno (rojo alerta)
            ],
            borderColor: '#000',
            borderWidth: 2
        }]
    };

    const comparisonChart = new Chart(ctxComparison, {
        type: 'bar',
        data: comparisonData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y', // Hacemos que las barras sean horizontales para mejor lectura de títulos largos
            plugins: {
                 legend: {
                    display: false // No necesitamos leyenda aquí, los ejes lo explican
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    title: {
                        display: true,
                        text: 'Millones de Unidades'
                    }
                },
                y: {
                    grid: {
                         display: false
                    },
                    ticks: {
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });

    // =========================================
    // GRÁFICA 3: Comparativa Mensual por Año (La Broma Asesina)
    // =========================================
    // Datos ficticios de ventas mensuales para cada año (porcentajes respecto al mes anterior)
    const monthlyDataByYear = {
        '2002': [0, 5.2, -3.1, 8.5, 12.3, -2.4, 6.7, 4.1, -1.8, 3.5, 7.2, 15.8],
        '2003': [0, 6.1, 2.3, 4.8, 9.2, 1.5, 5.3, 3.2, -2.1, 6.8, 8.4, 18.2],
        '2004': [0, 3.2, -1.5, 7.3, 10.1, 0.8, 4.9, 2.6, 1.4, 5.2, 6.9, 12.5],
        '2005': [0, 4.7, 1.2, 6.5, 11.8, 2.3, 7.1, 5.4, -0.9, 4.3, 9.6, 14.2],
        '2006': [0, 5.8, 3.1, 5.2, 8.9, 3.7, 6.2, 4.8, 2.1, 7.5, 10.3, 16.7],
        '2007': [0, 6.3, 2.8, 7.1, 9.5, 1.9, 5.8, 3.9, 0.6, 6.1, 8.7, 13.4],
        '2008': [0, 4.1, 0.5, 6.8, 10.2, 2.6, 4.3, 2.1, -1.2, 3.8, 7.1, 11.9],
        '2009': [0, 5.9, 3.4, 8.2, 11.5, 4.1, 6.9, 5.3, 1.7, 8.2, 9.8, 15.3],
        '2010': [0, 6.2, 2.7, 5.9, 9.8, 3.2, 5.4, 3.7, -0.3, 5.1, 8.9, 12.6],
        '2011': [0, 4.8, 1.1, 7.4, 10.6, 2.9, 6.1, 4.2, 1.8, 4.7, 7.3, 14.1],
        '2012': [0, 5.5, 2.3, 6.7, 8.4, 1.6, 5.7, 3.5, -0.8, 6.4, 9.2, 17.3],
        '2013': [0, 6.7, 4.2, 7.8, 10.9, 3.8, 7.2, 5.1, 2.4, 7.9, 10.5, 18.9],
        '2014': [0, 5.1, 1.9, 6.3, 9.7, 2.2, 4.8, 2.9, 0.9, 5.6, 8.1, 13.7],
        '2015': [0, 7.2, 3.5, 8.1, 11.3, 4.6, 7.8, 6.2, 3.1, 8.4, 11.2, 19.2],
        '2016': [0, 4.3, 0.7, 5.4, 9.1, 1.8, 3.9, 2.5, -1.4, 4.2, 6.8, 11.5],
        '2017': [0, 6.8, 3.9, 7.5, 10.4, 3.5, 6.5, 4.7, 1.3, 7.1, 9.9, 15.8],
        '2018': [0, 5.6, 2.1, 6.9, 10.7, 2.8, 5.2, 3.6, 0.5, 5.8, 8.4, 14.2],
        '2019': [0, 8.1, 5.3, 9.2, 12.5, 5.2, 8.7, 7.3, 4.1, 9.6, 12.1, 20.5],
        '2020': [0, 3.2, -2.8, 4.1, 7.5, 0.9, 2.6, 1.3, -3.2, 2.1, 4.7, 8.3],
        '2021': [0, 5.4, 1.7, 6.8, 10.2, 3.1, 5.9, 4.1, 1.6, 6.2, 8.7, 13.5],
        '2022': [0, 6.1, 2.9, 7.3, 9.8, 2.7, 6.4, 4.8, 1.9, 7.1, 9.5, 14.8],
        '2023': [0, 5.7, 2.4, 6.5, 10.1, 3.3, 5.8, 4.2, 0.8, 6.6, 8.9, 13.2],
        '2024': [0, 6.3, 3.2, 7.1, 10.9, 3.8, 6.7, 5.1, 2.3, 7.4, 10.1, 15.6],
        '2025': [0, 5.9, 2.6, 6.4, 9.7, 2.9, 5.5, 3.8, 1.1, 5.9, 8.2, 12.9],
        '2026': [0, 6.5, 3.7, 7.8, 11.2, 4.1, 7.1, 5.4, 2.8, 8.3, 10.7, 16.4]
    };

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    let monthlyComparisonChart; // Variable global para poder actualizar el gráfico

    // Función para crear/actualizar la gráfica mensual
    function updateMonthlyChart(year) {
        const ctx = document.getElementById('monthlyComparisonChart').getContext('2d');
        
        // Destruir gráfica anterior si existe
        if (monthlyComparisonChart) {
            monthlyComparisonChart.destroy();
        }

        const monthlyData = monthlyDataByYear[year];

        monthlyComparisonChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: meses,
                datasets: [{
                    label: `Variación de Ventas - La Broma Asesina ${year} (%)`,
                    data: monthlyData,
                    // Usamos colores dinámicos: verde para positivos, rojo para negativos
                    backgroundColor: monthlyData.map(val => {
                        if (val > 8) return '#00c853'; // Verde intenso para variaciones altas
                        if (val > 4) return '#66bb6a'; // Verde medio
                        if (val > 0) return '#81c784'; // Verde claro
                        if (val === 0) return colors.grey; // Gris para cero
                        if (val > -2) return '#ef9a9a'; // Rojo claro
                        return '#d32f2f'; // Rojo intenso para caídas
                    }),
                    borderColor: '#000',
                    borderWidth: 2,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                weight: 'bold'
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: colors.darkBg,
                        titleColor: colors.yellow,
                        bodyColor: '#fff',
                        borderColor: colors.yellow,
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return `Variación: ${context.parsed.y.toFixed(2)}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value.toFixed(1) + '%';
                            }
                        },
                        title: {
                            display: true,
                            text: 'Porcentaje de Variación (%)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        }
                    }
                }
            }
        });
    }

    // Inicializar con el año 2026 por defecto
    updateMonthlyChart('2026');

    // Event listener para cambiar la gráfica al seleccionar un año
    const yearSelector = document.getElementById('yearSelector');
    yearSelector.addEventListener('change', function(e) {
        updateMonthlyChart(e.target.value);
    });
});