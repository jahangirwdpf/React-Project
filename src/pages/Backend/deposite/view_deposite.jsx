
import React, { useState, useEffect } from "react";
import Tables from '../../../components/table';
import Header from '../../../components/head-nav';
import Sidebar from '../../../components/sidebar';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const viewDep = () => {
    const [deposite, setDeposite] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/Bachelor-Point/api/deposite_get_all.php`).then(res => {
            setDeposite(res.data)
            console.log(res.data)
        });
    }, []);
    const depdelete = (ev, dep_id) => {
        const click = ev.currentTarget;
        ev.preventDefault();
        Swal.fire({
            title: 'Are You Sure?',
            text: 'You wonnt to be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it.',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(`http://localhost/Bachelor-Point/api/deposite_delete.php?id=${dep_id}`).then(res => {
                    Swal.fire(
                        'Successful',
                        '',
                        'Success!'
                    )
                    click.closest("tr").remove();
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'Success!'
                )
            }
        })
    }
    return (
        <>
            <Header />
            <div className="container-fluid p-0 g-o m-0 d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Date</th>
                                <th>Bazar</th>
                                <th>Others</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deposite.map((dep) => (
                                <tr>
                                    <td>{dep.dep_id}</td>
                                    <td>{dep.date}</td>
                                    <td>{dep.bazar}</td>
                                    <td>{dep.others}</td>
                                    <td><Link to={`/editDep/${dep.dep_id}/edit`} className="btn btn-success mx-3"><FontAwesomeIcon icon={faPen} /></Link>

                                    <button className='btn btn-danger' onClick={(ev) => depdelete(ev, dep.dep_id)}>
                                        <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff" }} />
                                    </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default viewDep;