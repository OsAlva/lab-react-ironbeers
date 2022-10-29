import { Link } from "react-router-dom";
import beerService from "../services/beers.service";
import { useEffect, useState } from "react";

export default function ListBeers() {
    
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        beerService.getBeers()
        .then(results => {
            console.log(results.data);
            setBeers(results.data);
        })
        }, [])
   



    return (
        <div className="container">
            <h1>List of Beers</h1>
            {beers.map((beer) => {
                    return (
                        <div className="row">
                            <div className="col-4">
                                <img src={beer.image_url} alt={beer.name} />
                            </div>
                            <div className="col-8">
                                <h2>{beer.name}</h2>
                                <h3>{beer.tagline}</h3>
                                <p>Created by: {beer.contributed_by}</p>
                                <Link to={`/beers/${beer._id}`}>See more</Link>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}  
