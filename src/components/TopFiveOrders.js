import React from 'react';

import { MenuItem } from './restaurant/MenuItem';

export const TopFiveOrders = () => {
    return (
        <>
            <div className="orderHead d-flex justify-content-center">
                <span>Top 5</span>
            </div>
            <div className="row justify-content-center">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </>
    );
};
