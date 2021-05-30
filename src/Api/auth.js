

import axios from 'axios';


export const getOtpCall = async (data) => {
    try {
        const body = {
            method: 'POST',
            url: 'api/url',
            data,
        };
        const response = await axios(body);
        return response;
    } catch (error) {
        return error;
    }
};