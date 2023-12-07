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
                                        defaultValue={selectedMonth}
                                        onChange={(e) => setSelectedMonth(e.target.value)}>
                                        <option defaultValue="Janeiro">Janeiro</option>
                                        <option defaultValue="Fevereiro">Fevereiro</option>
                                        <option defaultValue="Março">Março</option>
                                        <option defaultValue="Abril">Abril</option>
                                        <option defaultValue="Maio">Maio</option>
                                        <option defaultValue="Junho">Junho</option>
                                        <option defaultValue="Julho">Julho</option>
                                        <option defaultValue="Agosto">Agosto</option>
                                        <option defaultValue="Setembro">Setembro</option>
                                        <option defaultValue="Outubro">Outubro</option>
                                        <option defaultValue="Novembro">Novembro</option>
                                        <option defaultValue="Dezembro">Dezembro</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-body">
                                <canvas id="myChart" width="200" height="40"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button>Exportar ganhos mensais</button>
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
