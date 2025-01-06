export default function Categorytab(props)
{
    return(
        <p className="category-tab">
            <span className="material-symbols-outlined category-icon">{props.icon}</span>
            <span>{props.name}</span>
        </p>
    )
}