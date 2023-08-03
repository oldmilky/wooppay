import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./api.config";

export const searchService = createAsyncThunk(
  "search/searchServices",
  async searchQuery => {
    const response = await fetch(
      `${BASE_URL}/service/search?name=${searchQuery}`,
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
