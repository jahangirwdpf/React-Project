
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";

const Table = (props) => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="table-responsive col-md-12">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">{props.t1}</th>
                            <th scope="col">{props.t2}</th>
                            <th scope="col">{props.t3}</th>
                            <th scope="col">{props.t4}</th>
                            <th scope="col">{props.t5}</th>
                            <th scope="col">{props.t6}</th>
                            <th scope="col">{props.t7}</th>
                            <th scope="col">{props.t8}</th>
                            <th scope="col">{props.t9}</th>
                            <th scope="col">{props.t10}</th>
                            <th scope="col">{props.t11}</th>
                            <th scope="col">{props.t12}</th>
                            <th scope="col">{props.t13}</th>
                            <th scope="col">{props.t14}</th>
                            <th scope="col" colSpan="2">{props.t15}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.name.lenth > 0 && (
                            props.name.map((item, index) => (
                                <tr key={index}>
                                    <td>{item[props.d1]}</td>
                                    <td>{item[props.d2]}</td>
                                    <td>{item[props.d3]}</td>
                                    <td>{item[props.d4]}</td>
                                    <td>{item[props.d5]}</td>
                                    <td>{item[props.d6]}</td>
                                    <td>{item[props.d7]}</td>
                                    <td>{item[props.d8]}</td>
                                    <td>{item[props.d9]}</td>
                                    <td>{item[props.d10]}</td>
                                    <td>{item[props.d11]}</td>
                                    <td>{item[props.d12]}</td>
                                    <td>{item[props.d13]}</td>
                                    <td>{item[props.d14]}</td>
                                    <td>{item[props.d15]}</td>

                                    {/* { props.con == 1 ? 
                                    <td>
                                        <img src={`${props.path}/${item[props.imgName]}`} alt={item[props.imgName]} className="img-fluid" style={{width: "60"}} />
                                    </td>
                                    :""
                                    } */}
                                    <td>
                                        <Link to={`/${props.link}/${item[props.id]}`} className="btn btn-success mx-3"><FontAwesomeIcon icon={faPen} /></Link>

                                        <button className='btn btn-danger' onClick={(e) => props.dlt(e, item[props.id])}>
                                            <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff" }} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;