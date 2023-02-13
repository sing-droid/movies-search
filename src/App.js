import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './navbar/navbar';
import { Route, Routes} from 'react-router-dom';
import Homes from './components/homes';
import Trending from './components/pages/trending';
import Tv from './components/pages/tv';
import Celebrety from './components/pages/celebrety';
import Search from './components/search';
import Description from './components/description';
import TvDescription from './components/tvDescription';
import CelebDescription from './components/celebDescription';


const  App = () => {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Routes> 
        <Route path ='/' element = {<Homes/>} />
        <Route path = '/trending' element = {<Trending/> } />
        <Route path ='/tv' element = {<Tv />} />
        <Route path ='/celebrety' element = {<Celebrety/>} />
        <Route path='/search/:query' element = {<Search/>} />
        <Route path='/description/home/:id' element = {<Description/>}/>
        <Route path='/description/tv/:id' element = {<TvDescription/>}/>
        <Route path='/description/celebrity/:id' element = {<CelebDescription/>}/>
        </Routes>
       

    </div>
  );
}

export default App;
