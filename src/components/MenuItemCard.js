import React from 'react'

export const MenuItemCard = () => {
    return (
        <div className="menuItemCard m-4 d-inline-block">
            <div className="imageDiv">
                <img src='./image/dinner.png' alt="icon" />
            </div>
            <div className="menuDetails pl-2 pt-1 pr-2">
                <div>
                    <span className="itemName">Shrimp Salad</span>
                    <span className="customers float-right">518</span>
                </div>
                <div>
                    <span className="price">450 &#8377;</span>
                </div>
                <div className="menuReward">
                    <span>+1</span>
                    <img src="./image/burger.png" height="30px" width="30px" alt="icon" />
                </div>
            </div>
        </div>
    )
}
