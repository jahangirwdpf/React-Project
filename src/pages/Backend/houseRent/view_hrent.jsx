
import React, { useState, useEffect } from "react";
import Tables from '../../../components/table';
import Header from '../../../components/head-nav';
import Sidebar from '../../../components/sidebar';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const viewHR = () => {
    const [hrent, setHrent] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/Bachelor-Point/api/fetch_allhrent.php`).then(res => {
            setHrent(res.data)
            console.log(res.data)
        });
    }, []);
    const hrentdelete = (ev, hr_id) => {
        const click = ev.currentTarget;
        ev.preventDefault();
        Swal.fire({
            title: 'Are You Sure?',
            text: 'You wonnot to be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it.',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(`http://localhost/Bachelor-Point/api/hrent_delete.php?id=${hr_id}`).then(res => {
                    Swal.fire(
                        'Successful',
                        '',
                        'Success!'
                    )
                    click.closest("tr").remove();
                })
                Swal.fire(
                    'Deleted!',
                    'Your file hasbeen deleted.',
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
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>H Rent</th>
                                <th>Gas Bill</th>
                                <th>Current Bll</th>
                                <th>Sweeper Bill</th>
                                <th>Bua Bill</th>
                                <th>Wifi Bill</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hrent.map((hr) => (
                                <tr>
                                    <td>{hr.hr_id}</td>
                                    <td>{hr.houserent}</td>
                                    <td>{hr.gasbill}</td>
                                    <td>{hr.currentbil}</td>
                                    <td>{hr.sweeperbill}</td>
                                    <td>{hr.buabill}</td>
                                    <td>{hr.wifibill}</td>
                                    <td><Link to={`/editHrent/${hr.hr_id}/edit`} className="btn btn-success mx-3"><FontAwesomeIcon icon={faPen} /></Link>

                                    <button className='btn btn-danger' onClick={(ev) => hrentdelete(ev, hr.hr_id)}>
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
export default viewHR;