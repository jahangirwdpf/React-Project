import React, {useState, useEffect} from "react";
import Head from '../../../components/head-nav.jsx';
import Sidebar from '../../../components/sidebar.jsx';
import Forminp from '../../../components/forminp.jsx';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Swal from 'sweetalert2';
import BtnSubmit from "../../../components/btnsubmit.jsx";
import { FormSelect } from "react-bootstrap";

const AddMeal = () => {
    const [meal, setMeal] = useState({
        date: '',
        meal: '',
    })
    
    const input = (e) => {
        e.persist();
        setMeal({ ...meal, [e.target.name]: e.target.value });
    };
    const save = (e) => {
        e.preventDefault()
        const data = {
            date: meal.date,
            meal: meal.meal,
        }
        axios.post(`http://localhost/Bachelor-Point/api/meal-crud/meal_create.php`, data).then(res => {
            Swal.fire(
                'Meal add done',
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
                    <div className="container mt-3 justify-content-center d-flex">
                        <form className="row g-3" onSubmit={save}>
                            <Forminp
                                title="Date"
                                type="date"
                                name="date"
                                className="col-md-4"
                                onChange={input}
                                value={meal.date}
                            />
                            <Forminp
                                title="Meal"
                                type="text"
                                name="meal"
                                className="col-md-4"
                                onChange={input}
                                value={meal.meal}
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
                            <BtnSubmit text="Add Meal" className="btn-success" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AddMeal;