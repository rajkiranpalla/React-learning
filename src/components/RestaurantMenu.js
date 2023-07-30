import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

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
      {restaurantInfo?.categories.map((category) => (
        // controlled component
        <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>
      ))}
    </section>
  );
};

export default RestaurantMenu;
