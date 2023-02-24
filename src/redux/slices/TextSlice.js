import { createSlice } from "@reduxjs/toolkit";
import { BACKEND_BASE_URL } from "../../Constants";

export const TextSlice = createSlice({
  name: "TextSlice",
  initialState: {
    baseurl: BACKEND_BASE_URL,
    text_position_x: 20,
    text_position_y: 20,
    text_size: 0,
    image_bs_64: "",
    is_rotate: "n",
    card_status: false,
  },
  reducers: {
    setTextPositionX: (state, action) => {
      state.text_position_x = action.payload;
      console.log(state.text_position_x);
      // console.log(action)
      return state;
    },

    setTextPositionY: (state, action) => {
      state.text_position_y = action.payload;
      console.log(state.text_position_y);
      // console.log(action)
      return state;
    },

    setTextSize: (state, action) => {
      state.text_size = action.payload;
      //   console.log(state.text_position_y)
      // console.log(action)
      return state;
    },

    setImageBase64: (state, action) => {
      state.image_bs_64 = action.payload;
      //   console.log(state.text_position_y)
      // console.log(action)
      return state;
    },

    setImageRotate: (state, action) => {
      state.is_rotate = action.payload;
      //   console.log(state.text_position_y)
      // console.log(action)
      return state;
    },

    setCardStatus: (state, action) => {
      state.card_status = action.payload;
      //    console.log(state.card_status)
      // console.log(action)
      return state;
    },
  },
});

export const {
  setTextPositionX,
  setTextPositionY,
  setTextSize,
  setImageBase64,
  setImageRotate,
  setCardStatus,
} = TextSlice.actions;
export default TextSlice.reducer;
