import RestaurantCard from "./Restaurent";

import { useEffect, useState } from "react";


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

    const [isreslist,setReslist]=useState([]);
    const [isFiltered,setFiltered]=useState([])
    const[searchTxt,setSearchTxt]=useState("")

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6330166&lng=77.4424737&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        setFiltered(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setReslist(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
    }

  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" value={searchTxt} placeholder="Search" onChange={(e)=>{
          setSearchTxt(e.target.value)
        }} />
        {console.log(searchTxt)}
        <button className="search-btn" onClick={()=>
          {
            const searchRestaurent = isreslist.filter((res) =>
              res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            setFiltered(searchRestaurent);
          }
          
        }>Search</button>
        <button className="filter-btn" onClick={()=>{
            const filterRestaurent=isreslist.filter((res)=>res.info.avgRating>=4.4);
        setFiltered(filterRestaurent)}}
        >Top rated restaurant</button>
      </div>
      <div className="restaurant-container">
        <div className="restaurant-card">
          {isFiltered.map((resData, index) => {
            return <RestaurantCard key={index} resData={resData} />;
          })}
        </div>
      </div>
    </>
  );
};


export default Body;