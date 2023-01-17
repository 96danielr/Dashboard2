import React from "react";
import ReactApexChart from "react-apexcharts";
import Hide from "../assets/Icons/Hide.svg";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const LinearGraph = () => {
    const dispatch = useDispatch();
    const dataLinear = useSelector((state) => state.ui.data);

    const series = [
        {
            name: "Consumo Energía",
            type: "line",
            data: dataLinear,
        },
    ];
    const options = {
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        title: {
            text: "Product Trends by Month",
            align: "left",
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: ["Dec", "Jan", "Feb"],
        },
    };

    return (
        <div>
            <h2 className="text-center">Linear Graph</h2>

            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={350}
            />
        </div>
    );
};

export default LinearGraph;
