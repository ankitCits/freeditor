import { configureStore } from "@reduxjs/toolkit";
import TextSlice from "./redux/slices/TextSlice";

export default configureStore({
  reducer: {
    TextSlice,
  },
});
