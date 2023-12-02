
import Banner from '../../assets/img/banner-00.png'
import Banner1 from '../../assets/img/logo.png'
import Banner2 from '../../assets/img/1.png'
import Card from './card'
import Img_card from '../../assets/img/favicon.ico'
import Pic from '../../assets/img/Screenshot_3.png'
import pic2 from '../../assets/img/Screenshot_5.png'
import pic3 from '../../assets/img/Screenshot_7.png'
import pic4 from '../../assets/img/Screenshot_8.png'
import pic5 from '../../assets/img/Screenshot_9.png'
import pic6 from '../../assets/img/Screenshot_10.png'
import Head from '../../assets/img/Screenshot_4.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import Login from './login_form'


    function front_page(){

        return(
        <>
            <div className="container-fluidcontainer-fluid bg-white p-0 d-flex">
                <div className='col-md-10'>
                    <Link><img src={Head} class="d-block w-100" alt="..." /></Link></div>
                <div className='col-md-2 px-5' style={{backgroundColor: "#003D59"}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Login Panel
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/Login">Admin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Members</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">New Member</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
{/*--------------------  -------------------------------------------------------------*/}
        <div id="carouselExampleRide pb-2" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={Banner} class="d-block w-100" alt="..." />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
{/*--------------------  -------------------------------------------------------------*/}
        <div className='container-fluid d-flex py-5'>
        <Card className="col-md-4 d-flex border img-fluid" img={Banner1} />
        <Card className="col-md-4 d-flex border img-fluid" img={Banner2} />
        <Card className="col-md-4 d-flex border img-fluid" img={Banner} />
        </div>


        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="">
            <div><Link><img src={pic2} class="d-block w-100" alt="..." /></Link></div>
            <div className='container-fluid'>
                <br />
                <br />
                <br />
                <h1 className='text-center bg-light text-success'></h1>
                <Link><img src={pic3} class="d-block w-100" alt="..." /></Link>
            </div>
            <div className='container-fluid'>
                <br />
                <br />
                <br />
                <Link><img src={pic4} class="d-block w-100" alt="..." /></Link>
            </div>
            <div className='container-fluid '>
                <br />
                <br />
                <br />
                <Link><img src={pic5} class="d-block w-100" alt="..." /></Link>
            </div>
            <div className='pt-5'>
                <h1 className='text-center bg-light py-5 text-success'>Our Awards</h1>
                <Link><img src={pic6} class="d-block w-100 border-radius-50%" alt="..." /></Link>
            </div>     
            <div class="container-fluidcontainer-fluid carousel-item active">
                <h1 className='bg-light gx-0 p-0 m-0'><hr /></h1>
                <img src={Pic} class="d-block w-100 border-radius-50%" alt="..." />
            </div>
        </div>
        </div>

        </>
        )
    }
    
    export default front_page