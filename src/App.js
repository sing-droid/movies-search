import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './navbar/navbar';
import { Route, Routes} from 'react-router-dom';
import Homes from './components/homes';
import Trending from './components/pages/trending';
import Tv from './components/pages/tv';
import Celebrety from './components/pages/celebrety';


const  App = () => {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Routes> 
        <Route path ='/' element = {<Homes/>} />
        <Route path = '/trending' element = {<Trending/> } />
        <Route path ='/tv' element = {<Tv/>} />
        <Route path ='/celebrety' element = {<Celebrety/>} />
        <Route path='/search' element = {<Trending/>} /> 
        </Routes>
       

    </div>
  );
}

export default App;
