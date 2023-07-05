import React, { useState, useEffect } from "react";

import "../Pages/Css/Header.css";

import { NavLink, useNavigate } from "react-router-dom"

import {RxDragHandleDots1} from "react-icons/rx"
import {GoKey} from "react-icons/go"
import {FaUserCircle,FaUserAlt} from "react-icons/fa"

const Header = () => {

    const [user, setUser] = useState([])
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const navigation = useNavigate()



    function showData() {

        const url = "https://645874074eb3f674df74bda3.mockapi.io/user";

        const promise = fetch(url)

        promise.then((res) =>
            res.json()).then((data) =>
                setUser(data)).catch((err) =>
                    console.log(err))
    }


    useEffect(() => {
        showData();

    }, [])


    function UserLogin() {

        const obj = {
            email: email,
            pass: pass,
        }

        // console.log(obj.email).


        const findData = user.find((data) =>
            data.email == obj.email
        )

        //console.log(findData)

        if (findData == undefined) {
            // console.log("Error")

            alert("Invalid User !")
        } else {

            if (findData.email == obj.email && findData.pass == obj.pass) {
                console.log("login Successfully !")
                window.localStorage.setItem("email", obj.email)
                window.localStorage.setItem("name", findData.name)
                navigation("/show")


            } else {
                console.log("User Not Found !")
            }
        }

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 bg-img">

                        <div className="menu rounded-4">
                            <nav class="navbar navbar-expand-lg ">
                                <div class="container-fluid">
                                    
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link active text-white" aria-current="page" href="/show"><RxDragHandleDots1 className="fs-5 mb-1"/> Dashboard</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-white" href="/profile"><FaUserAlt className=" mb-1"/> Profile</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-white" href="/signup"><FaUserCircle className="fs-5 mb-1"/> Sign Up</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-white" href="/login"><GoKey className="fs-5 mb-1"/> Sign In</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="btn btn-primary text-white">BUY NOW</button>
                                </div>
                            </nav>
                        </div>


                        <div className="img-heading">
                            <h4>INSPIRED THE FUTURE :</h4>
                            <h1>THE VISION UI DASHBOARD</h1>
                        </div>
                    </div>
                    <div className="col-sm-6 " style={{ background: "#171a2d" }}>
                        <div className="from-box w-50 text-white  border px-3 py-2 rounded-4" style={{ margin: "15%" }}>
                            <div className="top py-3 px-1">
                                <div className="h3">Nice to see you !</div>
                                <p className="">Enter your email and password to sign in</p>
                            </div>
                            <div className="bottom p-1 ">
                                Email <input type="text" placeholder="Your email..." className="form-control rounded-3 mb-4 mt-1 " style={{ background: "transparent", color: "white" }} onChange={(e) => setEmail(e.target.value)} />
                                Password <input type="password" placeholder="Your password..." className="form-control rounded-3 mb-4 mt-1 " style={{ background: "transparent", color: "white" }} onChange={(e) => setPass(e.target.value)} />

                                <input type="button" value="SIGN IN" className="form-control btn btn-primary rounded-3 text-white fw-bold mb-5 " onClick={UserLogin} />

                                <p className="text-center">Don't have an account?
                                    <b><NavLink to="/signup" style={{ textDecoration: "none", color: "white" }}> Sign Up</NavLink></b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;