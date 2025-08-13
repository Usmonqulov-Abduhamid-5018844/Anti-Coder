import { configureStore } from "@reduxjs/toolkit";
import like from "./features/likeSlice";

const store = configureStore({
    reducer:{
        like
    }
})

export default store


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store