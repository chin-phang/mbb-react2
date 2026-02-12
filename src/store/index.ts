import { configureStore } from "@reduxjs/toolkit";
import autocompleteReducer from "../autocompleteSlice"

export const store = configureStore({
    reducer: {
        autocomplete: autocompleteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
