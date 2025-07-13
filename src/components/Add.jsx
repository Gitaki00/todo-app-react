import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div style={{
    backgroundImage: "url('https://i.pinimg.com/1200x/57/42/d2/5742d269970a46dadbc103b6805b2007.jpg')",
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
                    <div class="card text-center bg-warning">
  <div class="card-body">
    <h5 class="card-title">Add all Details Here.....!</h5>
    <p class="card-text">Make sure to add All the details.</p></div>
</div><br></br>
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <input type="text" className="form-control" placeholder='Enter ID'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <input type="text" className="form-control" placeholder='Enter User ID'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <input type="text" className="form-control" placeholder='Enter title'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <select name="" id="" className="form-control">

                            <option value="" disabled selected>select Task Status </option>
                            <option value="">True</option>
                        <option value="">False</option></select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <button className="btn btn-success">Add</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add