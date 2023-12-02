import React from 'react'


const card = (props) => {
    return (
        <div className={`col-sm-12 ${props.className}`}>
            <a href="" className="nav-link ">
                <div className="card mb-3 card-border h-100">
                    <img src={props.img} alt="" className="img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">{props.title}</h5>
                        <p>{props.sub}</p>
                        <a href="#" className="btn">
                            <h3 style={{ color: "green" }}>{props.price}</h3>
                            <p>{props.bis}</p>
                        </a>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default card