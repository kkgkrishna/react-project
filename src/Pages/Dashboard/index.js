import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigation = useNavigate()

    function UserLogout(){
        window.localStorage.removeItem("email")
        window.localStorage.removeItem("name")
        navigation("/")
        
    }



    return (
        <>
            <div className="container-fluid " style={{marginTop:"5%",background:"#171a2d20"}}>
                <div className="row">
                    <div className="col-sm-12">
                        <nav className="navbar  fixed-top" style={{background:"#191547"}}>
                            <div className="container-fluid">

                                <button className="navbar-toggler border-white border-3 bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon text-white"></span>
                                </button>
                                <div className="offcanvas offcanvas-start  " style={{width:"15%",background:"#191547"}} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
                                        <button type="button" className="btn-close ms-auto bg-white" style={{color:"white "}} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body ">
                                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                            <li className="nav-item">
                                                <a className="nav-link active text-white" aria-current="page" href="#">Dashboard</a>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link text-white" to="/profile">Profile</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link text-white" to="/show">Table</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-white" href="signup">Sign Up</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link text-white" href="login">Login</a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                                <button className="btn btn-danger " onClick={UserLogout}>Logout</button>
                            </div>
                        </nav>

                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;