import React from 'react'
import Header from "../../components/head-nav.jsx"
import Sidebar from '../../components/sidebar.jsx'
import Footer from '../../components/footer.jsx'


const Home = () => {
  return (
    <> 
      <Header />
        <div className='container-fluid p-0 g-o m-0 d-flex'>
            <div className='container-fluid p-3 col-md-3'>
              <Sidebar />
            </div>
            <div className='col-md-9 p-3'>
                
            </div>
        </div>
    </>
  )
}

export default Home
