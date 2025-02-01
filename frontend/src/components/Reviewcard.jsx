import Ratingstars from "./Ratingstars"

export default function Reviewcard()
{
    return(
        <div className="reviewcard">
            <div className="reviewcard-dp"></div>
            <p className="reviewcard-name">Jane Smith</p>
            <p className="reviewcard-membershipperiod">3 years on rentor</p>

            <div className="ratingstars-container">
                <Ratingstars/>.
                <p className="reviewcard-reviewdate">January 2023</p>.
                <p className="reviewcard-residenceperiod">Lived for 4years</p>
            </div>
                <p className="reviewcard-reviewtext">The flat matches the pictures and has lovely sunlight in the morning (faces east). Jane was very helpful and accommodating, kindly bringing a desk so I could have a work station. The electric shower and inverter powering key items were great touches as well. Thank you!</p>

        </div>
    )
}