import Rescards from "./ResCards/Rescards";
import "./Body.css";
import { resList } from "../../Utils/MockData";
function Body() {
  return (
    <>
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => console.log("clicked")}>
            Top Rated Resturants
          </button>
        </div>
        <div className="res-conatiner">
          {resList.map((resturant) => (
            <Rescards key={resturant.id} resData={resturant} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
