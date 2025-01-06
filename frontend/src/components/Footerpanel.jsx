export default function Footerpanel()
{
    return(
        <div className="footerpanel">
            <div className="footerpanel-section footerpanel-leftsection">
            <p className="footerpanel-copyright">&copy; 2025 Rentor, Inc</p>.
            <p className="footerpanel-terms">Terms</p>.
            <p className="footerpanel-sitemap">Sitemap</p>.
            <p className="footerpanel-privacy">Privacy</p>.
            <p className="footerpanel-privacychoices">Your Privacy Choices</p>
            </div>

            <div className="footerpanel-section footerpanel-rightsection">
                <p className="foooterpanel-language">
                    <span className="material-symbols-outlined">language</span>
                    <span>English US</span>
                </p>
                <p className="footerpanel-currency">KES</p>
                <p className="footerpanel-support">
                    Support & resources
                    <span className="material-symbols-outlined footerpanel-supporticon">chevron_right</span>
                </p>
            </div>
        </div>
    )
}