import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../axiosInstance";

// Async thunk for fetching
export const fetchPrivacyPolicy = createAsyncThunk(
  "privacyPolicy/fetch",
  async () => {
    const response = await axiosInstance.get("/apppage/");
    return response.data.payload.data;
  }
);

// Async thunk for creating
export const createPrivacyPolicy = createAsyncThunk(
  "privacyPolicy/create",
  async (data) => {
    const response = await axiosInstance.post("/apppage/", data);
    return response.data.payload;
  }
);

// Async thunk for updating
export const updatePrivacyPolicy = createAsyncThunk(
  "privacyPolicy/update",
  async (data) => {
    const response = await axiosInstance.put(
      `/apppage/?uuid=${data?.uuid}`,
      data
    );
    return response.data.payload;
  }
);

// Async thunk for deleting
export const deletePrivacyPolicy = createAsyncThunk(
  "privacyPolicy/delete",
  async (id) => {
    await axiosInstance.delete(`/apppage/?uuid=${id}`);
    return id;
  }
);

// Slice and the rest of the code remain the same
const PrivacyPolicySlice = createSlice({
  name: "privacyPolicy",
  initialState: {
    data: [],
    loading: true,
    error: null,
    noData: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrivacyPolicy.pending, (state) => {
        state.loading = true;
        state.noData = false;
      })
      .addCase(fetchPrivacyPolicy.fulfilled, (state, action) => {
        const PrivacyPolicy = action.payload.find(
          (item) => item?.type === "Privacy policy"
        );

        state.loading = false;
        state.data = PrivacyPolicy;
        state.noData = !PrivacyPolicy;
      })

      .addCase(fetchPrivacyPolicy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.noData = true;
      })
      .addCase(deletePrivacyPolicy.fulfilled, (state, action) => {
        state.data = [];
      })
      .addCase(deletePrivacyPolicy.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectPrivacyPolicy = (state) => state.privacyPolicy.data;
export const selectLoading = (state) => state.privacyPolicy.loading;
export const selectError = (state) => state.privacyPolicy.error;
export const selectNoData = (state) => state.privacyPolicy.noData;

export default PrivacyPolicySlice.reducer;
