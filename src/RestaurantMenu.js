import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {IMG_CDN_URL} from './constants';
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    },[])

    const formatRestaurantData = (jsonData) => {
        let restaurantData = jsonData?.data?.cards[0]?.card?.card?.info;
        let rawData = jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const restmenu = rawData.reduce((menus, currentValue) => {
            const itemData = currentValue?.card?.card?.itemCards;
            if(itemData) {menus.push(...itemData)};
            return menus;
        }, []);
        restaurantData.menus = restmenu;
        console.log(restaurantData);
        return restaurantData;
    }

    const getRestaurantInfo = async() => {
        const restaurantMenuStream = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9689968&lng=77.72088529999999&restaurantId="+resId+"&submitAction=ENTER");
        const jsonData = await restaurantMenuStream.json();
        setRestaurant(formatRestaurantData(jsonData));
    }

    return (!restaurant) ? <Shimmer></Shimmer> : (
        <section className="menu">
            <div>
            <p>Restaurant Menu : {resId}</p>
            <h1>{restaurant?.name}</h1>
            <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId}></img>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwo}</h3>
            </div>
            <div>
                <h3> Menu </h3>
                <ul>
                    {restaurant?.menus.map((item,index) => ( <li key={index}> {item?.card?.info?.name} </li> ))}
                </ul>
            </div>
        </section>

    )
}

export default RestaurantMenu;