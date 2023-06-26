import RestrauntCard from "./RestaurantCard";
import { restrautList } from "./constants";
import { useState } from "react";

const filterRestaurants = (searchText) => {
  return restrautList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText)
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrautList);

  return (
    <>
      <div className="search-container">
        <input
          type="search"
          placeHolder="search"
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
