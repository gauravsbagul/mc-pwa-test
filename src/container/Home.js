import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RestaurantCard } from '../components/restaurant/RestaurantCard';
import { getToken, onMessageListener } from '../firebase';
import { saveFcmToken } from '../Redux/actions/auth';
import { getAllRestaurant } from '../Redux/actions/restaurant';
import '../styles/Home.css';



const Home = (props) => {

    const [token, setToken]=useState('');
    
    const [restaurantList, setRestaurantList] = useState([])

     
    const dispatch = useDispatch();

    const restaurant = useSelector((state) => state.restaurant);


    useEffect(() => {
        dispatch(getAllRestaurant())
    }, []);

    
    useEffect(() => {
        if (restaurant.restaurantList?.response?.result?.length) {
            setRestaurantList(restaurant.restaurantList?.response?.result);
        }
    }, [restaurant]);

    useEffect(() => {
        if (token) {
          dispatch(saveFcmToken(token))
        }

    }, [token]);

    //TODO: which works
    getToken(setToken);

    onMessageListener()
        .then((message) => {

        })
        .catch((err) => console.log('failed: ', err));
    

    return (
        <div className="container-fluid">
            {/* HEADER component */}
            <div className="row justify-content-center">
                {restaurantList?.map((item, index) => {
                    return <RestaurantCard key={item._id} restaurant={item} history={props.history} />;
                })}
            </div>
        </div>
    );
};

export default Home;
