import React, { useState } from "react";

import "../Pages/Css/Header.css";

import { BsFacebook, BsApple, BsGoogle } from "react-icons/bs"

import { NavLink } from "react-router-dom"

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [pass, setPass] = useState("")



    function SendData() {

        const date = (new Date()).toLocaleDateString()

        const object = {
            name: name,
            email: email,
            date: date,
            pass: pass
        }

        const url = "https://645874074eb3f674df74bda3.mockapi.io/user"

        const promise = fetch(url, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(object)
        })

        promise.then((res) =>
            res.json()).then((data) =>
                console.log(data),
                alert("Thanks for Registering please login !"),
                setInterval(function () { window.location.href = "http://localhost:3000/login" }, 2000)
            ).catch((err) =>
                console.log(err))
    }




    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 bg-img">
                        <div className="img-heading">
                            <h4>INSPIRED THE FUTURE :</h4>
                            <h1>THE VISION UI DASHBOARD</h1>
                        </div>
                    </div>
                    <div className="col-sm-6 " style={{ background: "#171a2d" }}>
                        <div className="from-box w-50 text-white  " style={{ margin: "3% 10%" }}>
                            <div className="form-heading-box py-3 px-1 text-center">
                                <div className="h3">Welcome !</div>
                                <p className="">Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                            <div className="form-contant-box border border-2 rounded-3 p-3">
                                <div className="form-top text-center">
                                    <div className="h4">Register With</div>
                                    <div className="">
                                        <a href="" className="text-white ">
                                            <BsFacebook className=" border rounded-3 mx-4 my-2 px-2" style={{ fontSize: "50px" }} />
                                        </a>
                                        <a href="" className="text-white ">
                                            <BsApple className=" border rounded-3 mx-4 my-2 px-2" style={{ fontSize: "50px" }} />
                                        </a>
                                        <a href="" className="text-white ">
                                            <BsGoogle className=" border rounded-3 mx-4 my-2 px-2" style={{ fontSize: "50px" }} />
                                        </a>


                                    </div>

                                </div>


                                <div className="form-bottom p-1 mt-4">
                                    Name <input type="text" placeholder="Your full name..." className="form-control rounded-3 mb-4 mt-1 " style={{ background: "transparent", color: "white" }} onChange={(event) => setName(event.target.value)} />
                                    Email <input type="email" placeholder="Your email..." className="form-control rounded-3 mb-4 mt-1 " style={{ background: "transparent", color: "white" }} onChange={(event) => setEmail(event.target.value)} />
                                    Password <input type="password" placeholder="Your password..." className="form-control rounded-3 mb-4 mt-1 " style={{ background: "transparent", color: "white" }} onChange={(event) => setPass(event.target.value)} />
                                    <input type="button" value="SIGN UP" className="form-control btn btn-primary rounded-3 text-white fw-bold mb-5 mt-1" onClick={SendData} />

                                    <p className="text-center">Already have an account?
                                        <b><NavLink to="/login" style={{ textDecoration: "none", color: "white" }}> Sign In</NavLink></b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;