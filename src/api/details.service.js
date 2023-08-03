import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./api.config";

export const detailsService = createAsyncThunk(
  "details/fetchServiceDetails",
  async serviceId => {
    const response = await fetch(`${BASE_URL}/service/${serviceId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
);
