import React from 'react'

export const SplashScreenWrapper = (props) => {
    return (
        <div className="startScreen text-white d-flex justify-content-center align-items-center flex-column">
            <div className="logo p-5 m-2">
                <img src="/image/svg/logo.svg" width="100px" alt="icon" />
            </div>
            {props.children}
        </div>
    )
}