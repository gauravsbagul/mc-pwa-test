import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NumberForm } from '../components/NumberForm';
import { registerUserAndSendOtp, clearRegisterUserAndSendOtp, verifyOtp, clearVerifyOtp } from '../Redux/actions/auth';
import { SplashScreenWrapper } from '../components/SplashScreenWrapper';
import { OtpForm } from '../components/OtpForm';

const LoginPage = (props) => {
    const [showOtpForm, setShowOtpForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isWrongOtp, setIsWrongOtp] = useState(false);

    const [userNumber, setUserNumber] = useState('');
    const [role, setRole] = useState('CUSTOMER');

    const [userInfo, setUserInfo] = useState(null);
    const [otp, setOtp] = useState('');

    const dispatch = useDispatch();

    const { auth } = useSelector((state) => state);

    useEffect(() => {
        if (auth?.userInfo && !userInfo) {
            setUserInfo(auth.userInfo?.data);
        }
        if (auth.otpVerifyResponse?.response) {
            if (auth.otpVerifyResponse?.response?.message === 'the provided otp is incorrect') {
                setIsWrongOtp(true);
                
            } else {
                setIsLoading(false);
                dispatch(clearVerifyOtp());
                props.history.push(`/home`);
            }
        }
        if (auth?.otpResponse?.response?.otpResponse && auth?.otpResponse?.response?.otp) {
            if (auth?.otpResponse) {
                setIsLoading(false);
                setShowOtpForm(true);
                dispatch(clearRegisterUserAndSendOtp());
                // props.history.push('/OtpFormPage');
            }
        }
    }, [auth]);

    const onSetOpt = (event) => {
        event.preventDefault();
        setOtp(event.target.value);
    };

    const onVerifyOtp = (event) => {
        setIsLoading(true);
        event.preventDefault();
        dispatch(
            verifyOtp({
                ...userInfo,
                otp,
            })
        );
    };

    const sendOtp = (event) => {
        event.preventDefault();
        setIsLoading(true);
        dispatch(
            registerUserAndSendOtp({
                mobileNumber: userNumber,
                role,
            })
        );
    };

    return (
        <SplashScreenWrapper>
            {showOtpForm ? (
                <OtpForm
                    otp={otp}
                    onSetOpt={onSetOpt}
                    onVerifyOtp={onVerifyOtp}
                    history={props.history}
                    isLoading={isLoading}
                />
            ) : (
                <NumberForm
                    sendOtp={sendOtp}
                    setUserNumber={setUserNumber}
                    userNumber={userNumber}
                    isLoading={isLoading}
                />
            )}
            {isWrongOtp ? <span>Incorrect OTP, please enter correct OTP</span> : null}
        </SplashScreenWrapper>
    );
};

export default LoginPage;
