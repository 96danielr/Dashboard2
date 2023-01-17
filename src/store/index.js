import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./slices/ui.slices";

export default configureStore({
    reducer: {
        ui: uiSlice,
    },
});
