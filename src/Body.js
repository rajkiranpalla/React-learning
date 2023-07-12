import RestrauntCard from "./RestaurantCard";
import { restrautList } from "./constants";
import { useEffect, useState } from "react";

const filterRestaurants = (searchText) => {
  return restrautList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText)
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrautList);

  useEffect(() => {
    getRestaurants();
  }, [])

  const getRestaurants = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9689968&lng=77.72088529999999&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    setRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  } 

  return (
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
            const filteredRestaurants = filterRestaurants(searchText);
            setRestaurants(filteredRestaurants);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
