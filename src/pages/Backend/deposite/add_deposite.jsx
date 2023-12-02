import React, {useState, useEffect} from "react";
import Head from '../../../components/head-nav.jsx';
import Sidebar from '../../../components/sidebar.jsx';
import Forminp from '../../../components/forminp.jsx';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Swal from 'sweetalert2';
import BtnSubmit from "../../../components/btnsubmit.jsx";
import Dropdown from 'react-bootstrap/Dropdown';
import { FormSelect } from "react-bootstrap";

const AddDep = () => {
    const [deposite, setDeposite] = useState({
        date: '',
        bazar: '',
        others: '',
    })
    
    const input = (e) => {
        e.persist();
        setDeposite({ ...deposite, [e.target.name]: e.target.value });
    };
    const save = (e) => {
        e.preventDefault()
        const data = {
            date: deposite.date,
            bazar: deposite.bazar,
            others: deposite.others,
        }
        axios.post(`http://localhost/Bachelor-Point/api/deposite_create.php`, data).then(res => {
            Swal.fire({
                title: 'Deposite add done!',
                icon: 'success',
            })
        });
    }

    return (
        <>
            <Head />
            <div className="container-fluid p-4 g-0 m-0 d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="container mt-3 justify-content-center d-flex">
                        <form className="row g-3" onSubmit={save}>
                            <Forminp
                                title="Date"
                                type="date"
                                name="date"
                                className="col-md-4"
                                onChange={input}
                                value={deposite.date}
                            />
                            <Forminp
                                title="Bazar"
                                type="text"
                                name="bazar"
                                className="col-md-4"
                                onChange={input}
                                value={deposite.bazar}
                            />
                            <Forminp
                                title="Others"
                                type="text"
                                name="others"
                                className="col-md-4"
                                onChange={input}
                                value={deposite.others}
                            />
                           <div>
                            <label htmlFor="exampleForm" className="form-label">Select User</label>
                            <FormSelect aria-label="Default select example">
                                    <option value="">Select Member</option>
                                    <option value="">SMJ</option>
                                    <option value="">Noman</option>
                                    <option value="">Shadin</option>
                                    <option value="">Rana</option>
                                    <option value="">Ratul</option>
                            </FormSelect>
                           </div>
                            <BtnSubmit text="Add Deposite" className="btn-success" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AddDep;