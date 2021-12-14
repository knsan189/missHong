export const SET_FESTIVALS = "festival/SET_FESTIVALS";
export const SEARCH_FESTIVALS_REQUEST = "festival/SEARCH_FESTIVALS_REQUEST";
export const SEARCH_FESTIVALS_SUCCESS = "festival/SEARCH_FESTIVALS_SUCCESS";

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

const initialState = {
  loading: false,
  festivals: [],
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
      return {
        ...state,
      };
    case SEARCH_FESTIVALS_SUCCESS:
      return {
        ...state,
        festivals: action.payload.festivals,
      };
    default: {
      return state;
    }
  }
};

export default FestivalReducer;
