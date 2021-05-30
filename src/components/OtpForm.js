import React, { memo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export const OtpForm = memo((props) => {
    const { userNumber, onVerifyOtp, otp, onSetOpt, isLoading } = props;

    return (
        <>
            <div style={{ color: 'white' }}>{`Enter Received OTP on ${userNumber?.slice(0, 2)} XXXXXX`}</div>
            <div className="loginForm form-inline d-flex flex-column justify-content-center">
                <div className="otp form-group bg-white text-black m-3">
                    <input
                        type="number"
                        maxLength={4}
                        className=" d-inline form-control-plaintext"
                        onInput={ onSetOpt }
                    />
                </div>
                <div className="row justify-content-between otpOption">
                    <div className="col-4 p-1">60</div>
                    <div className="col-4 p-1">Re-send?</div>
                </div>
              {isLoading? <CircularProgress /> :  <button type="submit" disabled={otp?.length !== 4} className="btn" onClick={onVerifyOtp}>
                    Submit
                </button>}
            </div>
        </>
    );
}
);
