import React from 'react';
import { CartItem } from '../components/CartItem';
import { PETItemCard } from '../components/PETItemCard';

import '../styles/Checkout.css';


const Checkout = () => {
    return (
        <div className="checkout container-fluid">
            <div className="restaurantName text-center">
                Third Wave Cafe <br />
                Pickup
            </div>
            <hr />
            <div className="row justify-content-center">
                <CartItem />
                <div className="peopleEnjoyThis p-2 col-12">
                    <div className="heading">People enjoy this</div>
                    <div className="PETItemsCards">
                        <PETItemCard />
                        <PETItemCard />
                        <PETItemCard />
                        <PETItemCard />
                    </div>
                </div>
                <div className="bill col-12 col-md-4 p-4">
                    <div>
                        <span>Sub</span>
                        <span className="float-right">220 &#8377;</span>
                    </div>
                    <div>
                        <span>Tax</span>
                        <span className="float-right">34 &#8377;</span>
                    </div>
                    <br />
                    <div>
                        <span>Total</span>
                        <span className="float-right">254 &#8377;</span>
                    </div>
                </div>
                <div className="col-12 row justify-content-center">
                    <div className="reward col-8 col-md-3 pr-3 pl-3 mt-3">
                        <div className="text-center mb-1">Reward</div>
                        <div>
                            <span className="name">Americano</span>
                            <span className="rewards ml-1">
                                <span>+10</span>
                                <img src="./image/burger.png" height="30px" width="30px" alt="icon" />
                            </span>
                            <img className="float-right addButton" src="./image/addButton.png" alt="add" onClick={() => window.alert("Added")} />
                        </div>
                        <div>
                            <span className="name">Salad</span>
                            <span className="rewards ml-1">
                                <span>+14</span>
                                <img src="./image/burger.png" height="30px" width="30px" alt="icon" />
                            </span>
                            <img className="float-right addButton" src="./image/addButton.png" alt="add" onClick={() => window.alert("Added")} />
                        </div>
                    </div>
                    <div className="getPoints col-8 col-md-3 p-2 m-4">
                        <div>
                            <span className="name">Your Points</span>
                            <span className="rewards ml-1 float-right">
                                <span>+1</span>
                                <img src="./image/burger.png" height="30px" width="30px" alt="icon" />
                            </span>
                        </div>
                        <div>
                            <span className="name">Gifts</span>
                            <span className="rewards ml-1 float-right">
                                <span>+1</span>
                                <img src="./image/burger.png" height="30px" width="30px" alt="icon" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="payButton d-flex justify-content-center mt-md-4 mb-3 ">
                <button onClick={()=>window.alert("payment done")}>Pay Now</button>
            </div>
        </div>
    );
}

export default Checkout;
