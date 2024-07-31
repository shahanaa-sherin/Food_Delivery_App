import Rescards from "./ResCards/Rescards";
import "./Body.css";
import { resList2 } from "../../Utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";

function Body() {
  const [resList, setresList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const handleFilter = () => {
    setresList(resList.filter((res) => res.rating >= 4));
  };

  const fetchData = async () => {
    try {
      // Simulate a delay to mimic fetching data
      setTimeout(() => {
        const json = resList2;
        setresList(json);
        setLoading(false); // Set loading to false once data is set
      }, 1000);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setLoading(false); // Ensure loading state is updated even if there's an error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Render Shimmer if loading, otherwise render the actual content
  return loading ? (
    <Shimmer />
  ) : (
    // return (
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
            <button
              className="srch-button"
              onClick={() => {
                console.log(searchText);
                const filteredFoods  = resList.filter((res) => {
                  return res.description.toLowerCase().includes(searchText.toLowerCase());
                });
                setresList(filteredFoods);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              handleFilter();
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="res-container">
          {resList.map((restaurant) => (
            <Rescards key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
  // );
}

export default Body;
