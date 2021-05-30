import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import { Rewards } from './Rewards';
 

export const RestaurantCard = (props) => {
    const {
        restaurant: { _id, restaurantName, offers, myPoints = 0, updatedAt, openingTime, closingTime },
    } = props;
    return (
        <>
            <div
                className="restCard m-md-4 m-3 p-4 col-10 col-md-3"
                style={{ background: 'linear-gradient(to top, #FF2E2E, #E8D0D0)' }}
                onClick={() => props.history.push(`/restaurant/${_id}`)}>
                <div className="row align-items-center mb-3">
                    <div className="col-7">
                        <div className="restName">{restaurantName}</div>
                        <div className="time">
                            {openingTime} - {closingTime}{' '}
                        </div>
                        {/* <div className="offer">{'offers'}</div> */}
                    </div>
                    <div className="col-5 text-center">
                        <span className="p-2 totalCards">{myPoints}</span>
                        <span className="p-1">
                            <CircularProgress variant="determinate" value={70} style={{ color: 'green' }} />
                        </span>
                    </div>
                </div>
                <div className="rewardsHeading">Rewards</div>
                {offers?.map((offer) => (
                    <Rewards key={offer._id} name={offer.giftItem} coinsRequired={offer.coin} />
                ))}
            </div>
        </>
    );
};
