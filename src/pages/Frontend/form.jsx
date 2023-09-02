import React from 'react'
import { useNavigate } from 'react-router-dom'

const login = () => {
    const dom = useNavigate()

    function click(e) {
        e.preventDefault();
        dom("/home")
    }


    return (
            <div className="container mt-5 justify-content-center d-flex">
                <form class="row g-3">
                    <div class="col-auto">
                        <label for="staticEmail2" class="visually-hidden">Email</label>
                        <input type="text" class="form-control" id="inputPassword2" placeholder="Username" />
                    </div>
                    <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">Password</label>
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3" onClick={click}>Login</button>
                    </div>
                </form>
            </div>
    )
}

export default login