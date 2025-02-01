export default function Ratingcategory(props)
{
    return(
        <div className="ratingcategory">

            <p className="ratingcategory-label">{props.label}</p>
            <p className="ratingcategory-count">{props.rating}</p>

            <span className="material-symbols-outlined ratingcategory-icon">{props.icon}</span>
        </div>
    )
}