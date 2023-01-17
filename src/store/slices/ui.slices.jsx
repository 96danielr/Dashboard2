import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isHideLinear: false,
        isHidePie: false,
        data: [40, 20, 10],
    },
    reducers: {
        hideGraphLinear: (state) => {
            state.isHideLinear = !state.isHideLinear;
        },
        hideGraphPie: (state) => {
            state.isHidePie = !state.isHidePie;
        },
        hideGraphPie: (state) => {
            state.isHidePie = !state.isHidePie;
        },
        handleChange: (state, action) => {
            state.data[0] = action.payload;
        },
        handleChange2: (state, action) => {
            state.data[1] = action.payload;
        },
        handleChange3: (state, action) => {
            state.data[2] = action.payload;
        },
    },
});

export const {
    hideGraphLinear,
    hideGraphPie,
    handleChange,
    handleChange2,
    handleChange3,
} = uiSlice.actions;
export default uiSlice.reducer;
