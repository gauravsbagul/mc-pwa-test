import React from 'react';

export const PETItemCard = () => {
    return (
        <div className="PETItemCard d-flex m-2 ml-3 mr-3">
            <img className="menuImage" src="./image/dinner.png" alt="menuImage"/>
            <div className="details p-2 ml-2">
                <div className="name">Garlic Bread</div>
                <div className="price">220&#8377;</div>
            </div>
            <img className="addButton" src="./image/addButton.png" alt="add" onClick={()=>window.alert("Added")}/>
        </div>
    );
}


