import { img_cdn } from "../Constants";

const RestaurantCard = ( { name , cloudinaryImageId , cuisines , avgRating }) => {

    return (
        <div className="restaurantCard">
            <img src={img_cdn + cloudinaryImageId} alt="cousines of the restaurant"/>
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
        </div>
    );
};

export default RestaurantCard;