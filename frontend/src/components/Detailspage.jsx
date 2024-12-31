import Ammenity from "./Ammenity"
import Contactpanel from "./Contactpanel"
import Footer from "./Footer"

export default function Detailspage()
{

    const ammenities=[
        {id:1,icon:'wifi',text:'wifi-15Mbps'},
        {id:2,icon:'nest_cam_iq_outdoor',text:'security cameras outside'},
        {id:3,icon:'restaurant',text:'kitchen'},
        {id:4,icon:'tv',text:'TV'},
        {id:5,icon:'directions_car',text:'free parking on premises'},
        {id:6,icon:'dry_cleaning',text:'dry laundry services'},
        {id:7,icon:'pets',text:'pets are allowed'}
    ]
    
    return(
        <>
        <div className="detailstab">
            <p className="detailstab-tab">photos</p>
            <p className="detailstab-tab">amanities</p>
            <p className="detailstab-tab">reviews</p>
            <p className="detailstab-tab">location</p>
        </div>

        <div className='contactpanel-container'>
        <Contactpanel/>
        </div>

        <div className="detail-name-container">
        <p className="detail-name">Kingfisher flats at Embul-bul</p>

        <div className="detail-name-container-actions">
        <p className="center-child share">
            <span className="material-symbols-outlined">share</span>
            <span>share</span>
        </p>

        <p className="center-child save">
            <span className="material-symbols-outlined">favorite</span>
            <span>save</span>
        </p>
        </div>
        </div>

        <div className="center-self detail-photos-container">
            <div className="main-image"></div>

            <div className="other-images">
            <div className='other-image'></div>
            <div className='other-image other-image-top'></div>
            <div className='other-image'></div>
            <div className='other-image other-image-bottom'>
                <div className="show-all-photos">
                    <span className="material-symbols-outlined">apps</span>
                    <span>Show all photos</span>
                </div>
            </div>
            </div>
        </div>

        <p className="detail-type">apartment flats in Nairobi,Kenya</p>
        <p className="detail-peeksummary">
            <span className='peeksummary'>1bedroom</span>.
            <span className='peeksummary'>Water</span>.
            <span className='peeksummary'>Wifi</span>.
            <span className='peeksummary'>Electricity</span>
        </p>

        <div className="provider-peeksummary">
            <div className="provider-dp"></div>
            <p className="provider-name">provied by George</p>
            <p className="provider-duration">midRentor.2years rentor</p>
        </div>

        <div className="other-ammenities">
            <div className='other-ammenities-block'>
                <span className="other-ammenities-icon material-symbols-outlined">directions_car</span>

                <p>
                <span className='other-ammenities-header'>12 min drive to karen country club</span>
                <span>This place is close to a golf course</span>
                </p>
            </div>
            <div className='other-ammenities-block'>
                <span className="other-ammenities-icon material-symbols-outlined">bolt</span>

                <p>
                <span  className="other-ammenities-header">Backup electricity</span>
                <span>Generators and solar panels are available</span>
                </p>
            </div>
            <div className='other-ammenities-block'>
                <span className="other-ammenities-icon material-symbols-outlined">auto_delete</span>

                <p>
                <span className="other-ammenities-header">Free garbage collection service</span>
                <span>Garbage collection services are done for free once every week</span>
                </p>
            </div>
        </div>

        <div className="detail-description">
            <p className="description-text">
            A high end apartment with luxurious furnishings, it's private and spacious. It has fantastic views of the city centre and part of Ngong Hills. Its 3.9 km to the city centre and about 20km from the airport. The apartment is near Yaya centre, Junction and Prestige shopping malls. Guests have access to the swimming pool,  and the gym . Has readily available Internet and at a high speed. There's CCTV and well trained guards at the main entrance .Guests will self check in 24/7. There's a safebox...
            </p>
            <div className="center-child description-showmore">
                <span className='description-showmore-text'>show more</span>
                <span className="material-symbols-outlined description-showmore-icon">chevron_right</span>
            </div>
        </div>

        <div className="ammenities">
            <p className="ammenities-label">What this place offers</p>

            <div className="ammenities-list">
                {
                    ammenities.map(item=>(
                        <Ammenity key={item.id} icon={item.icon} text={item.text}/>
                    ))
                }
            </div>

            <div className="center-child showall-ammenities">Show all 12 ammenities</div>
        </div>

        <div className="location-container">
            <p className="location-label">location</p>
            <div className="location-map"></div>
            <p className="location-name">Karen,Nairobi county,Kenya</p>
        </div>

        <Footer/>
        </>
    )
}