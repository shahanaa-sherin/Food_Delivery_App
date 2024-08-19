import Rescards from "./ResCards/Rescards";
import "./Body.css";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [filteredList, setFilteredList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleFilter = () => {
    setFilteredList(originalList.filter((res) => res.rating >= 4));
  };

  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.7867303&lng=76.6547932&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTI&page=${page}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      console.log(restaurants);

      if (restaurants.length === 0) {
        setHasMore(false); // No more data available
      } else {
        // Filter out restaurants that already exist in the list to avoid duplicates
        const newRestaurants = restaurants.filter(
          (restaurant) =>
            !originalList.some((res) => res.info.id === restaurant.info.id)
        );

        setOriginalList((prev) => [...prev, ...newRestaurants]);
        setFilteredList((prev) => [...prev, ...newRestaurants]);
      }

      setLoading(false);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        if (hasMore && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore, loading]);

  const handleSearch = () => {
    const filteredFoods = originalList.filter((res) =>
      res.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filteredFoods);
  };

  return loading ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search_box"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for Foods"
            />
            <button className="srch-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <button className="filter-btn" onClick={handleFilter}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {filteredList.map((restaurant, index) => {
            const id = restaurant?.info?.id; // Safely access id
            if (id) {
              return (
                <Link key={`${id}-${index}`} to={"/restaurant/" + id}>
                  <Rescards resData={restaurant} />
                </Link>
              );
            }
            return null; // Or display a fallback UI if needed
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
