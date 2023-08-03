import { createSlice } from "@reduxjs/toolkit";
import { detailsService } from "../../api/details.service";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    service: null,
    fields: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(detailsService.pending, state => {
        state.loading = true;
      })
      .addCase(detailsService.fulfilled, (state, action) => {
        state.service = action.payload;
        state.fields = action.payload.fields;
        state.loading = false;
        state.error = null;
      })
      .addCase(detailsService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default detailsSlice.reducer;
