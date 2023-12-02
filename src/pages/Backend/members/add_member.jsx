import React, {useState, useEffect} from "react";
import Head from '../../../components/head-nav.jsx';
import Sidebar from '../../../components/sidebar.jsx';
import Forminp from '../../../components/forminp.jsx';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Swal from 'sweetalert2';
import BtnSubmit from "../../../components/btnsubmit.jsx";

const AddMember = () => {
    const [member, setMember] = useState({
        membername: '',
        membercontact: '',
        memberemail: '',
        memberaddress: '',
        membernid: '',
        memberusername: '',
        // memberpassword: '',
        // memberrole: '',
    })
    const reset = () => {
        setMember({
            membername: '',
            membercontact: '',
            memberemail: '',
            memberaddress: '',
            membernid: '',
            memberusername: '',
            memberpassword: '',
            // memberrole: '',
        });
    }
    const input = (e) => {
        e.persist();
        setMember({ ...member, [e.target.name]: e.target.value });
    };
    const save = (e) => {
        e.preventDefault()
        const data = {
            membername: member.membername,
            membercontact: member.membercontact,
            memberemail: member.memberemail,
            memberaddress: member.memberaddress,
            membernid: member.membernid,
            memberusername: member.memberusername,
            memberpassword: member.memberpassword,
            // memberrole: member.memberrole,
        }
        axios.post(`http://localhost/Bachelor-Point/api/api-insert-member.php`, data).then(res => {
            Swal.fire({
                title: 'Member add done!',
                icon: 'success',
            })
            reset()
        });
    }
    // const [role , setRole] = useState([]);
    // useEffect(() => {
    //     axios.get(`http://localhost/Bachelor-Point/api//fetch_role.php`).then(res => {
    //         setRole(res.data)
    //     });
    // },[])
    return (
        <>
            <Head />
            <div className="container-fluid p-4 g-0 m-0 d-flex">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="container mt-3 justify-content-center d-flex px-4">
                        <form className="row g-3" onSubmit={save}>
                            <Forminp
                                title="Member Name"
                                type="text"
                                name="membername"
                                className="col-md-4"
                                onChange={input}
                                value={member.membername}
                            />
                            <Forminp
                                title="Member Contact"
                                type="text"
                                name="membercontact"
                                className="col-md-4"
                                onChange={input}
                                value={member.membercontact}
                            />
                            <Forminp
                                title="Member E-mail"
                                type="text"
                                name="memberemail"
                                className="col-md-4"
                                onChange={input}
                                value={member.memberemail}
                            />
                            <Forminp
                                title="Member Address"
                                type="text"
                                name="memberaddress"
                                className="col-md-4"
                                onChange={input}
                                value={member.memberaddress}
                            />
                            <Forminp
                                title="Member Nid"
                                type="text"
                                name="membernid"
                                className="col-md-4"
                                onChange={input}
                                value={member.membernid}
                            />
                            <Forminp
                                title="Member NID"
                                type="text"
                                name="memberusername"
                                className="col-md-4"
                                onChange={input}
                                value={member.memberusername}
                            />
                            <Forminp
                                title="Member Password"
                                type="text"
                                name="memberpassword"
                                className="col-md-4"
                                onChange={input}
                                value={member.memberpassword}
                            />
                            <BtnSubmit text="Add Member" className="btn-success" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AddMember;