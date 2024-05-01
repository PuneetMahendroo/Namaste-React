import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import { first , second , img_cdn } from "../Constants";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {

    const { id } = useParams();
    const [ restaurantInfo , setRestaurantInfo ] = useState(null);
    const [ restaurantsMenu , setRestaurantsMenu ] = useState(null);


    useEffect(() => {
        getRestaurantMenu();
    },[]);

    async function getRestaurantMenu() {
        // console.log(id);
        const dataa = await fetch(first+id+second);
        const jsonn = await dataa.json();
        console.log(jsonn); 
        // console.log(jsonn?.data?.cards[0]?.card?.card?.info);xx
        // console.log(jsonn?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // console.log(jsonn?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        // new-1-5-24
        // data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        // data.cards[2].card.card.info
        setRestaurantInfo(jsonn?.data?.cards[2]?.card?.card?.info);
        console.log(restaurantInfo);
        const aa = jsonn?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setRestaurantsMenu(jsonn?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        // ( restaurantInfo === null ) ?
        // setRestaurantInfo(jsonn?.data?.cards[1]?.card?.card?.info) : 
        // (jsonn?.data?.cards[0]?.card?.card?.info);
        // ( restaurantsMenu === null ) ?
        //     setRestaurantsMenu(Object.values(jsonn?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)) : setRestaurantsMenu(Object.values(jsonn?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards));
        }
    

    return (!restaurantInfo) ? <Shimmer /> : (
        <div className="restaurantMenu">
            <div className="info">
                <h1>{restaurantInfo?.name}</h1>
                <h2>Retaurant id is : {id}</h2>
                <img src={img_cdn + restaurantInfo?.cloudinaryImageId } alt="Food Respresentation"/>
                <h3>{restaurantInfo?.city}</h3>
                <h3>{restaurantInfo?.costForTwoMessage}</h3>
                <h3>{restaurantInfo?.avgRating} stars</h3>
            </div>
            <div className="Menu">
                <h1>Menu</h1>
                {console.log(restaurantsMenu)}
                {console.log(restaurantsMenu[0]?.card?.info?.name)}
                {console.log(restaurantsMenu[0]?.card?.info?.id)}
                <ul>
                    {(restaurantsMenu).map((item)=>(
                            <li key={item?.card?.info?.id} >{item?.card?.info?.name}</li>
                         ))}    
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;