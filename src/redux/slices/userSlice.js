import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

// Async thunk for fetching
export const fetchUser = createAsyncThunk(
  "user/fetch",
  async ({ page, records_per_page, search }) => {
    const response = await axiosInstance.get("/user/", {
      params: {
        page,
        records_per_page,
        search: JSON.stringify({ search }),
      },
    });
    return response.data;
  }
);

// Async thunk for creating
export const createUser = createAsyncThunk("user/create", async (data) => {
  const response = await axiosInstance.post("/user/", data);
  return response.data.payload;
});

// Async thunk for updating
export const updateUser = createAsyncThunk("user/update", async (data) => {
  const response = await axiosInstance.put(`/user/?uuid=${data?.uuid}`, data);
  return response.data.payload;
});

// Async thunk for deleting
export const deleteUser = createAsyncThunk("user/delete", async (id) => {
  await axiosInstance.delete(`/user/?uuid=${id}`);
  return id;
});

// Slice and the rest of the code remain the same
const userSlice = createSlice({
  name: "users",
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
      .addCase(fetchUser.pending, (state) => {
        if (state.data.length > 0) {
          state.loading = false;
          state.noData = false;
        } else {
          state.loading = true;
          state.noData = false;
        }
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.payload.data;
        state.pagination = action.payload.pager;
        state.noData = action.payload.payload.data.length === 0;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.noData = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (category) => category.uuid !== action.payload
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectUsers = (state) => state.userStore.data;
export const selectUserPagination = (state) => state.userStore.pagination;
export const selectUserLoading = (state) => state.userStore.loading;
export const selectUserError = (state) => state.userStore.error;
export const selectUserNoData = (state) => state.userStore.noData;

export default userSlice.reducer;
