import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const restaurantInfo = useRestaurantMenu(resId);
  

  return !restaurantInfo ? (
    <Shimmer></Shimmer>
  ) : (
    <section className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restaurantInfo?.name}</h1>
      <p className="font-bold text-lg">
        {restaurantInfo?.cuisines.join(", ")} -{" "}
        {restaurantInfo?.costForTwoMessage}
      </p>
      {/* categories accordions */}
      {restaurantInfo?.categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItemList={index == showIndex ? true : false}
          index={index}
          setShowIndex={setShowIndex}
        />
      ))}
    </section>
  );
};

export default RestaurantMenu;
