import { Link } from "react-router-dom";
import Countries from "../Countries/Countries.jsx";
//import Country from '../Countries/Country'
import React, { useEffect , useState} from "react";
import { getCountries } from "../../action/actions";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav.jsx";

export function MainPage() {
  const dispatch= useDispatch();
  const countries= useSelector((state)=> state.countries)

  // const [currentPage, setCurrentPage] = useState(0);

  // let nextPage = () => {
  //   if (countries.length <= currentPage + 10) {
  //     setCurrentPage(currentPage);
  //   } else setCurrentPage(currentPage + 10);
  // };
  // let prevPage = () => {
  //   if (currentPage < 9) {
  //     setCurrentPage(0);
  //   } else {
  //     setCurrentPage(currentPage - 10);
  //   }
  // };

  // const firstPage = () => {
  //   setCurrentPage(0);
  // };

  // const lastPage = () => {
  //   setCurrentPage(countries.length - 10);
  //   console.log(currentPage);
  // };

  // useEffect(() => {
   
  //  // getCountries();
  
  // }, []);

  useEffect(() => {
     
    dispatch(getCountries());
    console.log(countries)
  }, []);

 //const filteredC = countries?.slice(currentPage, currentPage + 10);

  

  return (
    
    <div>
      
      <div>
      <Nav />
      <Countries countries={countries}/> 
      </div>
        
      
    </div>
    
  );
}

export default MainPage;