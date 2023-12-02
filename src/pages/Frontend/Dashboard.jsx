import React from 'react'
import Card from './card'
import Logo from '../../assets/img/Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/button'
import Footer from '../../components/footer'
import Header from '../../components/head-nav'

const Dashboard = () => {
  return (
    <>
      <Header />
        <div className='container d-flex'>
          <div class="col-md-3">
            <Card className="col-md-4" img={Logo} title="hi" sub="Good" />
            <Card className="col-md-4" img={Logo} title="hi" sub="Good" />
            <Card className="col-md-4" img={Logo} title="hi" sub="Good" />
            <Button btntext="Submit" url="card" />
          </div>
        </div>
    </>
  )
}

export default Dashboard
