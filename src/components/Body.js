import RestaurantCard from "./Restaurent";
import reslist from "../utilis/mock_data";
import { useState } from "react";


//   {
//     info: {
//       id: "741003",
//       name: "Chaayos Chai+Snacks=Relax",
//       cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
//       locality: "Gaur Global Village",
//       areaName: "Crossings Republik Township",
//       costForTwo: "₹250 for two",
//       cuisines: [
//         "Bakery",
//         "Beverages",
//         "Chaat",
//         "Desserts",
//         "Home Food",
//         "Italian",
//         "Maharashtrian",
//         "Snacks",
//         "Street Food",
//         "Sweets",
//       ],
//       avgRating: 4.6,
//       veg: true,
//       parentId: "281782",
//       avgRatingString: "4.6",
//       totalRatingsString: "460",
//       sla: {
//         deliveryTime: 22,
//         lastMileTravel: 1.1,
//         serviceability: "SERVICEABLE",
//         slaString: "20-25 mins",
//         lastMileTravelString: "1.1 km",
//       },
//       availability: {
//         nextCloseTime: "2024-10-08 02:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
//             description: "Delivery!",
//           },
//         ],
//       },
//       isOpen: true,
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹199",
//       },
//     },
//   },
//   {
//     info: {
//       id: "427017",
//       name: "Baskin Robbins - Ice Cream Desserts",
//       cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
//       locality: "Sector 4",
//       areaName: "Gaur City 1",
//       costForTwo: "₹250 for two",
//       cuisines: ["Desserts", "Ice Cream"],
//       avgRating: 4.6,
//       veg: true,
//       parentId: "5588",
//       avgRatingString: "4.6",
//       totalRatingsString: "210",
//       sla: {
//         deliveryTime: 35,
//         lastMileTravel: 4.7,
//         serviceability: "SERVICEABLE",
//         slaString: "35-40 mins",
//         lastMileTravelString: "4.7 km",
//       },
//       availability: {
//         nextCloseTime: "2024-10-07 23:59:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
//             description: "Delivery!",
//           },
//         ],
//       },
//       isOpen: true,
//       aggregatedDiscountInfoV3: {
//         header: "50% OFF",
//         subHeader: "UPTO ₹90",
//       },
//     },
//   },
// ];

const Body = () => {

    const [isreslist,setReslist]=useState(reslist);

  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-btn">Search</button>
        <button className="filter-btn" onClick={()=>{
            const filterRestaurent=reslist.filter((res)=>res.info.avgRating>4);
        setReslist(filterRestaurent)}}
        >Top rated restaurant</button>
      </div>
      <div className="restaurant-container">
        <div className="restaurant-card">
          {isreslist.map((resData, index) => {
            return <RestaurantCard key={index} resData={resData} />;
          })}
        </div>
      </div>
    </>
  );
};


export default Body;