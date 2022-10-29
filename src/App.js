import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Header from './components/Header';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';




function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} /> 
        <Route path="/new-beer" element={<NewBeer />} />            
        {/* <Route path="/:apartmentId/edit" element={<ApartmentEdit />} />
        <Route path="*" element={<ErrorPage />} />  */}
      </Routes>
    </div>
  );
}

export default App;
