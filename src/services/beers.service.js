import axios from 'axios';

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";
const randomBeerUrl = "https://ih-beers-api2.herokuapp.com/beers/random";
const newBeerUrl = "https://ih-beers-api2.herokuapp.com/beers/new";
class BeersService {
    getBeers(){
       return axios.get(apiUrl); 
    }
    getBeer(beerId) {
        return axios.get(apiUrl + "/" + beerId);
    }

    getRandomBeer() {
        return axios.get(randomBeerUrl);
    }

    // deleteApartment(apartmentId) {
    //     return axios.delete(apiUrl + "/" + apartmentId);
    // }
    addBeer(beer) {
        // return axios.post(apiUrl, {img: apartment.img, title: apartment.title, pricePerDay: apartment.pricePerDay});
        return axios.post(newBeerUrl, beer);
    }

    getByName({name}) {
        return axios.get(apiUrl + "/search?q=" + name);
    }
    
    // editApartment(apartment) {
    //     return axios.put(apiUrl + "/" + apartment.id, apartment);
    // }
}

const beerService = new BeersService();

// export default ApartmentsService;
export default beerService;