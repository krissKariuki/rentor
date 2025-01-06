import Categorytab from "./Categorytab"

export default function Categories()
{

    const categories=[
        {icon:'new_releases',name:'new'},
        {icon:'villa',name:'Villa'},
        {icon:'domain',name:'Apartment'},
        {icon:'house',name:'solo house'},
        {icon:'liquor',name:'Penthouse'},
        {icon:'speaker',name:'Studio'},
        {icon:'agriculture',name:'Farmhouse'},
        {icon:'door_sliding',name:'Duplex'},
        {icon:'holiday_village',name:'Row House'},
        {icon:'source_environment',name:'Service Apartment'},
        {icon:'warehouse',name:'Loft'},
        {icon:'shelves',name:'Condo'},
        {icon:'location_city',name:'Town House'},
        {icon:'cottage',name:'Cottage'},
    ]
    return(
        <>
        <button className="material-symbols-outlined categories-nav cn-left">chevron_left</button>
        <div className="categories">
            {
                categories.map((category,index)=>
                {
                    return <Categorytab key={index} icon={category.icon} name={category.name}/>
                })
            }
        </div>
        <button className="material-symbols-outlined categories-nav cn-right">chevron_right</button>

        </> 
    )
}