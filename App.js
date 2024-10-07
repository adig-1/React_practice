import React from "react";
import ReactDOM from "react-dom/client";




/*
* Header
*  -Logo
*  -Nav Items
* Body
*  -Search
*  -RestaurantContainer
*      -RestaurantCard
*          -Image
*          -Name of Restaurant  
*          -Cuisine
*          -Rating

*Footer
*  -Copyright
*  -Links
*  -Address
*  -Contact
*/


const reslist = [
  {
    info: {
      id: "741003",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Gaur Global Village",
      areaName: "Crossings Republik Township",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      avgRating: 4.6,
      veg: true,
      parentId: "281782",
      avgRatingString: "4.6",
      totalRatingsString: "460",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.1 km",
      },
      availability: {
        nextCloseTime: "2024-10-08 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
    },
  },
  {
    info: {
      id: "427017",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Sector 4",
      areaName: "Gaur City 1",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.6",
      totalRatingsString: "210",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.7 km",
      },
      availability: {
        nextCloseTime: "2024-10-07 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
    },
  },
];


const Header=()=>{
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img src="https://as1.ftcdn.net/v2/jpg/02/41/30/72/1000_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div> 
    </>
  );
}


const RestaurantCard=(props)=>{
  const {resData}=props;
  const{name,cuisines,avgRating,costForTwo,sla:{deliveryTime},locality,cloudinaryImageId}=resData?.info;
  console.log(cloudinaryImageId)
  console.log(resData);
  return (
    <div className="card">
      <div className="card-img">
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
        ></img>
      </div>

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime + " mins"}</h4>
    </div>
  );
}

const Body=()=>{
  return (
  <>
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search"/>
      <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-container">
          <div className="restaurant-card">
            {reslist.map((resData,index)=>{
              return <RestaurantCard key={index} resData={resData}/>
            })}
          
          </div>
    </div>
  </>);
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
           
        </div>
    );
};


// const Heading = () => 
//     {
//     return <h1 id="heading">Namaste React abc</h1>
// };
// const Title =()=>{
//     return (
//       <>
//        <Heading/>
        
//         <h1 id="heading">Namaste React{Title}</h1>
//       </>
//     );
// };




// const heading= React.createElement("h1",{id:"heading"},
//     React.createElement("div",{id:"parent"},
//         [React.createElement("div",{id:"Child1"},
//         React.createElement("h1",{},"I am h1 tag"),
//         React.createElement("h2",{},"I am h2 tag"))],
//         [React.createElement("div",{id:"Child2"},
//         React.createElement("h1",{},"I am h1 tag"),
//         React.createElement("h2",{},"I am h2 tag"))]

//     ));
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

{/* <div id="parent">
    <div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
    <div/>
    
</div> */}