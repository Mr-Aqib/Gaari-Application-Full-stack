import React from 'react'

const Loginsection = () => {
  return (
      <>
          <h4 className='text-white fw-light text-center mt-5'> Best Car collections Website</h4>
          
          <form className=' rounded-4 bg-white p-4 w-75'>
               <h4 className='fw-light text-center text-dark'> Login to Your Account</h4>
              <div className="form-group">
                  <label htmlFor="">Username</label>
                  <input className='form-control' type="text" placeholder='Please Enter Your Username' name="" id="" />
              </div>
              <div className="form-group mt-2">
                  <label htmlFor="">Password</label>
                  <input className='form-control' type="text" placeholder='Enter Password' name="" id="" />
              </div>
              <div className="d-flex mt-2 align-items-center justify-content-between">
                  <div className='d-flex flex-row gap-1'>
                  <input type="checkbox" className='form-check' />
                  <label className='fw-medium' htmlFor="">Remeber Me</label>
                  </div>
                  
                 <a href="" className='text-decoration-none text-secondary'>Forgot password?</a>
              </div>
              <button className="mt-3 m-auto d-flex justify-content-center btn btn-dark rounded-4 text-center w-75">
                  Login
              </button>
          </form>
      </>
  )
}

export default Loginsection