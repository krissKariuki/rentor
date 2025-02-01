
import { useState } from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'

export default function Header(props)
{

    return(
        <>
        <div className="header">
            <Logo/>
            <Searchbar/>
            <div className="add-property-container">
                <button id="add-property">Add property</button>
                <span className="material-symbols-outlined add-property-icon">add</span>
            </div>

            <div className="account-container" onClick={props.handleAccountmenuClick}>
            <button className="account-menuicon material-symbols-outlined">menu</button>
            <div className="dp">
                <img src="/imgs/dp.avif" alt="dp" className="dp-img" />
            </div>
            </div>
        </div>
        </>
    )
}