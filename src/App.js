
import './App.css';
import Header  from './components/Header';
import Footer from './components/Footer';
import Restaurents from './components/Restaurents';
import Restview from './components/Restview';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
       
       <Routes>
        <Route path='/' element={<Restaurents></Restaurents>}   />
        <Route  path='/view-restaurent/:id'  element={<Restview/>}></Route>
        </Routes>
       
        

      <Footer/>    
    </div>
  );
}

export default App;
