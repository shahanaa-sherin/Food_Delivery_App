import "../ResCards/Rescards.css";
function Rescards(props) {
  const { resData } = props;

  return (
    <>
      <div className="res-card">
        <img
          className="res-img"
          src={resData.imageId}
          alt={resData.accessibility.altText}
        />
        <h3>{resData.description}</h3>
        <h5>{resData.rating} stars</h5>
        <a href={resData.action.link} target="_blank" rel="noopener noreferrer">
          <button className="order-btn">Order now</button>
        </a>
      </div>
    </>
  );
}

export default Rescards;
