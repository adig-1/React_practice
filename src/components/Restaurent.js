import { Cdn_Url } from "../utilis/content";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
    locality,
    cloudinaryImageId,
  } = resData?.info;
  console.log(cloudinaryImageId);
  console.log(resData);
  return (
    <div className="card">
      <div className="card-img">
        <img
          src={Cdn_Url
             +
            cloudinaryImageId
          }
        ></img>
      </div>

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime + " mins"}</h4>
    </div>
  );
};

export default RestaurantCard
