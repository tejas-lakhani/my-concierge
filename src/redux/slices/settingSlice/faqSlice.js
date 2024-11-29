import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../axiosInstance";

// Async thunk for fetching
export const fetchFaqs = createAsyncThunk(
  "faq/fetch",
  async ({ page, records_per_page, search }) => {
    const response = await axiosInstance.get("/faq/", {
      params: {
        page,
        records_per_page,
        search: JSON.stringify({ search }),
      },
    });
    return response.data;
  }
);

// Async thunk for creating a category
export const createFaq = createAsyncThunk("faq/create", async (data) => {
  const response = await axiosInstance.post("/faq/", data);
  return response.data.payload;
});

// Async thunk for updating a category
export const updateFaq = createAsyncThunk("faq/update", async (data) => {
  const response = await axiosInstance.put(`/faq/?uuid=${data?.uuid}`, data);
  return response.data.payload;
});

// Async thunk for deleting a category
export const deleteFaq = createAsyncThunk("faq/delete", async (id) => {
  await axiosInstance.delete(`/faq/?uuid=${id}`);
  return id;
});

// Slice and the rest of the code remain the same
const faqSlice = createSlice({
  name: "faqs",
  initialState: {
    data: [],
    pagination: [],
    loading: false,
    error: null,
    noData: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        if (state.data.length > 0) {
          state.loading = false;
          state.noData = false;
        } else {
          state.loading = true;
          state.noData = false;
        }
      })
      .addCase(fetchFaqs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.payload.data;
        state.pagination = action.payload.pager;
        state.noData = action.payload.payload.data.length === 0;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.noData = true;
      })
      .addCase(deleteFaq.fulfilled, (state, action) => {
        state.data = state.data.filter((faq) => faq.uuid !== action.payload);
      })
      .addCase(deleteFaq.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectFaqs = (state) => state.faqStore.data;
export const selectFaqPagination = (state) => state.faqStore.pagination;
export const selectFaqLoading = (state) => state.faqStore.loading;
export const selectFaqError = (state) => state.faqStore.error;
export const selectFaqNoData = (state) => state.faqStore.noData;

export default faqSlice.reducer;
