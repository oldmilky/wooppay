import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./api.config";

export const servicesService = createAsyncThunk(
  "services/fetchByCategoryId",
  async categoryId => {
    const response = await fetch(
      `${BASE_URL}/service?category_id=${categoryId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  }
);