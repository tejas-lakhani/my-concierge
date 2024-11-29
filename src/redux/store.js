// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import subCategoryReducer from "./slices/subCategorySlice";
import termsConditionsReducer from "./slices/appPageSlice/termsAndConditionsSlice";
import privacyPolicyReducer from "./slices/appPageSlice/privacyPolicySlice";
import aboutUsReducer from "./slices/appPageSlice/aboutUsSlice";
import faqReducer from "./slices/settingSlice/faqSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    subCategories: subCategoryReducer,
    termsCondition: termsConditionsReducer,
    privacyPolicy: privacyPolicyReducer,
    aboutUs: aboutUsReducer,
    faqStore: faqReducer,
    userStore: userReducer,
  },
});

export default store; 
