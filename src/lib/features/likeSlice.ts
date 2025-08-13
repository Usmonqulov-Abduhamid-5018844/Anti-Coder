import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProductDetailType {
  id: number;
  title: string;
  desc: string;
  price: number;
  thumbnail: string;
  details: {
    id: number;
    title: string;
    desc: string;
  }[];
}

interface LikeState {
  value: ProductDetailType[];
}

const initialState: LikeState = {
  value: [],
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<ProductDetailType>) => {
      const exist = state.value.some((item) => item.id === action.payload.id);
      if (exist) {
        state.value = state.value.filter((item) => item.id !== action.payload.id);
      } else {
        state.value.push(action.payload);
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
