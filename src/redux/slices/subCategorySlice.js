import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

// Async thunk for fetching categories
export const fetchSubCategories = createAsyncThunk(
  "categories/fetchSubCategories",
  async ({ page, records_per_page, search }) => {
    const response = await axiosInstance.get("/subcategory/", {
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
export const createSubCategory = createAsyncThunk(
  "categories/createSubCategory",
  async (categoryData) => {
    const response = await axiosInstance.post("/subcategory/", categoryData);
    return response.data.payload;
  }
);

// Async thunk for updating a category
export const updateSubCategory = createAsyncThunk(
  "categories/updateSubCategory",
  async (categoryData) => {
    const response = await axiosInstance.put(
      `/subcategory/?uuid=${categoryData?.uuid}`,
      categoryData
    );
    return response.data.payload;
  }
);

// Async thunk for deleting a category
export const deleteSubCategory = createAsyncThunk(
  "categories/deleteSubCategory",
  async (id) => {
    await axiosInstance.delete(`/subcategory/?uuid=${id}`);
    return id;
  }
);

// Slice and the rest of the code remain the same
const subCategorySlice = createSlice({
  name: "subCategories",
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
      .addCase(fetchSubCategories.pending, (state) => {
        if (state.data.length > 0) {
          state.loading = false;
          state.noData = false;
        } else {
          state.loading = true;
          state.noData = false;
        }
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.payload.data;
        state.pagination = action.payload.pager;
        state.noData = action.payload.payload.data.length === 0;
      })
      .addCase(fetchSubCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.noData = true;
      })
      .addCase(deleteSubCategory.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (category) => category.uuid !== action.payload
        );
      })
      .addCase(deleteSubCategory.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectSubCategories = (state) => state.subCategories.data;
export const selectSubCategoriesPagination = (state) =>
  state.subCategories.pagination;
export const selectLoading = (state) => state.subCategories.loading;
export const selectError = (state) => state.subCategories.error;
export const selectNoData = (state) => state.subCategories.noData;

export default subCategorySlice.reducer;
