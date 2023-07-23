import {useParams} from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import {IMG_CDN_URL} from '../utils/constants';
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const restaurantInfo = useRestaurantMenu(resId);

    return (!restaurantInfo) ? <Shimmer></Shimmer> : (
        <section className="menu">
            <div>
            <p>Restaurant Menu : {resId}</p>
            <h1>{restaurantInfo?.name}</h1>
            <img src={IMG_CDN_URL+restaurantInfo?.cloudinaryImageId}></img>
            <h3>{restaurantInfo?.area}</h3>
            <h3>{restaurantInfo?.city}</h3>
            <h3>{restaurantInfo?.avgRating} stars</h3>
            <h3>{restaurantInfo?.costForTwo}</h3>
            </div>
            <div>
                <h3> Menu </h3>
                <ul>
                    {restaurantInfo?.menus.map((item,index) => ( <li key={index}> {item?.card?.info?.name} </li> ))}
                </ul>
            </div>
        </section>

    )
}

export default RestaurantMenu;