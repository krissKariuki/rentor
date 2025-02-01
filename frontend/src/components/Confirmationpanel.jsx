export default function Confirmationpanel()
{
     return (
        <div className='overlay'>
         <div className="confirmationpanel">
            <div className="confirmationpanel-header">
               <span className="material-symbols-outlined confirmationpanel-back">chevron_left</span>
               <span className="header-label">Confirm your number</span>
            </div>
            <p className="confirmationpanel-message">Enter the code we sent over SMS to 0123456789:</p>
            <div className="confirmationpanel-OTPdigits">
               <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <div className="confirmationpanel-foot">
               <span className="confirmationpanel-moreoptions">more options</span>
               <button className="confirmationpanel-continue">continue</button>
            </div>
         </div>
        </div>
     )
}