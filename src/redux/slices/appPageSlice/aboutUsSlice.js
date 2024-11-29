import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../axiosInstance";

// Async thunk for fetching
export const fetchAboutUs = createAsyncThunk("aboutUs/fetch", async () => {
  const response = await axiosInstance.get("/apppage/");
  return response.data.payload.data;
});

// Async thunk for creating
export const createAboutUs = createAsyncThunk(
  "aboutUs/create",
  async (data) => {
    const response = await axiosInstance.post("/apppage/", data);
    return response.data.payload;
  }
);

// Async thunk for updating
export const updateAboutUs = createAsyncThunk(
  "aboutUs/update",
  async (data) => {
    const response = await axiosInstance.put(
      `/apppage/?uuid=${data?.uuid}`,
      data
    );
    return response.data.payload;
  }
);

// Async thunk for deleting
export const deleteAboutUs = createAsyncThunk("aboutUs/delete", async (id) => {
  await axiosInstance.delete(`/apppage/?uuid=${id}`);
  return id;
});

// Slice and the rest of the code remain the same
const AboutUsSlice = createSlice({
  name: "aboutUs",
  initialState: {
    data: [],
    loading: true,
    error: null,
    noData: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutUs.pending, (state) => {
        state.loading = true;
        state.noData = false;
      })
      .addCase(fetchAboutUs.fulfilled, (state, action) => {
        const PrivacyPolicy = action.payload.find(
          (item) => item?.type === "About us"
        );

        state.loading = false;
        state.data = PrivacyPolicy;
        state.noData = !PrivacyPolicy;
      })

      .addCase(fetchAboutUs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.noData = true;
      })
      .addCase(deleteAboutUs.fulfilled, (state, action) => {
        state.data = [];
      })
      .addCase(deleteAboutUs.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectAboutUs = (state) => state.aboutUs.data;
export const selectLoading = (state) => state.aboutUs.loading;
export const selectError = (state) => state.aboutUs.error;
export const selectNoData = (state) => state.aboutUs.noData;

export default AboutUsSlice.reducer;
