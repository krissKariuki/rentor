import {useState} from "react"
import Categorytab from "./Categorytab"

export default function Categories(props)
{
    const [activeCategory,setActiveCategory]=useState('new')

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
                props.categories.map((category,index)=>
                {
                    return <Categorytab 
                    key={index} 
                    icon={category.icon} 
                    name={category.name}
                    categoryState={props.activeCategory} 
                    handleCategorytabClick={props.handleCategorytabClick}
                    />
                })
            }
        </div>
        <button className="material-symbols-outlined categories-nav cn-right" onClick={handleCategoriesnavrightClick}>chevron_right</button>

        </> 
    )
}