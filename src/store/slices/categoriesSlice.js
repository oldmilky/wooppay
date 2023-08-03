import { createSlice } from "@reduxjs/toolkit";
import { categoriesService } from "../../api/categories.service";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(categoriesService.pending, state => {
        state.loading = true;
      })
      .addCase(categoriesService.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(categoriesService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
