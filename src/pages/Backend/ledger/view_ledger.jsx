
import React, { useState, useEffect } from "react";
import Tables from '../../../components/table';
import Header from '../../../components/head-nav';
import Sidebar from '../../../components/sidebar';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const viewLadger = () => {
    const [led, viewLadger] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/Bachelor-Point/api/sp/ledger_view.php`).then(res => {
            viewLadger(res.data)
            console.log(res.data)
        });
    }, []);

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
                                <th>Name</th>
                                <th>House Rent</th>
                                <th>Meal</th>
                                <th>Cost</th>
                                <th>Deposite</th>
                                <th>Debit</th>
                                <th>Payable</th>
                            </tr>
                        </thead>
                        <tbody>
                            {led.map((led) => (
                                <tr>
                                    <td>{led.id}</td>
                                    <td>{led.name}</td>
                                    <td>{led.house_rent}</td>
                                    <td>{led.meal}</td>
                                    <td>{led.cost}</td>
                                    <td>{led.deposite}</td>
                                    <td>{led.debit}</td>
                                    <td>{led.payable}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default viewLadger;