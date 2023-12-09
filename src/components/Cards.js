import React from 'react'
import { NavLink } from 'react-router-dom'
import './Cards.css'
import hondaAccord from "../images/hondaAccord.jpg"
import toyotaCamry from "../images/toyotaCamry.png"
import toyotaCorollaX from "../images/toyotaCorollaX.jpg"
import toyotaElentra from "../images/toyotaElentra.png"
import toyotaPrius from "../images/toyotaPrius.png"
import nissanAlmera from "../images/nissanAlmera.jpg"

function Cards() {
    return (
        <>
            <div className='cardtext'>
                <h1>Pick Your Car...</h1>
                <hr></hr>
            </div>
            <div className='cards'>

                <div className="card" style={{ width: "20rem" }}>

                    <NavLink to="#">
                        <img src={hondaAccord} className="card-img-top" alt="hondaAccord" />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title">Honda Accord</h5>
                        <h6 className="card-text">Karachi</h6>
                        <p className="card-text">2023   |   Petrol   |   1800cc   |   Automatic </p>
                        <h6>PKR 22,990,000</h6>
                        <NavLink class="btn btn-primary" to="#" >Go somewhere</NavLink>
                    </div>
                </div>



                <div className="card" style={{ width: "20rem" }}>
                    <NavLink to="#">
                        <img src={toyotaCamry} className="card-img-top" alt="toyotaCamry" />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title">Toyota Camry</h5>
                        <h6 className="card-text">Lahore</h6>
                        <p className="card-text">2023   |   Petrol   |   1800cc   |   Automatic </p>
                        <h6>PKR 53,859,000</h6>
                        <NavLink class="btn btn-primary" to="#" >Go somewhere</NavLink>
                    </div>
                </div>



                <div className="card" style={{ width: "20rem" }}>
                    <NavLink to="#">
                        <img src={toyotaCorollaX} className="card-img-top" alt="toyotaCorollaX" />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title">Toyota Corolla X</h5>
                        <h6 className="card-text">Karachi</h6>
                        <p className="card-text">2021   |   Petrol   |   1600cc   |   Automatic </p>
                        <h6>PKR 7,800,000</h6>
                        <NavLink class="btn btn-primary" to="#" >Go somewhere</NavLink>
                    </div>
                </div>



                <div className="card" style={{ width: "20rem" }}>
                    <NavLink to="#">
                        <img src={toyotaElentra} className="card-img-top" alt="toyotaElentra" />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title">Toyota Elantra</h5>
                        <h6 className="card-text">Multan</h6>
                        <p className="card-text">2022   |   Petrol   |   1800cc   |   Automatic </p>
                        <h6>PKR 5,099,000</h6>
                        <NavLink class="btn btn-primary" to="#" >Go somewhere</NavLink>
                    </div>
                </div>



                <div className="card" style={{ width: "20rem" }}>
                    <NavLink to="#">
                        <img src={toyotaPrius} className="card-img-top" alt="toyotaPrius" />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title">Toyota Prius</h5>
                        <h6 className="card-text">Sialkot</h6>
                        <p className="card-text">2020   |   Petrol   |   1300cc   |   Automatic </p>
                        <h6>PKR 15,000,000</h6>
                        <NavLink class="btn btn-primary" to="#" >Go somewhere</NavLink>
                    </div>
                </div>



                <div className="card" style={{ width: "20rem" }}>
                    <NavLink to="#">
                        <img src={nissanAlmera} className="card-img-top" alt="nissanAlmera" />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title">Nissan Almera</h5>
                        <h6 className="card-text">Islamabad</h6>
                        <p className="card-text">2019   |   Petrol   |   1800cc   |   Automatic </p>
                        <h6>PKR 8,008,800</h6>
                        <NavLink class="btn btn-primary" to="#" >Go somewhere</NavLink>
                    </div>
                </div>

                

            </div >


            <div className='learn'>
            <NavLink>LEARN MORE {'>'}</NavLink>
            <hr></hr>
            </div>
        </>
    )
}

export default Cards




// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import './Cards.css'
// import car from "../images/car.jpg"

// const Cards = () => {
//     return (
//         <div>
//             <div className="card" style="width: 18rem;">
//                 <img src={car} className="card-img-top" alt="car" />
//                 <div className="card-body">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cards
