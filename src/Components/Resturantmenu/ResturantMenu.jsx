import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import { RESTURANT_MENU_URL } from "../../Utils/Constants";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const [itemCards, setItemCards] = useState([]); 

  const { resid } = useParams();
  console.log(resid);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          RESTURANT_MENU_URL +
            resid +
            "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await response.json();
        console.log("Fetched Data:", json);

        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    if (resInfo) {
      console.log("Processing Data:", resInfo);

      const restaurantInfo = resInfo.cards?.find(
        (card) =>
          card.card &&
          card.card.card &&
          card.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )?.card?.card?.info;

      if (restaurantInfo) {
        const {
          name,
          cuisines = [], // Default to empty array if undefined
          costForTwoMessage,
          avgRating: rating,
        } = restaurantInfo;
        setMenuData({
          name,
          cuisines: cuisines.join(", "),
          costForTwoMessage,
          rating,
        });
      }
      // Extract itemCards from the API response
      const itemCards =
        resInfo.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card
          ?.card?.itemCards || [];
      console.log("itemCardsData:", itemCards);

      if (itemCards) {
        setItemCards(itemCards);
      }
    }
  }, [resInfo]);

  if (!menuData) {
    return <Shimmer />;
  }

  return (
    <div className="menu-container">
      <h1>{menuData.name}</h1>
      <p>
        {menuData.cuisines} - {menuData.costForTwoMessage}
      </p>
      <h6>Rating: {menuData.rating}</h6>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" RS"} {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
