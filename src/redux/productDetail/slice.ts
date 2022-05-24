import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductDetailState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: ProductDetailState = {
    loading: true,
    error: null,
    data: null,
};

// 1.這裏的reducer是把action和reducer綑綁在一起，所以不需要再單獨定義action
// 2.這裏的reducer是一個對象而不是過程，每個對象對應一個action，同時也對應著這個action的處理函數
// 3.因為createSlice本身是面對對象而不是面對過程，因此不用再寫switch語句了
export const ProductDetailSlice = createSlice({
    name: "productDetail",
    initialState,
    reducers: {
        fetchStart: (state) => {
            // return { ...state, loading: true };
            state.loading = true;
        },
        fetchSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchFail: (state, action: PayloadAction<string | null>) => {
            // const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
    },
});
