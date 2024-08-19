import useResturantMenu from "../../Utils/useResturantMenu";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const { resid } = useParams();
  console.log(resid);

  const resInfo = useResturantMenu(resid);
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines = [], // Default to empty array if undefined
    costForTwoMessage,
    avgRating: rating,
  } = resInfo?.cards?.[0]?.card?.card?.info || {};
  
  // Safely accessing itemCards with a fallback to an empty array
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.itemCards || [];

  console.log("itemCardsData:", itemCards);

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h4>Rating: {rating}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {" RS"} {item.card.info.price / 100}
            </li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
};

export default ResturantMenu;
