import React from 'react';

import { SplashScreenWrapper } from '../components/SplashScreenWrapper';

const Splash=(props) => {
    
    const onLetsStart=() => {
        props.history.push('/login');
    }
    
    return (
        <SplashScreenWrapper>
            <button className="startButton btn" onClick={onLetsStart}>
                Let's Start
            </button>
        </SplashScreenWrapper>
    );
};
 

export default Splash;

 