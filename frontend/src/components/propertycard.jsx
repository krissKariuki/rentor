export default function Propertycard()
{
    return(
        <div className="propertycard">
            <div className="propertycard-image">
            <span className="material-symbols-outlined propertycard-favourite">favorite</span>
            </div>

            <div className="propertycard-info">
                <p className="propertycard-name">kingfisher flats</p>
                <p className="propertycard-location">Nairobi,Kenya</p>
                <p className="propertycard-rooms">1 bedroom</p>
                <p className="propertycard-price">kes12,000/month</p>
                <p className="center-child propertycard-rating">
                <span className="material-symbols-outlined">star</span>
                <span className="rating">3.4</span>
                </p>    
            </div>
        </div>
    )
}