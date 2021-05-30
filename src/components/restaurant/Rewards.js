

import React from 'react'


export const Rewards = ({ name, coinsRequired }) => {
    return (
        <div className="rewardsDetails row">
            <div className="col-7 ">
                <div className="rewardsItem">Free {name}</div>
            </div>
            <div className="col-5 text-center">
                <div>
                    <span className="number p-2">{coinsRequired}</span>
                    <img src="./image/burger.png" height="30px" width="30px" alt={name} />
                </div>
            </div>
        </div>
    );
};