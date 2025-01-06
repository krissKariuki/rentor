export default function Propertycard(props)
{
    return(
        <div className="propertycard" onClick={props.handleClick}>
            <div className="propertycard-image">
            <img src={props.image} alt="property" className="propertycard-img"/>
            <span className="material-symbols-outlined propertycard-favourite">favorite</span>
            </div>

            <div className="propertycard-info">
                <p className="propertycard-name">{props.name}</p>
                <p className="propertycard-location">{props.location}</p>
                <p className="propertycard-rooms">{props.rooms}</p>
                <p className="propertycard-price">{props.price}</p>
                <p className="center-child propertycard-rating">
                <span className="material-icons propertycard-ratingicon">star</span>
                <span className="rating">{props.rating}</span>
                </p>    
            </div>
        </div>
    )
}