import {useState} from "react"

import Header from "./Header"
import Categories from "./Categories"
import Filters from "./Filterstab"
import Propertycard from "./propertycard"
import Footerpanel from "./Footerpanel"
import Signuppanel from "./Signuppanel"
import Accountmenu from './Accountmenu'

export default function Homepage(props)
{

    const [showAccountmenu, setShowAccountmenu] = useState(false)
    const [propertycards,setPropertycards]=useState(false)
    const[signuppanel,setSignuppanel]=useState(false)

    const fetchPropertycards=(url)=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setPropertycards(data.listings))
        .catch(error=>console.log(error))
    }

    fetchPropertycards("/db/data.json")

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
    return(
        <>
        {showAccountmenu && <Accountmenu handleSignupClick={handleSignupClick}/>}
        {signuppanel && <Signuppanel handleSignuppanelCollapse={handleSignuppanelCollapse}/>}
        <Header handleAccountmenuClick={handleAccountmenuClick}/>   
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