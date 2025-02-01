export default function Categorytab(props)
{
    return(
        <button 
        className={props.categoryState===props.name?'category-tab active-categorytab':'category-tab'}
        onClick={()=>props.handleCategorytabClick(props.name)}>
            <span className="material-symbols-outlined category-icon">{props.icon}</span>
            <span>{props.name}</span>
        </button>
    )
}