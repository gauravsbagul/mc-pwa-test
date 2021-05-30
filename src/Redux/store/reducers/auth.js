import { AUTH } from '../../constants';

const initialState = {
    otpResponse: null,
    otpVerifyResponse: null,
    userInfo: null,
    fmcToken:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH.SEND_OTP:
            return {
                ...state,
                otpResponse: action.payload,
            };
        case AUTH.VERIFY_OTP:
            return {
                ...state,
                otpVerifyResponse: action.payload,
            };
        case AUTH.USER_INFO:
            return {
                ...state,
                userInfo: { ...state.userInfo, ...action.payload },
            };
        case AUTH.FCM_TOKEN:
            return {
                ...state,
                fmcToken: action.payload,
            };

        default:
            return state;
    }
};
