
import React, { useState, useEffect } from 'react';
import Header from '../../../components/head-nav';
import Sidebar from '../../../components/sidebar';
import Forminp from '../../../components/forminp';
import Bntsubmit from '../../../components/btnsubmit';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const EditDep = () => {
  let { id } = useParams();
  const [deposite, setDeposite] = useState({})
  const input = (ev) => {
    ev.persist();
    setDeposite({ ...deposite, [ev.target.name]: ev.target.value });
  };

  const update = (ev) => {
    ev.preventDefault()
    const data = {
        date: deposite.date,
        bazar: deposite.bazar,
        others: deposite.others,
    }
    console.log(data);
    axios.put(`http://localhost/Bachelor-Point/api/deposite_edit.php?id=${id}`, data).then(res => {
      console.log(res);
            alert("Successful");
        });
  }

  useEffect(() => {
    axios.get(`http://localhost/Bachelor-Point/api/deposite_get_single.php?id=${id}`).then(res => {
        console.log(res);
        setDeposite(res.data)
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
                    type="text"
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
              <Bntsubmit text="Update Deposite" className="btn-success" type="submit" />
            </form>
          </div>
        </div >
      </div >
    </>
  );
};

export default EditDep;