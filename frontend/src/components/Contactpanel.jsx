export default function Contactpanel()
{
    return(
        <div className="contactpanel-card">
            <p className="contactpanel-price">kes12,400.month</p>

            <p className="contactpanel-activehours">
            <span className="activehours-label">Open today</span>
                <span>09:00AM</span>-
                <span>05:00PM</span>
            </p>

            <button className="contactpanel-requesttour">request  tour</button>

            <button className="contactpanel-sendmessage">send message</button>
             {/* <p className="contactpanel-number">(254) 712345678</p> */}
        </div>
    )
} 