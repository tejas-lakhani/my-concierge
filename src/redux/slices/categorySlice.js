import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

// Async thunk for fetching categories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async ({ page, records_per_page, search }) => {
    const response = await axiosInstance.get("/category/", {
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
export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (categoryData) => {
    const response = await axiosInstance.post("/category/", categoryData);
    return response.data.payload;
  }
);

// Async thunk for updating a category
export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async (categoryData) => {
    const response = await axiosInstance.put(
      `/category/?uuid=${categoryData?.uuid}`,
      categoryData
    );
    return response.data.payload;
  }
);

// Async thunk for deleting a category
export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id) => {
    await axiosInstance.delete(`/category/?uuid=${id}`);
    return id;
  }
);

// Slice and the rest of the code remain the same
const categorySlice = createSlice({
  name: "categories",
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
      .addCase(fetchCategories.pending, (state) => {
        if (state.data.length > 0) {
          state.loading = false;
          state.noData = false;
        } else {
          state.loading = true;
          state.noData = false;
        }
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.payload.data;
        state.pagination = action.payload.pager;
        state.noData = action.payload.payload.data.length === 0;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.noData = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (category) => category.uuid !== action.payload
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectCategories = (state) => state.categories.data;
export const selectCategoriesPagination = (state) =>
  state.categories.pagination;
export const selectLoading = (state) => state.categories.loading;
export const selectError = (state) => state.categories.error;
export const selectNoData = (state) => state.categories.noData;

export default categorySlice.reducer;
