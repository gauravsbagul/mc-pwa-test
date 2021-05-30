import { RESTAURANT } from '../constants/index';
import { BASE_URL } from '../../config';
import axios from 'axios';



export const getAllRestaurant = () => {

    return async (dispatch, getState) => {
        const {
            auth: {
                userInfo: { token },
            },
        } = getState();
        
        try {
            const body = {
                url: `${BASE_URL}restaurant/getAllRestaurants`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
            };

            const response = await axios(body);

            dispatch({
                type: RESTAURANT.GET_ALL_RESTAURANTS,
                payload: { response: response?.data, error: false },
            });
        } catch (error) {
            dispatch({
                type: RESTAURANT.GET_ALL_RESTAURANTS,
                payload: { response: error, error: true },
            });
        }
    };
};
 

export const getRestaurantById = (restaurantId) => {
    return async (dispatch, getState) => {
        const {
            auth: {
                userInfo: { token },
            },
        } = getState();
        
        try {
            const body = {
                url: `${BASE_URL}restaurant/getRestaurantById?restaurantId=${restaurantId}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
            };

            const response = await axios(body);

            dispatch({
                type: RESTAURANT.GET_RESTAURANT_BY_ID,
                payload: { response: response?.data, error: false },
            });
        } catch (error) {
            dispatch({
                type: RESTAURANT.GET_RESTAURANT_BY_ID,
                payload: { response: error, error: true },
            });
        }
    };
};