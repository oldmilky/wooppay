import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/categoriesSlice";
import details from "./slices/detailsSlice";
import search from "./slices/searchSlice";
import services from "./slices/servicesSlice";

export const store = configureStore({
  reducer: {
    categories,
    services,
    details,
    search,
  },
});
