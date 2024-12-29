export default function  Searchbar()
{
    return(
        <div className="searchbar">
            <input type="text" placeholder="search here" className="search-input" />
            <span className="material-symbols-outlined center-child search-icon">search</span>
        </div>
    )
}