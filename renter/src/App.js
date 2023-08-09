import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import Signup from './screens/Signup';
import ListProperty from './screens/ListProperty';
import Hotels from './screens/Hotels';
import Login from './screens/Login';
import BooknowScreen from './screens/BooknowScreen';
import Bookings from './screens/Bookings';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <div >
      <Navbar/>
      
      <Routes>
        <Route path='/' Component={HomeScreen}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/login' Component={Login}/>
        <Route path = '/registerproperty' Component={ListProperty}/>
        <Route path='/allhotels' element={<Hotels />} />
        <Route path='/allbookings' Component={Bookings} />
        <Route path='/profile' Component={ProfileScreen}/>
        <Route path = '/allhotels/:place/:fromdate/:todate' Component={Hotels}/>
        <Route path = '/booknow/:hotelid/:fromdate/:todate' Component={BooknowScreen}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
