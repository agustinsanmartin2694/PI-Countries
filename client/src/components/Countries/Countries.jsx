import React, { useEffect, useState } from "react";
import Country from "./Country.jsx";
import { useSelector } from "react-redux";
import { getCountries } from "../../action/actions.js";
//import style from "./countries.module.css";
//import "./countries.module.css"

const Countries = (props) => {
 // const countries = useSelector(state =>state.countries);
  const [currentPage, setCurrentPage] = useState(0);

  let nextPage = () => {
    if (props.countries.length <= currentPage + 10) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 10);
  };
  let prevPage = () => {
    if (currentPage < 9) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 10);
    }
  };

  const firstPage = () => {
    setCurrentPage(0);
  };

  const lastPage = () => {
    setCurrentPage(props.countries.length - 10);
    console.log(currentPage);
  };

  useEffect(() => {
    firstPage();
   // getCountries();
  
  }, []);

  
 const filteredC = props.countries?.slice(currentPage, currentPage + 10);
  
    return (
      <>
      
      <div>
      
        
        <button onClick={firstPage} >  {'<<'}  </button>
        <button onClick={prevPage} >  {'<'} Prev  </button>
        <button onClick={nextPage} >  next {'>'}   </button>
        <button onClick={lastPage} >  {'>>'}</button>
        
        <div >
          {
           filteredC.map((e) => ( 
            <Country
            key={e.ID}
              id={e.ID}
              flagimg={e.flagimg}
              name={e.name}
              region={e.region}
            />))}
        </div>
        
        
      </div>
      
    </>);
  }

 
export default Countries;