import { LinearGraph, PieGraph } from "./components";

import Hide from "../src/assets/Icons/Hide.svg";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
    hideGraphLinear,
    hideGraphPie,
    handleChange,
    handleChange2,
    handleChange3,
} from "./store/slices/ui.slices";

function App() {
    const dispatch = useDispatch();
    const hideLinear = useSelector((state) => state.ui.isHideLinear);
    const hidePie = useSelector((state) => state.ui.isHidePie);
    const data = useSelector((state) => state.ui.data);

    const [data1, setData1] = useState(data[0]);
    const [data2, setData2] = useState(data[1]);
    const [data3, setData3] = useState(data[2]);

    return (
        <div className="App">
            <h1 className="text-center"> Dashboard</h1>
            <div className="dashboard container">
                <div className="container-lg">
                    <img
                        src={Hide}
                        alt="hide-bottom"
                        className="hide-button"
                        onClick={() => dispatch(hideGraphLinear())}
                    />
                    {hideLinear === false ? (
                        <div className="dashboard-graph">
                            <LinearGraph />
                        </div>
                    ) : null}
                </div>

                <div className="container-lg">
                    <img
                        src={Hide}
                        alt="hide-button"
                        className="hide-button"
                        onClick={() => dispatch(hideGraphPie())}
                    />
                    {hidePie === false ? (
                        <div className="dashboard-graph">
                            <PieGraph />
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="container-form">
                <div className="container-inputs">
                    <label htmlFor="">first data</label>
                    <input
                        type="number"
                        value={data1}
                        onChange={(e) => {
                            setData1(Number(e.target.value));
                            dispatch(handleChange(data1)), console.log(data1);
                        }}
                    />
                </div>

                <div className="container-inputs">
                    <label htmlFor="" class="form-label">
                        second data
                    </label>
                    <input
                        type="number"
                        value={data2}
                        onChange={(e) => {
                            setData2(Number(e.target.value));
                            dispatch(handleChange2(data2)), console.log(data1);
                        }}
                    />
                </div>

                <div className="container-inputs">
                    <label htmlFor="">third data</label>
                    <input
                        type="number"
                        value={data3}
                        onChange={(e) => {
                            setData3(Number(e.target.value));
                            dispatch(handleChange3(data3)), console.log(data1);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
