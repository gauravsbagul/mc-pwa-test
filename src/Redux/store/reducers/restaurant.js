import { RESTAURANT } from '../../constants';

const initialState = {
    restaurantList: [],
    restaurantById:null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RESTAURANT.GET_ALL_RESTAURANTS:
            return {
                ...state,
                restaurantList: action.payload,
            };
        case RESTAURANT.GET_RESTAURANT_BY_ID:
            return {
                ...state,
                restaurantById: action.payload,
            };
        // case RESTAURANT.USER_INFO:
        //     return {
        //         ...state,
        //         userInfo: action.payload,
        //     };
        // case RESTAURANT.FCM_TOKEN:
        //     return {
        //         ...state,
        //         fmcToken: action.payload,
        //     };

        default:
            return state;
    }
};
