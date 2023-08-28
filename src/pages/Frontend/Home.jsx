import React from 'react'
import Header from "../../components/header.jsx"
import Sidebar from '../../components/sidebar.jsx'
import Footer from '../../components/footer.jsx'
import Contact from './contact.jsx'

const contact = () => {
  return (
    <>
        <Header />
        <div className='vh-100 gx-0 p-0 m-0 d-flex'>
            <div className='col-md-3'><Sidebar /></div>
            <div className='col-md-9'>
                <Contact />

            </div>
        </div>
        <Footer />
    </>
  )
}

export default contact
