// src/features/BookingSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/api";

// ➕ CREATE BOOKING
export const createBooking = createAsyncThunk(
    "booking/create",
    async (data, { rejectWithValue }) => {
        try {
            const res = await API.post("/ekmt-booking", data);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

// 📋 GET BOOKINGS
export const getBookings = createAsyncThunk(
    "booking/get",
    async (_, { rejectWithValue }) => {
        try {
            const res = await API.get("/ekmt-booking");
            return res.data.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

// 🔁 UPDATE STATUS
export const updateBookingStatus = createAsyncThunk(
    "booking/updateStatus",
    async ({ id, status }, { rejectWithValue }) => {
        try {
            const res = await API.patch(`/ekmt-booking/${id}/status`, { status });
            return res.data.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

// ❌ DELETE
export const deleteBooking = createAsyncThunk(
    "booking/delete",
    async (id, { rejectWithValue }) => {
        try {
            await API.delete(`/ekmt-booking/${id}`);
            return id;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

const BookingSlice = createSlice({
    name: "booking",
    initialState: {
        bookings: [],
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            // CREATE
            .addCase(createBooking.pending, (state) => {
                state.loading = true;
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings.unshift(action.payload.data);
            })
            .addCase(createBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // GET
            .addCase(getBookings.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBookings.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = action.payload;
            })
            .addCase(getBookings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // STATUS UPDATE
            .addCase(updateBookingStatus.fulfilled, (state, action) => {
                const index = state.bookings.findIndex(
                    (b) => b._id === action.payload._id
                );
                if (index !== -1) {
                    state.bookings[index] = action.payload;
                }
            })

            // DELETE
            .addCase(deleteBooking.fulfilled, (state, action) => {
                state.bookings = state.bookings.filter(
                    (b) => b._id !== action.payload
                );
            });
    },
});

export default BookingSlice.reducer;