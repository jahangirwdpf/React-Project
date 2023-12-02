
import React, { useState, useEffect } from "react";
import Tables from '../../../components/table';
import Header from '../../../components/head-nav';
import Sidebar from '../../../components/sidebar';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const viewMeal = () => {
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/Bachelor-Point/api/meal-crud/meal_view_all.php`).then(res => {
            setMeal(res.data)
            console.log(res.data)
        });
    }, []);

    // Start Delete .....................................................................................
    const mealdelete = (ev, meal_id) => {
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
                axios.get(`http://localhost/Bachelor-Point/api/meal-crud/meal_delete.php?id=${meal_id}`).then(res => {
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
    // End Delete .....................................................................................
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
                                <th>Meal</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {meal.map((meal) => (
                                <tr>
                                    <td>{meal.meal_id}</td>
                                    <td>{meal.date}</td>
                                    <td>{meal.meal}</td>
                                    <td><Link to={`/editMeal/${meal.meal_id}/edit`} className="btn btn-success mx-3"><FontAwesomeIcon icon={faPen} /></Link>

                                    <button className='btn btn-danger' onClick={(ev) => mealdelete(ev, meal.meal_id)}>
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
export default viewMeal;