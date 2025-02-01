export default function Ammenity(props)
{
    return(
        <div className="ammenity">
            <span className="material-symbols-outlined ammenity-icon">{props.icon}</span>
            <span className="ammenity-text">{props.text}</span>
        </div>
    )
}