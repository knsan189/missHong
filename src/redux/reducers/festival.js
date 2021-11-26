export const SET_FESTIVALS = "festival/SET_FESTIVALS";

export const setFestivals = (festivals) => ({
  type: SET_FESTIVALS,
  payload: { festivals },
});

const initialState = {
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
    default: {
      return state;
    }
  }
};

export default FestivalReducer;
