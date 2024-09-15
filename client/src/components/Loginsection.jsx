import React, { useState } from 'react'
import axios from 'axios'
const Loginsection = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
      <>
          <h4 className='text-white fw-light text-center mt-4'> Best Car collections Website</h4>
          
          <form className=' rounded-4  p-4 w-75 login-form'>
               <h4 className='fw-light text-center text-dark'> Login to Your Account</h4>
              <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input onChange={(e)=>setEmail(e.target.value)} value={email} className='form-control' type="text" placeholder='Please enter Eamil' name="" id="" />
              </div>
              <div className="form-group mt-2">
                  <label htmlFor="">Password</label>
                  <input onChange={(e)=>setPassword(e.target.value)} className='form-control' type="text" placeholder='Enter Password' name="" id="" />
              </div>
              <div className="d-flex mt-2 align-items-center justify-content-between">
                  <div className='d-flex flex-row gap-1'>
                  <input type="checkbox" className='form-check' />
                  <label className='fw-medium' htmlFor="">Remeber Me</label>
                  </div>
                  
                 <a href="" className='text-decoration-none text-secondary'>Forgot password?</a>
              </div>
              <button  className="mt-3 m-auto d-flex justify-content-center btn btn-dark rounded-4 text-center w-75">
                  Login
              </button>
                <p className='text-end m-0 mt-2 text-secondary' >New to the app? <a href="" className='text-decoration-none text-dark'> Signup</a></p>
          </form>
        
      </>
  )
}

export default Loginsection