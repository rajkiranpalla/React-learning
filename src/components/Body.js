import RestrauntCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlinestatus";

const filterRestaurantData = (searchText, allRestaurants) => {
  return allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    getRestaurants();
  }, [])

  const getRestaurants = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9689968&lng=77.72088529999999&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    const restaurantData = jsonData?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
  } 

  if(!onlineStatus) return ( <h1> Device is offline. please check your internet connection</h1>)

  if(allRestaurants === undefined) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              const filterRestaurants = filterRestaurantData(searchText,allRestaurants);
              setFilteredRestaurants(filterRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
      {
        (filteredRestaurants?.length > 0 ?
        filteredRestaurants.map((restaurant) => {
          return (
           <Link to={"/restaurant/"+restaurant?.data?.id} key={restaurant?.data?.id}> <RestrauntCard {...restaurant.data}/></Link>
          );
        }): <h3> no results found</h3>)
        }
      </div>
    </div>
  );
};

export default Body;
