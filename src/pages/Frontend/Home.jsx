import React from 'react'
import Header from "../../components/header.jsx"
import Sidebar from '../../components/sidebar.jsx'
import Footer from '../../components/footer.jsx'
import Dashboard from './Dashboard.jsx'


const Home = () => {
  return (
    <>
        <div className='gx-0 p-0 m-0 d-flex'>
            <div className='col-md-3 vh-100'><Sidebar /></div>
            <div className='col-md-9'>
                <Dashboard />
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home
