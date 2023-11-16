import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../ui/components/surfaces/SideBar";
import Chart from 'chart.js/auto';

function MonthlyGains() {
    const [selectedMonth, setSelectedMonth] = useState("Janeiro");

    useEffect(() => {
        const ctx = document.getElementById("myChart");
        const chart = createChart(ctx, selectedMonth);

        // Event listener for chart click
        const onClickHandler = (e) => {
            const canvasPosition = getRelativePosition(e, chart);

            // Check if scales are available and not undefined
            if (
                chart &&
                chart.options &&
                chart.options.scales &&
                chart.options.scales.x &&
                chart.options.scales.y
            ) {
                const dataX = chart.options.scales.x.getValueForPixel(canvasPosition.x);
                const dataY = chart.options.scales.y.getValueForPixel(canvasPosition.y);
                // Do something with dataX and dataY
            }
        };

        chart.options.onClick = onClickHandler;

        return () => {
            // Cleanup on component unmount
            chart.destroy();
        };
    }, [selectedMonth]);

    return (
        <>
            <Helmet title={`Ganhos mensais - ${selectedMonth}`} />
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-4">
                            <div className="card-header">
                                <div className="row">
                                    <h4 className="card-title text-center">Ganhos Mensais</h4>
                                    <select
                                        className="form-control"
                                        value={selectedMonth}
                                        onChange={(e) => setSelectedMonth(e.target.value)}>
                                        <option value="Janeiro">Janeiro</option>
                                        <option value="Fevereiro">Fevereiro</option>
                                        <option value="Março">Março</option>
                                        <option value="Abril">Abril</option>
                                        <option value="Maio">Maio</option>
                                        <option value="Junho">Junho</option>
                                        <option value="Julho">Julho</option>
                                        <option value="Agosto">Agosto</option>
                                        <option value="Setembro">Setembro</option>
                                        <option value="Outubro">Outubro</option>
                                        <option value="Novembro">Novembro</option>
                                        <option value="Dezembro">Dezembro</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-body">
                                <canvas id="myChart" width="200" height="80"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function createChart(ctx, selectedMonth) {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map((_, index) => index.toString()),
            datasets: [{ data }],
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                },
                y: {
                    type: 'linear',
                },
            },
        },
    });
}

function getRelativePosition(event, chart) {
    // Implemente sua lógica para obter a posição relativa
    // Esta função deve retornar um objeto com as coordenadas x e y
    // Exemplo: { x: event.clientX, y: event.clientY }
}

export default MonthlyGains;
