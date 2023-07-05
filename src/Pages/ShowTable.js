import React, { useState, useEffect, useRef } from "react";
import Dashboard from "./Dashboard";


const ShowTable = () => {

    const [user, setUser] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [pass, setPass] = useState("")
    const [id,setId] = useState(null)
    const box1 = useRef()
    const box2 = useRef()

    function showData() {

        const url = "https://645874074eb3f674df74bda3.mockapi.io/user";

        const promise = fetch(url)

        promise.then((res) =>
            res.json()).then((data) =>
                setUser(data)).catch((err) =>
                    console.log(err))
    }

    useEffect(() => { showData(); 
        box1.current.style.display="block"
        box2.current.style.display="none"
    }, [])


    function DeleteData(id) {

        const confirmBox = window.confirm("Are You sure we want to delete Data")

        if (confirmBox == true) {
            const url = "https://645874074eb3f674df74bda3.mockapi.io/user/" + id

            const promise = fetch(url, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "DELETE"
            })

            promise.then((res) => {
                if (res.ok) {
                    alert("Your Data is Deleting Successfully !");
                    window.location.reload(true);
                }
            })
        }
    }

    function EditData(id){
        
        const ApiData = user[id-1]
        // alert(id)
        console.log(ApiData)

        setName(ApiData.name)
        setEmail(ApiData.email)
        setPass(ApiData.pass)
        setId(ApiData.id)

        box1.current.style.display="none"
        box2.current.style.display="block"

    }


    function UpdateData(){

        const object={
            name:name,
            email:email,
            date:date,
            pass:pass
        }

        const url = "https://645874074eb3f674df74bda3.mockapi.io/user/"+id

        const promise = fetch(url,{
            headers:{
                "Content-Type":"application/json"
            },
            method:"PUT",
            body:JSON.stringify(object)
        })

        promise.then((res)=>
        res.json()).then((data)=>
        console.log(data),
        alert("Data Updated !"),
        // window.location.href="http://localhost:3000/show"
        setInterval(function () { window.location.href = "http://localhost:3000/show" }, 1000)

        ).catch((err)=>
        console.log(err))
    }

    return (
        <>
        <Dashboard/>
            <div className="container-fluid" ref={box1}>
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table text-center">
                            <thead >
                                <tr className="bg-text-dark">
                                    <th>Sr. No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Password</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((data, index) =>
                                        <tr>

                                            <td>{index + 1}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.date}</td>
                                            <td>{data.pass}</td>
                                            <td><button className="btn btn-danger" onClick={() => DeleteData(data.id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => {EditData(data.id)}}>Edit</button></td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="container-fluid" ref={box2}>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 border border-3 p-3 rounded-3">

                    <div className="h2 text-center">Update Data</div>

                        <div className="form-bottom p-1 mt-4">
                            Name <input type="text" placeholder="Your full name..." className="form-control rounded-3 mb-4 mt-1 " style={{ background: "transparent" }} onChange={(event) => setName(event.target.value)} value={name} />
                            Email <input type="email" placeholder="Your email..." className="form-control rounded-3 mb-4 mt-1 " style={{ background: "transparent" }} onChange={(event) => setEmail(event.target.value)} value={email} />
                            {/* Date <input type="text" placeholder="Your email..." className="form-control rounded-3 mb-4 mt-1 " style={{ background: "transparent" }} onChange={(event) => setDate(event.target.value)} value={date} /> */}
                            Password <input type="password" placeholder="Your password..." className="form-control rounded-3 mb-4 mt-1 " style={{ background: "transparent" }} onChange={(event) => setPass(event.target.value)} value={pass} />

                            <input type="button" value="Update Data" className=" btn btn-primary rounded-3 text-white fw-bold mb-5 mt-1" onClick={UpdateData} />

                            
                        </div>

                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        </>
    );
}

export default ShowTable;