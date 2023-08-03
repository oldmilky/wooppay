import { createSlice } from "@reduxjs/toolkit";
import { servicesService } from "../../api/services.service";

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(servicesService.pending, state => {
        state.loading = true;
      })
      .addCase(servicesService.fulfilled, (state, action) => {
        state.services = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(servicesService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;
