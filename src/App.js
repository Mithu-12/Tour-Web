import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import AddService from './Component/AddService/AddService';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Footer from './Component/Footer/Footer';
import Register from './Component/Register/Register';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import Dashbord from './Component/Dashbord/Dashbord';
import Offer from './Component/Offer/Offer';
import About from './Component/About/About';
import ManageAllOrders from './Component/ManageALlOrders/ManageAllOrders';
import Confirm from './Component/Confirm/Confirm';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route path='/addService'>
            <AddService></AddService>
          </Route>
          <Route path='/offer'>
            <Offer></Offer>
          </Route>
          <PrivateRoute path='/services'>
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path='/dashbord'>
            <Dashbord></Dashbord>
          </PrivateRoute>
          <PrivateRoute path='/allOrders'>
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path='/confirm'>
            <Confirm></Confirm>
          </PrivateRoute>
          <PrivateRoute path="/placeOrder/:id">
            <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path="*">
              
            </Route>
          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
