import {useState} from "react"

import Header from "./Header"
import Categories from "./Categories"
import Filters from "./Filterstab"
import Propertycard from "./propertycard"
import Footerpanel from "./Footerpanel"
import Signuppanel from "./Signuppanel"

export default function Homepage()
{

    const [propertycards,setPropertycards]=useState(false)
    const[signuppanel,setSignuppanel]=useState(false)

    const fetchPropertycards=(url)=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setPropertycards(data.listings))
        .catch(error=>console.log(error))
    }

    fetchPropertycards("/db/data.json")

    return(
        <>
        {signuppanel && <Signuppanel/>}
        <Header/>   
        <div className="categories-container">
        <Categories/>
        <Filters/>
        <div className="categories-other"></div>
        </div>

        <div className="propertycard-container">
            {
                propertycards && propertycards.map((propertycard,index)=>
                {
                    return <Propertycard 
                    key={index}
                    handleClick={()=>console.log("clicked a property card")}
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