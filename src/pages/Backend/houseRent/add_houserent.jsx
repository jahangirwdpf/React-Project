import React, {useState, useEffect} from "react";
import Head from '../../../components/head-nav.jsx';
import Sidebar from '../../../components/sidebar.jsx';
import Forminp from '../../../components/forminp.jsx';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Swal from 'sweetalert2';
import BtnSubmit from "../../../components/btnsubmit.jsx";

const AddHR = () => {
    const [hrent, setHrent] = useState({
        houserent: '',
        gasbill: '',
        currentbil: '',
        sweeperbill: '',
        buabill: '',
        wifibill: '',
    })
    
    const input = (e) => {
        e.persist();
        setHrent({ ...hrent, [e.target.name]: e.target.value });
    };
    const save = (e) => {
        e.preventDefault()
        const data = {
            houserent: hrent.houserent,
            gasbill: hrent.gasbill,
            currentbil: hrent.currentbil,
            sweeperbill: hrent.sweeperbill,
            buabill: hrent.buabill,
            wifibill: hrent.wifibill,
        }
        axios.post(`http://localhost/Bachelor-Point/api/api-insert-hr.php`, data).then(res => {
            Swal.fire(
                'HR add done',
                '',
                'Successful'
             )
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
                    <div className="container mt-3 justify-content-center d-flex px-5">
                        <form className="row g-3" onSubmit={save}>
                            <Forminp
                                title="House Rent"
                                type="text"
                                name="houserent"
                                className="col-md-4"
                                onChange={input}
                                value={hrent.houserent}
                            />
                            <Forminp
                                title="Gas Bill"
                                type="text"
                                name="gasbill"
                                className="col-md-4"
                                onChange={input}
                                value={hrent.gasbill}
                            />
                            <Forminp
                                title="Current Bill"
                                type="text"
                                name="currentbil"
                                className="col-md-4"
                                onChange={input}
                                value={hrent.currentbil}
                            />
                            <Forminp
                                title="Sweeper Bill"
                                type="text"
                                name="sweeperbill"
                                className="col-md-4"
                                onChange={input}
                                value={hrent.sweeperbill}
                            />
                            <Forminp
                                title="Bua Bill"
                                type="text"
                                name="buabill"
                                className="col-md-4"
                                onChange={input}
                                value={hrent.buabill}
                            />
                            <Forminp
                                title="Wifi Bill"
                                type="text"
                                name="wifibill"
                                className="col-md-4"
                                onChange={input}
                                value={hrent.wifibill}
                            />
                            <BtnSubmit text="Add House Rent" className="btn-success" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AddHR;