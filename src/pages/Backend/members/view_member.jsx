
import React, { useState, useEffect } from "react";
import Tables from '../../../components/table';
import Header from '../../../components/head-nav';
import Sidebar from '../../../components/sidebar';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";


const viewmember = () => {
    const [member, setMember] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/Bachelor-Point/api/fetch_allmember.php`).then(res => {
            setMember(res.data)
            console.log(res.data)
        });
    }, []);
    const memberdelete = (ev, mem_id) => {
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
                axios.get(`http://localhost/Bachelor-Point/api/member_delete.php?id=${mem_id}`).then(res => {
                    Swal.fire({
                        title: 'Delete Successful!',
                        icon: 'success',
                        image: '{src/assets/img/0005.jpg}',
                    })
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
            <div className="container-fluid p-4 g-o m-0 d-flex">
                <div className="col-md-3 pt-4">
                    <Sidebar />
                </div>
                <div className="col-md-9 px-1 pt-4">
                    <table className="table table-striped pl-5">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>NID</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {member.map((m) => (
                                <tr>
                                    <td>{m.mem_id}</td>
                                    <td>{m.membername}</td>
                                    <td>{m.memberaddress}</td>
                                    <td>{m.membercontact}</td>
                                    <td>{m.memberemail}</td>
                                    <td>{m.memberusername}</td>
                                    <td>{m.membernid}</td>
                                    <td><Link to={`/editMember/${m.mem_id}/edit`} className="btn btn-success mx-3"><FontAwesomeIcon icon={faPen} /></Link>

                                    <button className='btn btn-danger' onClick={(ev) => memberdelete(ev, m.mem_id)}>
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
export default viewmember;