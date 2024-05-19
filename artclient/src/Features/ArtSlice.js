// ArtSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getArts = createAsyncThunk("arts/getArts", async () => {
  try {
    const response = await axios.get("https://artgallery-server1.onrender.com/arts");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || "Failed to fetch arts.");
  }
});

export const addArt = createAsyncThunk("art/addArt", async (artData) => {
  try {
    const response = await axios.post("https://artgallery-server1.onrender.com/addArt", artData);
    return response.data.art;
  } catch (error) {
    throw new Error(error.response.data.error || "Failed to add art.");
  }
});

export const updateArt = createAsyncThunk("art/updateArt", async (data) => {
  try {
    const { id, artData } = data;
    const response = await axios.put(`https://artgallery-server1.onrender.com/updateArt/${id}`, artData);
    return response.data.art;
  } catch (error) {
    throw new Error(error.response.data.error || "Failed to update art.");
  }
});

export const deleteArt = createAsyncThunk("art/deleteArt", async (id) => {
  try {
    await axios.delete(`https://artgallery-server1.onrender.com/deleteArt/${id}`);
    return id;
  } catch (error) {
    throw new Error(error.response.data.error || "Failed to delete art.");
  }
});

const artSlice = createSlice({
  name: "art",
  initialState: {
    art: {},
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getArts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getArts.fulfilled, (state, action) => {
      state.art = action.payload.reduce((acc, art) => {
        acc[art._id] = art;
        return acc;
      }, {});
      state.isLoading = false;
      state.isSuccess = true;
    })
    .addCase(getArts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    })
      .addCase(addArt.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addArt.fulfilled, (state, action) => {
        state.art = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addArt.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateArt.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateArt.fulfilled, (state, action) => {
        state.art = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateArt.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteArt.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteArt.fulfilled, (state, action) => {
        delete state.art[action.payload];
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteArt.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default artSlice.reducer;
