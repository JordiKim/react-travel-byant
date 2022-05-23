import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START"; // 正在調用推薦信息API
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
    "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 推薦信息API調用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 推薦信息API調用失敗

interface FetchRecommendProductStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START;
}

interface FetchRecommendProductSuccessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
    payload: any;
}

interface FetchRecommendProductFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
    payload: any;
}

export type RecommendProductAction =
    | FetchRecommendProductStartAction
    | FetchRecommendProductSuccessAction
    | FetchRecommendProductFailAction;

// 因為是函數，所以名稱開頭是小寫
export const fetchRecommendProductStartActionCreator = (): FetchRecommendProductStartAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_START,
    };
};

// 需要傳入一個API成功返回的數據，這邊叫做data
export const fetchRecommendProductSuccessActionCreator = (
    data
): FetchRecommendProductSuccessAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data,
    };
};

export const fetchRecommendProductFailActionCreator = (
    error
): FetchRecommendProductFailAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: error,
    };
};

// thunk可以返回一個函數，而不一定是js對象
// 在一個thunk action中，可以連續完成多個action的操作
// 並且可以處理異步邏輯
// 業務邏輯可以從ui層面挪到這裏，代碼分層會更清晰
export const giveMeDataActionCreator = (): ThunkAction<
    void,
    RootState,
    unknown,
    RecommendProductAction
> => async (dispatch, getState) => {
    dispatch(fetchRecommendProductStartActionCreator());
    try {
        const { data } = await axios.get(
            "http://123.56.149.216:8089/api/productCollections"
        );
        dispatch(fetchRecommendProductSuccessActionCreator(data));
    } catch (error) {
        dispatch(fetchRecommendProductFailActionCreator("獲取API出錯"));
    }
};
