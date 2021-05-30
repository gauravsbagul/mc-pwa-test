import React from 'react';

import { MenuItem } from './restaurant/MenuItem';

export const PreviousOrders = () => {
    return (
        <>
            <div className="orderHead d-flex justify-content-center">
                <span>Previous Orders</span>
            </div>
            <div className="quickAdd row justify-content-end mr-1">
                <button className="btn float-right mr-md-5">+Quick Add</button>
            </div>
            <div className="row justify-content-center">
                <MenuItem />
                <MenuItem />
            </div>
        </>
    );
};
