
import Logo from './Logo'
import Searchbar from './Searchbar'

export default function Header()
{
    return(
        <div className="header">
            <Logo/>
            <Searchbar/>
            <div className="add-property-container">
                <button id="add-property">add property</button>
                <span className="material-symbols-outlined add-property-icon">real_estate_agent</span>
            </div>

            <span className="material-symbols-outlined dp">account_circle</span>
        </div>
    )
}