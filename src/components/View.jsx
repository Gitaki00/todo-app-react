import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [todoData,changeTodoData]=useState(
        [ ]
    )
    const fetchData = ()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos").then(
        (response)=>{
          changeTodoData(response.data)
        }
      ).catch()
    }
    useEffect(()=>{fetchData()},{})
  return (
    <div style={{
    backgroundImage: "url('https://i.pinimg.com/736x/1a/a7/aa/1aa7aa6197da469e6e49322103d53863.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "8550px", // adjust as needed
    width: "100%",
  }}>
        <Navbar /><br></br>
       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <div class="card text-center bg-warning">
  <div class="card-body">
    <h5 class="card-title">View all Details Here.....!</h5>
    <p class="card-text">All the details are given in a tabular form.</p></div>
</div><br></br>
            <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">UserId</th>
      <th scope="col">Title</th>
      <th scope="col">Complted Status</th>
    </tr>
  </thead>
  <tbody>
    {todoData.map(
        (value,index)=>{
                return (
                         <tr>
      <th scope="row">{value.id}</th>
      <td>{value.userId}</td>
      <td>{value.title}</td>
      <td>{value.completed ? "True" : "False"}</td>
    </tr>
                )
        }

    )}
   
   
  </tbody>
</table>
            </div>
        </div>
       </div>
    </div>
  )
}

export default View