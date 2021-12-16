export const GET_CURRENT_LOCATION_REQUEST = "user/GET_CURRENT_LOCATION_REQUEST";
export const GET_CURRENT_LOCATION_SUCCESS = "user/GET_CURRENT_LOCATION_SUCCESS";
export const REMOVE_CURRENT_LOCATION = "user/REMOVE_CURRENT_LOCATION";

export const getCurrentLocationRequest = () => ({
  type: GET_CURRENT_LOCATION_REQUEST,
  payload: {},
});

export const getCurrentLocationSuccess = (location) => ({
  type: GET_CURRENT_LOCATION_SUCCESS,
  payload: { location },
});

export const removeCurrentLocation = () => ({
  type: REMOVE_CURRENT_LOCATION,
  payload: {},
});

const initialState = {
  loading: false,
  currentLocation: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION_REQUEST:
      return state;
    case GET_CURRENT_LOCATION_SUCCESS:
      return {
        ...state,
        currentLocation: action.payload.location,
      };

    case REMOVE_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: null,
      };
    default: {
      return state;
    }
  }
};

export default UserReducer;
