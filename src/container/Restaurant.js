import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Discounts } from '../components/Discounts';
import { MenuItemCard } from '../components/MenuItemCard';
import { PreviousOrders } from '../components/PreviousOrders';
import { RestaurantCard } from '../components/restaurant/RestaurantCard';
import { SearchMenuItem } from '../components/SearchMenuItem';
import { TopFiveOrders } from '../components/TopFiveOrders';
import '../styles/Menu.css';
import { getRestaurantById } from '../Redux/actions/restaurant';

import { useDispatch, useSelector } from 'react-redux';

const Restaurant = (props) => {
 
    let { restaurantId } = useParams();
   
    useEffect(() => {
        if (restaurantId) dispatch(getRestaurantById(restaurantId));
    }, []);

    const dispatch = useDispatch();

    const { restaurantById } = useSelector((state) => state.restaurant);
 
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {Boolean(restaurantById) ? (
                    <RestaurantCard restaurant={restaurantById?.response?.result} history={props.history} />
                ) : null}
                <div className="menuItems col-12">
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                    <MenuItemCard />
                </div>
            </div>
            <SearchMenuItem />
            <hr />
            <PreviousOrders />
            <Discounts />
            <TopFiveOrders />
        </div>
    );
};

export default Restaurant;
