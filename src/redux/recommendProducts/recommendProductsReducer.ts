import {
    FETCH_RECOMMEND_PRODUCTS_FAIL,
    FETCH_RECOMMEND_PRODUCTS_START,
    FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    RecommendProductAction,
} from "./recommendProductsActions";

interface recommendProductsState {
    productList: any[];
    loading: boolean;
    error: string | null;
}

const defaultState: recommendProductsState = {
    loading: true,
    error: null,
    productList: [],
};

// 使用三個點展開state，表示數據保持不變
export default (state = defaultState, action: RecommendProductAction) => {
    switch (action.type) {
        case FETCH_RECOMMEND_PRODUCTS_START:
            return { ...state, loading: true };
        case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
            return { ...state, loading: false, productList: action.payload };
        case FETCH_RECOMMEND_PRODUCTS_FAIL:
            return { ...state, loading: true, error: action.payload };
        default:
            return state;
    }
};
