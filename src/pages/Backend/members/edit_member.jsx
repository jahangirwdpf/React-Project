
import React, { useState, useEffect } from 'react';
import Header from '../../../components/head-nav';
import Sidebar from '../../../components/sidebar';
import Forminp from '../../../components/forminp';
import Bntsubmit from '../../../components/btnsubmit';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';

const Editmember = () => {
  let { id } = useParams();
  const [member, setMember] = useState({})
  const insert = (ev) => {
    ev.persist();
    setMember({ ...member, [ev.target.name]: ev.target.value });
  };

  const update = (ev) => {
    ev.preventDefault()
    const data = {
        membername: member.membername,
        membercontact: member.membercontact,
        memberemail: member.memberemail,
        memberaddress: member.memberaddress,
        memberusername: member.memberusername,
        membernid: member.membernid,
    }
    console.log(data);
    axios.put(`http://localhost/Bachelor-Point/api/update_member.php?id=${id}`, data).then(res => {
      console.log(res);
            Swal.fire({
              title: "Update Successful!",
              icon: 'success',
            });
        });
  }

  useEffect(() => {
    axios.get(`http://localhost/Bachelor-Point/api/fetch_single_member.php?id=${id}`).then(res => {
        console.log(res);
        setMember(res.data)
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
                    title="Member Name"
                    type="text"
                    name="membername"
                    className="col-md-4"
                    onChange={insert}
                    value={member.membername}
                />
                <Forminp
                    title="Member Contact"
                    type="text"
                    name="membercontact"
                    className="col-md-4"
                    onChange={insert}
                    value={member.membercontact}
                />
                <Forminp
                    title="Member E-mail"
                    type="text"
                    name="memberemail"
                    className="col-md-4"
                    onChange={insert}
                    value={member.memberemail}
                />
                <Forminp
                    title="Member Address"
                    type="text"
                    name="memberaddress"
                    className="col-md-4"
                    onChange={insert}
                    value={member.memberaddress}
                />
                <Forminp
                    title="Member NID"
                    type="text"
                    name="membernid"
                    className="col-md-4"
                    onChange={insert}
                    value={member.membernid}
                />
                <Forminp
                    title="Member Username"
                    type="text"
                    name="memberusername"
                    className="col-md-4"
                    onChange={insert}
                    value={member.memberusername}
                />
              <Bntsubmit text="Update Member" className="btn-success" type="submit" />
            </form>
          </div>
        </div >
      </div >
    </>
  );
};

export default Editmember;