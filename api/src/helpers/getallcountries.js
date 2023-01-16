const axios = require ("axios")
const {Country} = require("../db.js")

async function getallcountries (){

    try { 
        const db= await Country.findAll();
        console.log(db)
        if(db.length>0){
            return db
        } else{
          const countries  = await axios.get(" https://restcountries.com/v3.1/all")
    //console.log(countries.data.filter(c=> c.capital))
    const apiinfo =countries.data.map(c=>{
        return{
            name: c.name.common,
            ID: c.cca3,
            flagimg: c.flags.png ,
            continent: c.continents[0],
            capital: c.capital !== undefined ? c.capital[0] : 'Does not have capital city',
            subregion: c.subregion,
            area: c.area,
            population: c.population
        }
    })
    await Country.bulkCreate(apiinfo)
const bulk=await Country.findAll() 
const response= bulk.filter((item,index)=> bulk.indexOf(item) === index)
console.log(response.filter(e=> e.name=== 'Argentina'))
    return response   
        }
       

        
    } catch (error) {
        return error
        
    }
} 
module.exports = getallcountries