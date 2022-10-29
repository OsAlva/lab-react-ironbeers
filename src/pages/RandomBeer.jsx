import { Link } from 'react-router-dom';
import allBeers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import beerService from '../services/beers.service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



export default function RandomBeer(){

    const {beerId} = useParams();
    const [beer, setBeer] = useState({});
    
    useEffect(() => {
        beerService.getRandomBeer()
        .then(results => {
            console.log(results.data);
            setBeer(results.data);
        })
        
        }, [])

    return (
        <div className="card text-center">
             <div className="card-body">
                <img src={beer.image_url} alt={beer.name} />
                    <h5 className="card-title">Name: {beer.name}</h5>
                    <p className="card-text">Tagline: {beer.tagline}</p>
                    <p className="card-text">First Brewed: {beer.first_brewed}</p>
                    <p className="card-text">Atenuation Level:{beer.attenuation_level}</p>
                    <p className="card-text">Description: {beer.description}</p>
                    <p className="card-text">Contributed by: {beer.contributed_by}</p>
                    
                </div>    
        </div>


    );
}
