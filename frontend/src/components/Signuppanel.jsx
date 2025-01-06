export default function Siguppanel(props)
{
    return(
        <div className="overlay">
        <div className="signuppanel">
            <p className='signuppanel-label'>
                <button 
                className="material-symbols-outlined signuppanel-labelicon">close
                </button>

                Log in or Sign up</p>
            <p className="signuppanel-header">Welcome to Rentor</p>

            <form action="" autofill="0" className="signuppanel-form">
                <label className='formlabel-countrycode'>
                    <span>Country code</span>
                    <input type="tel" value="Kenya (+254)" name="country-code"/>
                </label>

                <label className='formlabel-phone'>
                    <input type="tel"  name="phone" placeholder='Phone number'/>
                </label>

                <p className="signuppanel-message">We’ll call or text you to confirm your number. Standard message and data rates apply. <a>Privacy Policy </a></p>

                <button type='submit' className="signuppanel-continue">Continue</button>

                <p className="signuppanel-or"><span>or</span></p>

                <label className='continue-with cw-google' htmlFor="">
                    <span className="fa-brands fa-google"></span>
                    <span>continue with google</span>
                </label>

                <label className="continue-with cw-facebook" htmlFor="">
                    <span className="fa-brands fa-facebook"></span>
                    <span>continue with facebook</span>
                    </label>
            </form>

        </div>
    </div>
    )
}