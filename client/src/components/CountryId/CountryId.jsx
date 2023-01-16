import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../action/actions";
import  Activity  from "../Countries/ActivDetail";
//import style from "./countryId.module.css";


const CountryId = () => {
  const countryDetail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);
 

 console.log(countryDetail, "COUNTRY DETAIL")


 


 

  return (
    <div >
      <button>
      <Link  to="/countries" >Back to countries</Link></button>
      <div >
        <h1>{countryDetail.name}</h1>
        {/* <h3>{countryDetail.id}</h3> */}
        <div >
          <img src={countryDetail.flagimg} alt="No img" />
        </div>
        <h4>Region: {countryDetail.region}</h4>
        <h5>Subregion: {countryDetail.subregion}</h5>
        <h5>Capital: {countryDetail.capital}</h5>
        <h5>Area: {countryDetail.area} Km2</h5>
        <h5>Population: {countryDetail.population} Hab. </h5>
        <div >
        <Activity countryName={countryDetail.name} activities={countryDetail.activities}/></div>
      </div>
      
    </div>
  );
};
export default CountryId;