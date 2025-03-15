import { configureStore } from "@reduxjs/toolkit";
import LoginButtonToggleSlice from "./Slices/LoginButtonToggleSlice";
export const Store = configureStore({
    reducer:{
        loginToggle : LoginButtonToggleSlice
    },
});

export type rootState = ReturnType<typeof Store.getState>;
export type appDispatch = typeof Store.dispatch;