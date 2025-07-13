import React from 'react'
import Navbar from './Navbar'

const Delete = () => {
  return (
    <div style={{
    backgroundImage: "url('https://i.pinimg.com/736x/66/77/76/66777632af47dbea72e44857e2564a79.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "550px", // adjust as needed
    width: "100%",
  }}>
        <Navbar /><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div class="card text-center bg-danger">
  <div class="card-body">
    <h5 class="card-title">Delete Details Here.....!</h5>
    <p class="card-text">Make sure all the details are given.</p></div>
</div><br></br>

                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <input type="text" className="form-control" placeholder='Enter the title to delete'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Delete