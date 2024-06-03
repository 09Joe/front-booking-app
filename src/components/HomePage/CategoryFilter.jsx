import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { getHotelsThunk } from "../../store/states/hotels.slice";
import { useDispatch } from 'react-redux'
import './styles/CategoryFilter.css'

const CategoryFilter = () => {

    const url = 'https://booking-app-bkga.onrender.com/cities';

   const [ cities, getCities ] = useFetch(url);


   useEffect(() => {
    getCities()
   }, []);


    const dispatch = useDispatch()

   const handleFilterCity = (id) => {
    let url
    if(id) {
        url= `https://booking-app-bkga.onrender.com/hotels?cityId=${id}`
    } else {
        url = 'https://booking-app-bkga.onrender.com/hotels'
    }

    dispatch(getHotelsThunk(url))
   }



  return (
    <section>
        <h3>Cities</h3>
        <ul>
            <li className="filter__cities" onClick={() => handleFilterCity()} >All cities</li>
                {cities?.map((city) => (
                    <li className="filter__cities" onClick={() => handleFilterCity(city.id) } key={city.id}>{city.name}</li>
                ))}
        </ul>
    </section>
  );
};

export default CategoryFilter