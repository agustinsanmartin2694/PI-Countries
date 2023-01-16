const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const { Country, Activity } = require("../db");
const getallcountries = require ('../helpers/getallcountries.js')
async function getAllCount(req,res){
    const { name } = req.query;
    
        try {
            if (!name) {
              res.send(await getallcountries())
              // const countryAll = await Country.findAll({ include: Activity}); console.log("hola")
              // res.send(countryAll);
            } else {
              const countryQuery = await Country.findAll({
                where: {
                  name: {
                    [Op.iLike]: `%${name}%`
                  },
                },
                 include: Activity
              });
              console.log("hola 2")
              if (!countryQuery[0]) {
                console.log("error");
        
                return res
                  .status(404)
                  .json({
                    error: ` no se encuentra ningun Pais con el nombre , ${name}`,
                  });
              }
              return res.send(countryQuery);
            }
          } catch (error) {
            res.send(error);
          }
        }
        
        async function GetCountryId(req, res) {
          const id = req.params.id.toUpperCase()
          

          try {
            
           console.log (req.params)
           await getallcountries()
            const country = await Country.findOne({
              where: {
                ID:id
              }
            } 
             ,{
              include: Activity},
            );
        if (country){
          return res.json(country)
        }
            return res.json({error:"id not match"});
          } catch (error) {
            res.send(error);
          }
        }
        
        module.exports = { getAllCount, GetCountryId };
   