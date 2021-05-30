import React, { memo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export const NumberForm = memo((props) => {
    const { sendOtp, userNumber, setUserNumber, isLoading } = props;
    return (
        <>
            <div className="loginForm form-inline d-flex flex-column justify-content-center">
                <div className="number form-group bg-white text-black mb-4">
                    <span style={{ color: 'black' }}>+91</span>
                    <input
                        type="number"
                        maxLength={10}
                        onChange={(event) => setUserNumber(event.target.value)}
                        value={userNumber}
                        className="d-inline form-control-plaintext"
                    />
                </div>

                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <button type="submit" disabled={userNumber?.length !== 10} className="btn" onClick={sendOtp}>
                        Lets Connect
                    </button>
                )}
            </div>
        </>
    );
});
