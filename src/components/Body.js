import RestrauntCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterRestaurantData = (searchText, allRestaurants) => {
  return allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  if(allRestaurants === undefined) return null;

  return (allRestaurants.length === 0) ? <Shimmer></Shimmer> : (
    <>
      <div className="search-container">
        <input
          type="search"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          type="button"
          onClick={() => {
            const filterRestaurants = filterRestaurantData(searchText,allRestaurants);
            setFilteredRestaurants(filterRestaurants);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {
        (filteredRestaurants?.length > 0 ?
        filteredRestaurants.map((restaurant) => {
          return (
           <Link to={"/restaurant/"+restaurant?.data?.id} key={restaurant?.data?.id}> <RestrauntCard {...restaurant.data}/></Link>
          );
        }): <h3> no results found</h3>)
        }
      </div>
    </>
  );
};

export default Body;
