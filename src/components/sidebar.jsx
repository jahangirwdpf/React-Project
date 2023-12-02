import React from 'react'
import { Link } from 'react-router-dom'
import "../pages/Backend/css/sidebar.css"
const Sidebar = () => {
  return (
    <div className="accordion accordion-flush bg-dark" id="accordionFlushExample" style={{backgroundColor: 'black'}}>
      
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Dashboard
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><Link to={"#"} className='nav-link'>Dashboard</Link></div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Members
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse hov" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><Link to={"/AddMember"} className='nav-link'>Add Member</Link></div>
          <div className="accordion-body"><Link to={"/memberList"} className='nav-link'>Member List</Link></div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Deposite Sections
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse hov" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><Link to={"/addDep"} className='nav-link'>Add Deposite </Link></div>
          <div className="accordion-body"><Link to={"/depHistory"} className='nav-link'>Deposite History </Link></div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
            Members Profile (Indivisual)
          </button>
        </h2>
        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
          House Rent & Others
          </button>
        </h2>
        <div id="flush-collapseFive" className="accordion-collapse collapse hov" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><Link to={"/AddHrent"} className='nav-link'>Add House Rent </Link></div>
          <div className="accordion-body"><Link to={"/hrentList"} className='nav-link'>View Details </Link></div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
            Meal Sections
          </button>
        </h2>
        <div id="flush-collapseSix" className="accordion-collapse collapse hov" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><Link to={"/addMeal"} className='nav-link'>Add Meal </Link></div>
          <div className="accordion-body"><Link to={"/viewMeal"} className='nav-link'>Meal History </Link></div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
            Monthly Reports
          </button>
        </h2>
        <div id="flush-collapseSeven" className="accordion-collapse collapse hov" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body"><Link to={"/addLadger"} className='nav-link'>Calculate </Link></div>
          <div className="accordion-body"><Link to={"/viewLadger"} className='nav-link'>Report DEtails </Link></div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar