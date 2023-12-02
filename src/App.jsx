//--------------------- Link Start -------------------------------------------- 
import { Route, Routes } from 'react-router-dom';
import Head from './components/head-nav.jsx';
import Front_page from '../src/pages/Frontend/front_page.jsx';
import Home from './pages/Frontend/Home.jsx';
import Login from './pages/Frontend/login_form.jsx';
import Dashboard from './pages/Frontend/Dashboard.jsx';
import AddMember from './pages/Backend/members/add_member.jsx';
import EditMember from './pages/Backend/members/edit_member.jsx';
import MemberList from './pages/Backend/members/view_member.jsx';
import AddHrent from './pages/Backend/houseRent/add_houserent.jsx';
import HrentList from './pages/Backend/houseRent/view_hrent.jsx';
import EditHrent from './pages/Backend/houseRent/edit_hr.jsx';
import AddDep from './pages/Backend/deposite/add_deposite.jsx';
import DepHistory from './pages/Backend/deposite/view_deposite.jsx';
import EditDep from './pages/Backend/deposite/edit_deposite.jsx';
import AddMeal from './pages/Backend/meal/add_meal.jsx';
import ViewMeal from './pages/Backend/meal/view_meal.jsx';
import EditMeal from './pages/Backend/meal/edit_meal.jsx';
import ViewLadger from './pages/Backend/ledger/view_ledger.jsx';
// --------------------- Link End --------------------------------------------


function App () {
  return (
        <Routes>
          <Route path='/' element= {<Front_page />} />
          <Route path='/header' element= {<Head />} />
          <Route path='/home' element= {<Home />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/dashboard' element= {<Dashboard />} />
          <Route path='/AddMember' element= {<AddMember />} />
          <Route path='/editMember/:id/edit' element= {<EditMember />} />
          <Route path='/memberList' element= {<MemberList />} />
          <Route path='/AddHrent' element= {<AddHrent />} />
          <Route path='/hrentList' element= {<HrentList />} />
          <Route path='/editHrent/:id/edit' element= {<EditHrent />} />
          <Route path='/AddDep' element= {<AddDep />} />
          <Route path='/depHistory' element= {<DepHistory />} />
          <Route path='/editDep/:id/edit' element= {<EditDep />} />
          <Route path='/addMeal' element= {<AddMeal />} />
          <Route path='/viewMeal' element= {<ViewMeal />} />
          <Route path='/editMeal/:id/edit' element= {<EditMeal />} />
          <Route path='/viewLadger' element= {<ViewLadger />} />
        </Routes>
  )
}

export default App
