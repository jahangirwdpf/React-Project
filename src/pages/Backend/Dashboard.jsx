import React from 'react'
import Card from '../../components/card'
import Logo from '../../assets/img/Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/button'
import Footer from '../../components/footer'

function Dashboard() {
  return (
    <><div className='container'>
      <div class="row">
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
