
import React, { useState, useEffect } from 'react';
import Header from '../../../components/head-nav';
import Sidebar from '../../../components/sidebar';
import Forminp from '../../../components/forminp';
import Bntsubmit from '../../../components/btnsubmit';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Edithr = () => {
  let { id } = useParams();
  const [hrent, setHrent] = useState({})
  const input = (ev) => {
    ev.persist();
    setHrent({ ...hrent, [ev.target.name]: ev.target.value });
  };

  const update = (ev) => {
    ev.preventDefault()
    const data = {
            houserent: hrent.houserent,
            gasbill: hrent.gasbill,
            currentbil: hrent.currentbil,
            sweeperbill: hrent.sweeperbill,
            buabill: hrent.buabill,
            wifibill: hrent.wifibill,
    }
    console.log(data);
    axios.put(`http://localhost/Bachelor-Point/api/update_hr.php?id=${id}`, data).then(res => {
      console.log(res);
            alert("Successful");
        });
  }

  useEffect(() => {
    axios.get(`http://localhost/Bachelor-Point/api/fetch_single_hrent.php?id=${id}`).then(res => {
        console.log(res);
        setHrent(res.data)
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
              <Bntsubmit text="Update Hrent" className="btn-success" type="submit" />
            </form>
          </div>
        </div >
      </div >
    </>
  );
};

export default Edithr;