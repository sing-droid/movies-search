import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './navbar/navbar';
import { Route, Routes} from 'react-router-dom';
import Home from './components/pages/home';
import Homes from './components/homes';


const  App = () => {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      {/* <Routes> */}
        {/* <Route path='/' element = {<Home/>} /> */}
        {/* </Routes> */}
        {/* <Home/> */}
        <Homes/>

    </div>
  );
}

export default App;
