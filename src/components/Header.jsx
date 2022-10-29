import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <button type="button" class="btn btn-primary position-relative"><h1>Home</h1>
        <Link to="/"></Link>
      </button>

    
      {/* <h1>Home Page</h1>
            <img src={allBeers} alt="All Beers" />
            <Link to="/beers"> All Beers</Link>

            <img src={randomBeer} alt="Random Beer" />
            <Link to="/random-beer"> Random Beer</Link>

            <img src={newBeer} alt="New Beer" />
            <Link to="/new-beer"> New Beer</Link> */}
    </div>
  );
}

