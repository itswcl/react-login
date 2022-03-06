import React, { useState } from 'react'


// get the log in en error we pass from Main
const Login = ({ login, error }) => {
    // receive from user enter user detail
    const [detail, setDetail] = useState({
        email: "",
        password: ""
    })

    // user submit we pass to login function from main
    const handleSubmit = (e) => {
        // prevent refresh
        e.preventDefault();
        login(detail);
        setDetail({
            email:"",
            password:""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className='text-center'>Log In</h1>
            { error !== "" ? (
                <p className='text-center text-danger'>{error}</p>
            ) : ""}
            <div className='mb-3 row'>
                <label htmlFor="" className='col-sm-2 col-form-label'>Email</label>
                <div className='col-sm-10'>
                    {/* user input onChange with ... and e.target.value */}
                    <input type="email" name="email" id="email" className='form-control' onChange={e => setDetail({ ...detail, email: e.target.value })} value={detail.email} />
                </div>
            </div>
            <div className='mb-3 row'>
                <label htmlFor="password" className='col-sm-2 col-form-label'>Password</label>
                <div className='col-sm-10'>
                    {/* detail input onChange with ... and e.target.value */}
                    <input type="password" name="password" id="password" className='form-control' onChange={e => setDetail({ ...detail, password: e.target.value })} value={detail.password} />
                </div>
            </div>
            <div className='row'>
                <input type="submit" value="Login" className='btn btn-outline-dark btn-lg px-5' />
            </div>
        </form>
    )
}

export default Login