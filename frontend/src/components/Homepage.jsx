import Header from "./Header"
import Categories from "./Categories"
import Filters from "./Filterstab"
import Propertycard from "./propertycard"
import Footer from "./Footer"

export default function Homepage()
{
    return(
        <>
        <Header/>   
        <div className="categories-container">
        <Categories/>
        <Filters/>
        <div className="categories-other"></div>
        </div>

        <div className="propertycard-container">
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>
        <Propertycard/>

        </div>

        <p className="center-self continue-exploring">continue exploring this category</p>
        <button className="center-self show-more">show more</button>
        <Footer/>
        </>
    )
}