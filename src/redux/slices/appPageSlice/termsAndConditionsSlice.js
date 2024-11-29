import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../axiosInstance";

// Async thunk for fetching categories
export const fetchTermsAndCondition = createAsyncThunk(
  "termsCondition/fetch",
  async () => {
    const response = await axiosInstance.get("/apppage/");
    return response.data.payload.data;
  }
);

// Async thunk for creating a category
export const createTermsAndCondition = createAsyncThunk(
  "termsCondition/create",
  async (data) => {
    const response = await axiosInstance.post("/apppage/", data);
    return response.data.payload;
  }
);

// Async thunk for updating a category
export const updateTermsAndCondition = createAsyncThunk(
  "termsCondition/update",
  async (data) => {
    const response = await axiosInstance.put(
      `/apppage/?uuid=${data?.uuid}`,
      data
    );
    return response.data.payload;
  }
);

// Async thunk for deleting a category
export const deleteTermsConditions = createAsyncThunk(
  "termsCondition/delete",
  async (id) => {
    await axiosInstance.delete(`/apppage/?uuid=${id}`);
    return id;
  }
);

// Slice and the rest of the code remain the same
const termsConditionSlice = createSlice({
  name: "termsConditions",
  initialState: {
    data: [],
    loading: true,
    error: null,
    noData: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTermsAndCondition.pending, (state) => {
        state.loading = true;
        state.noData = false;
      })
      .addCase(fetchTermsAndCondition.fulfilled, (state, action) => {
        const termsAndConditions = action.payload.find(
          (item) => item?.type === "Terms and conditions"
        );

        state.loading = false;
        state.data = termsAndConditions;
        state.noData = !termsAndConditions;
      })

      .addCase(fetchTermsAndCondition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.noData = true;
      })
      .addCase(deleteTermsConditions.fulfilled, (state, action) => {
        state.data = [];
      })
      .addCase(deleteTermsConditions.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectTermsConditions = (state) => state.termsCondition.data;
export const selectLoading = (state) => state.termsCondition.loading;
export const selectError = (state) => state.termsCondition.error;
export const selectNoData = (state) => state.termsCondition.noData;

export default termsConditionSlice.reducer;
