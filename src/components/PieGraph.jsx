import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactApexChart from "react-apexcharts";

const PieGraph = () => {
    const dataPie = useSelector((state) => state.ui.data);

    const options = {
        chart: {
            type: "Pie",
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    return (
        <div>
            <h2 className="text-center">Pie Graph</h2>

            <ReactApexChart options={options} series={dataPie} type="donut" />
        </div>
    );
};

export default PieGraph;
