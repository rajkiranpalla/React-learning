import {useState,useEffect} from 'react';

const useRestaurantMenu = (resId) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);

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
        setRestaurantInfo(formatRestaurantData(jsonData));
    }

    return restaurantInfo;
}

export default useRestaurantMenu;
