import { createSlice } from "@reduxjs/toolkit";
import { searchService } from "../../api/search.service";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchService.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchService.fulfilled, (state, action) => {
        state.results = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(searchService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default searchSlice.reducer;
