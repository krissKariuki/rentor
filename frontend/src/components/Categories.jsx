import {useState} from "react"
import Categorytab from "./Categorytab"

export default function Categories()
{
    const [activeCategory,setActiveCategory]=useState('new')

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

    const handleCategorytabClick=(category)=>
    {
        setActiveCategory(category)
    }

    const handleCategoriesnavrightClick=()=>{
        const categories=document.querySelector('.categories')
        categories.scrollTo({left:categories.scrollLeft+800,behavior:'smooth'})
    }
    const handleCategoriesnavleftClick=()=>{
        const categories=document.querySelector('.categories')
        categories.scrollTo({left:categories.scrollLeft-800,behavior:'smooth'})
    }
    return(
        <>
        <button className="material-symbols-outlined categories-nav cn-left" onClick={handleCategoriesnavleftClick}>chevron_left</button>
        <div className="categories">
            {
                categories.map((category,index)=>
                {
                    return <Categorytab 
                    key={index} 
                    icon={category.icon} 
                    name={category.name}
                    categoryState={activeCategory} 
                    handleCategorytabClick={handleCategorytabClick}
                    />
                })
            }
        </div>
        <button className="material-symbols-outlined categories-nav cn-right" onClick={handleCategoriesnavrightClick}>chevron_right</button>

        </> 
    )
}