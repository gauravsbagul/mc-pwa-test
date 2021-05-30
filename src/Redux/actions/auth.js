import { getOtpCall } from '../../Api/auth';
import { AUTH } from '../constants/index';
import { BASE_URL } from '../../config';
import axios from 'axios';

export const registerUserAndSendOtp = (data) => {
    return async (dispatch) => {
        try {
            const body = {
                data,
                url: `${BASE_URL}user/generateOTP`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const response = await axios(body);

            dispatch({
                type: AUTH.SEND_OTP,
                payload: { response: response.data, error: false },
            });
              dispatch({
                  type: AUTH.USER_INFO,
                  payload: { data },
              });
        } catch (error) {
            dispatch({
                type: AUTH.SEND_OTP,
                payload: { response: error, error: true },
            });
        }
    };
};

export const clearRegisterUserAndSendOtp = () => {
    return async (dispatch) => {
        dispatch({
            type: AUTH.SEND_OTP,
            payload: null,
        });
    };
};

export const verifyOtp = (data) => {
    return async (dispatch) => {
        try {
            const body = {
                data,
                url: `${BASE_URL}user/verifyOTP`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const response = await axios(body);

            dispatch({
                type: AUTH.VERIFY_OTP,
                payload: { response: response.data, error: false },
            });
             dispatch({
                 type: AUTH.USER_INFO,
                 payload: response.data,
             });
        } catch (error) {
            dispatch({
                type: AUTH.VERIFY_OTP,
                payload: { response: error, error: true },
            });
        }
    };
};


export const clearVerifyOtp = () => {
    return async (dispatch) => {
        dispatch({
            type: AUTH.VERIFY_OTP,
            payload: null,
        });
    };
};
export const saveFcmToken = (token) => {
    return async (dispatch) => {
        dispatch({
            type: AUTH.FCM_TOKEN,
            payload: token,
        });
    };
};
