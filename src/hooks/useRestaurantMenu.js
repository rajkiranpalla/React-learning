import {useState,useEffect} from 'react';

const useRestaurantMenu = (resId) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    },[])

    const formatRestaurantData = (jsonData) => {
        let restaurantData = jsonData?.data?.cards[2]?.card?.card?.info;
        let categories = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        restaurantData.categories = categories;
        console.log(restaurantData);
        return restaurantData;
    }

    const getRestaurantInfo = async() => {
        const restaurantMenuStream = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9689968&lng=77.72088529999999&restaurantId="+resId+"&submitAction=ENTER");
        const jsonData = await restaurantMenuStream.json();
        setRestaurantInfo(formatRestaurantData(jsonData));
    }

    return restaurantInfo;
}

export default useRestaurantMenu;
