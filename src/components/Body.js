import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";//react-router-dom  


function filterRestaurants( searchInput , allRestaurants ){
    const filter = allRestaurants.filter((restaurant) =>
        restaurant.info?.name?.toLowerCase().includes(searchInput.toLowerCase()));
    return filter;
};

const Body = () => {
    
    const [ searchInput , setSearchInput ] = useState("");
    const [ filteredRestaurants, setFilteredRestaurants ] = useState([]);
    const [ allRestaurants , setAllRestaurants ] = useState([]);
    
    useEffect(() =>{
        getRestaurants();
    } , [] );
    
    async function getRestaurants() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.79636&lng=80.88820869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(!allRestaurants) return null;
    return (allRestaurants.length === 0) ? <Shimmer/> : ( 
        <div className="Body">
            <div className="search">

                <input type="text"
                className="search-input"
                placeholder="Search here"
                value={searchInput}
                onChange={
                    (e) => {
                        setSearchInput(e.target.value);
                    }
                }/>

                <button className="button" onClick={()=>{
                    const data = filterRestaurants( searchInput , allRestaurants);
                    setFilteredRestaurants(data);
                }}>Search</button>

            </div>
            
            <div className="display">
                {   
                    (filteredRestaurants === null ) ? 
                    (<h1>No Restaurants Found on your Search!</h1>):
                    (filteredRestaurants.map((restaurant)=>{
                    return <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id} ><RestaurantCard {...restaurant?.info}/></Link>;
                }))}
            </div>

        </div>
        
    );
};

export default Body;