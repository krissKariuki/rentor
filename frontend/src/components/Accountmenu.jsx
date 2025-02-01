export default function Accountmenu(props)
{
    return(
        <div className="dpmenu">
            <button className="dpmenu-login" onClick={props.handleSignupClick}>Log in</button>
            <button className="dpmenu-signup" onClick={props.handleSignupClick}>Sign up</button>
            <button className="dpmenu-rentoryourplace">Rentor your place</button>
            <button className="dpmenu-helpcenter">Help center</button>
        </div>
    )
}