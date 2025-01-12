import {useState,useEffect} from "react"

import Header from "./Header"
import Categories from "./Categories"
import Filters from "./Filterstab"
import Propertycard from "./propertycard"
import Footerpanel from "./Footerpanel"
import Signuppanel from "./Signuppanel"
import Accountmenu from './Accountmenu'

export default function Homepage(props)
{
    const[categories,setCategories]=useState(null)
    const[activeCategory,setActiveCategory]=useState('new')
    const [showAccountmenu, setShowAccountmenu] = useState(false)
    const [propertycards,setPropertycards]=useState(false)
    const[signuppanel,setSignuppanel]=useState(false)


    const determineActiveCategory=(category)=>
    {
        setActiveCategory(category)
        const categoryIndex=categories.findIndex((cat)=>cat.name===category)
        return setPropertycards(categories[categoryIndex].listings)
    }

    const handleCategorytabClick=(category)=>{
        determineActiveCategory(category)
        setActiveCategory(category)
    }

    const fetchPropertycards=async(url)=>{
        const response=await fetch(url)
        const result=await response.json()

        setCategories(result.categories)
        setPropertycards(result.categories[0].listings)
    }
    const handleAccountmenuClick=()=>{
        setShowAccountmenu(!showAccountmenu)
    }
    const handleSignupClick=()=>{
        setSignuppanel(!signuppanel)
        setShowAccountmenu(false)
    }
    const handleSignuppanelCollapse=()=>{
        setSignuppanel(false)
    }

    useEffect(() => {
    fetchPropertycards("./db/data-1.json")
    },[])
    return(
        <>
        {showAccountmenu && <Accountmenu handleSignupClick={handleSignupClick}/>}
        {signuppanel && <Signuppanel handleSignuppanelCollapse={handleSignuppanelCollapse}/>}
        <Header handleAccountmenuClick={handleAccountmenuClick}/>   
        <div className="categories-container">
        {categories && <Categories 
        handleCategorytabClick={handleCategorytabClick} 
        categories={categories}
        activeCategory={activeCategory}
        />}
        <Filters/>
        <div className="categories-other"></div>
        </div>

        <div className="propertycard-container">
            {
                propertycards && propertycards.map((propertycard,index)=>
                {
                    return <Propertycard 
                    key={index}
                    handlePropertycardClick={props.handlePropertycardClick}
                    image={propertycard.image}
                    name={propertycard.name}
                    location={propertycard.location}
                    rooms={propertycard.rooms}
                    price={propertycard.price}
                    rating={propertycard.rating}
                    />
                })
            }
        </div>
        <button className="center-self show-map">show map</button>
        <Footerpanel/>
        </>
    )
}