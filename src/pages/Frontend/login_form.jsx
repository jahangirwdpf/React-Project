import React from 'react'
import { useNavigate } from 'react-router-dom'

const login = () => {
    const dom = useNavigate()
    function click(ev) {
        ev.preventDefault();
        dom("/home")
    }
    return (
            <div className="mt-5 justify-content-center d-flex">
                <form className="row g-3">
                    <div className="col-auto">
                        <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                        <input type="text" className="form-control" id="inputPassword2" placeholder="Username" />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3" onClick={click}>Login</button>
                    </div>
                </form>
            </div>
    )
}

export default login