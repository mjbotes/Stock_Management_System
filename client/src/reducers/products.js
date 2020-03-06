import {
  GET_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
  UPDATE_PRODUCT,
  CLEAR_PRODUCT
} from '../actions/types';

const initialState = {
  product: null,
  product: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT:
    case UPDATE_PRODUCT:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PRODUCTS:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
    default:
      return state;
  }
}
