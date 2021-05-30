import React from 'react';

export const MenuItem = () => {
    return (
        <div className="menuItem col-12 p-md-4 m-2 col-md-3">
            <div>
                <span className="name">Americano</span>
                <span className="price float-right">150&#8377;</span>
            </div>
            <div>
                <span className="offer">15% Off Drinks</span>
                <span className="offerPrice float-right">120&#8377;</span>
            </div>
            <div>
                <p className="description">Special brew by third wave beans from hills of ooti.</p>
            </div>
            <div className="rewards">
                <span>+1</span>
                <img src="./image/burger.png" height="30px" width="30px" alt="icon" />
                <button className="btn float-right" onClick={() => window.alert('Added')}>
                    +Add
                </button>
            </div>
            <hr />
        </div>
    );
};

export default MenuItem;
