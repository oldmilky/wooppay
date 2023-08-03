import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./api.config";

export const categoriesService = createAsyncThunk(
  "serviceCategories/fetch",
  async () => {
    const response = await fetch(`${BASE_URL}/service-category`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
);
