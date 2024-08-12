import "../ResCards/Rescards.css";

function Rescards(props) {
  const { resData } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = resData?.info;

  return (
    <>
      <div className="res-card">
        <img
          className="res-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          } // Use the constructed image URL
          alt="restaurant"
        />
        <h2 >{name}</h2>{" "}
        <h4 >{cuisines.join(", ")}</h4>
        <h5>{avgRating} stars</h5>{" "}
        <button className="order-btn">Order now</button>
      </div>
    </>
  );
}

export default Rescards;
