import React from 'react'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className='text-center'>Log In</h1>
            <div className='mb-3 row'>
                <label htmlFor="" className='col-sm-2 col-form-label'>Email</label>
                <div className='col-sm-10'>
                    <input type="email" name="email" id="email" className='form-control' />
                </div>
            </div>
            <div className='mb-3 row'>
                <label htmlFor="password" className='col-sm-2 col-form-label'>Password</label>
                <div className='col-sm-10'>
                    <input type="password" name="password" id="password" className='form-control' />
                </div>
            </div>
            <div className='row'>
                <input type="submit" value="Login" className='btn btn-outline-dark btn-lg px-5' />
            </div>
        </form>
    )
}

export default Login