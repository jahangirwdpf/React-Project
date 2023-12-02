
import React, { useState, useEffect } from 'react';
import Header from '../../../components/head-nav';
import Sidebar from '../../../components/sidebar';
import Forminp from '../../../components/forminp';
import Bntsubmit from '../../../components/btnsubmit';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const EditMeal = () => {
  let { id } = useParams();
  const [meal, setMeal] = useState({})
  const input = (ev) => {
    ev.persist();
    setMeal({ ...meal, [ev.target.name]: ev.target.value });
  };

  const update = (ev) => {
    ev.preventDefault()
    const data = {
        date: meal.date,
        meal: meal.meal,
    }
    console.log(data);
    axios.put(`http://localhost/Bachelor-Point/api/meal-crud/meal-edit.php?id=${id}`, data).then(res => {
      console.log(res);
            alert("Successful");
        });
  }

  useEffect(() => {
    axios.get(`http://localhost/Bachelor-Point/api/meal-crud/meal_edit_single.php?id=${id}`).then(res => {
        console.log(res);
        setMeal(res.data)
    });
  }, [id])

  return (
    <>
      <Header />
      <div className="container-fluid p-0 g-o m-0 d-flex">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="container mt-3 justify-content-center d-flex">
            <form className="row g-3" onSubmit={update} >
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
              <Bntsubmit text="Update Meal" className="btn-success" type="submit" />
            </form>
          </div>
        </div >
      </div >
    </>
  );
};

export default EditMeal;