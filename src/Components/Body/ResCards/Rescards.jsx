import "../ResCards/Rescards.css";

function Rescards(props) {
  const { resData } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = resData?.info;

  return (
    <>
      <div className="res-card">
        <img
          className="res-img"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} // Use the constructed image URL
          alt="restaurant"
        />
        <h2 className="res-name">{name}</h2>{" "}
        <h4 className="res-name">{cuisines.join(", ")}</h4>
        <h5 className="res-name">{avgRating} stars</h5>{" "}
        {/* Changed from rating to avgRating */}
        {/* <a href={cta.link} target="_blank" rel="noopener noreferrer"> */}
          <button className="order-btn">Order now</button>
        {/* </a> */}
      </div>
    </>
  );
}

export default Rescards;
