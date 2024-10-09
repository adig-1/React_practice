import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error"; 
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


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
           
        </div>
    );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },

  {
    path: "/about",
    element: <div>About</div>,
  }
]);


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
root.render(<RouterProvider router={approuter}/>);

{/* <div id="parent">
    <div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
    <div/>
    
</div> */}