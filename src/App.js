import './App.css';
import Home from './components/Home';
import NavBarComp from './components/NavBarComp';
import { Routes, Route } from 'react-router-dom';


import Notfound from './components/Notfound';
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ViewTicket from "./components/ViewTicket";
import AddTicketForm  from "./components/Addticketform";
import UserTicketPage  from "./components/UserTicketPage";
import Cards  from "./components/Cards";
import Footer  from "./components/Footer";




function App() {
  return (

    <div className="App">
      <NavBarComp />
      <Routes>
        <Route path='/' element={<Home />}></Route>
       
       
        <Route path='/RegisterForm' element={<RegisterForm />}></Route>
        <Route path='/LoginForm' element={<LoginForm/>}></Route>
        <Route path='/ViewTicket' element={<ViewTicket/>}></Route>
        <Route path='/AddTicketForm' element={<AddTicketForm/>}></Route>
        <Route path='/UserTicketPage' element={<UserTicketPage/>}></Route>
        <Route path='/Cards' element={<Cards/>}></Route>
        <Route path='/.Footer' element={<Footer />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </div>

  );
}

export default App;
