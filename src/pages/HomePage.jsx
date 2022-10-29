import { Link } from 'react-router-dom';
import allBeers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";


export default function HomePage(){
    return (
        <div className='container'>
            {/* <h1>Home Page</h1> */}
            <div className='row justify-content-center'>
                <img src={allBeers} alt="All Beers" />
                <Link to="/beers"> <h1>All Beers</h1></Link>      
            </div>
            
            <div className='row justify-content-center'>
                <img src={randomBeer} alt="Random Beer" />
                <Link to="/random-beer"> <h1>Random Beer</h1></Link>
            </div>

            <div className='row justify-content-center'>
                <img src={newBeer} alt="New Beer" />
                <Link to="/new-beer"><h1>New Beer</h1></Link>
            </div>
        </div>

    );
}

