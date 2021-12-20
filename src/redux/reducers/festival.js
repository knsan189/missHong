export const SET_FESTIVALS = "festival/SET_FESTIVALS";
export const SEARCH_FESTIVALS_REQUEST = "festival/SEARCH_FESTIVALS_REQUEST";
export const SEARCH_FESTIVALS_SUCCESS = "festival/SEARCH_FESTIVALS_SUCCESS";
export const GET_FESTIVAL_DETAIL_REQUEST =
  "festival/GET_FESTIVAL_DETAIL_REQUEST";
export const GET_FESTIVAL_DETAIL_SUCCESS =
  "festival/GET_FESTIVAL_DETAIL_SUCCESS";
export const CLEAR_FESTIVAL_DETAIL = "fetstival/CLEAR_FESTIVAL_DETAIL";

export const setFestivals = (festivals) => ({
  type: SET_FESTIVALS,
  payload: { festivals },
});

export const searchFestivalRequest = (text, pageNo) => ({
  type: SEARCH_FESTIVALS_REQUEST,
  payload: { text, pageNo },
});

export const searchFestivalSuccess = (festivals) => ({
  type: SEARCH_FESTIVALS_SUCCESS,
  payload: { festivals },
});

export const getFestivalDetailRequest = (id) => ({
  type: GET_FESTIVAL_DETAIL_REQUEST,
  payload: { id },
});
export const getFestivalDetailSuccess = (detail) => ({
  type: GET_FESTIVAL_DETAIL_SUCCESS,
  payload: { detail },
});

export const clearFestivalDetail = () => ({
  type: CLEAR_FESTIVAL_DETAIL,
  payload: {},
});

const initialState = {
  loading: false,
  festivals: null,
};

// eslint-disable-next-line default-param-last
const FestivalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FESTIVALS:
      return {
        ...state,
        festivals: action.payload.festivals,
      };
    case SEARCH_FESTIVALS_REQUEST:
    case GET_FESTIVAL_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_FESTIVALS_SUCCESS:
      return {
        ...state,
        festivals: action.payload.festivals,
        loading: false,
      };
    case GET_FESTIVAL_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload.detail,
        loading: false,
      };
    case CLEAR_FESTIVAL_DETAIL:
      return {
        ...state,
        detail: null,
      };
    default: {
      return state;
    }
  }
};

export default FestivalReducer;
