// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/BookingSlice";

export const store = configureStore({
    reducer: {
        booking: bookingReducer,
    },
});