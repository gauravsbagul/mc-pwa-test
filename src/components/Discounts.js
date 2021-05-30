import React from 'react';

export const Discounts = () => {
    return (
        <div className="discounts p-4">
            <div className="orderHead p-0 d-flex justify-content-center">
                <span>Discounts</span>
            </div>
            <div  className="row pt-2 text-center justify-content-center">
                <span className="offer col-md-4 col-6">15% Off Drinks</span>
                <span className="offerDescription col-md-4 col-6 float-right ">15% Off</span>
            </div>
        </div>
    );
}

