const { Country, Activity } = require("../db");


async function newAct(req,res){

    const {name,duration,season,countryID,difficulty}=req.body;

    // const valdidateact = await Activity.findOne({
    //     where: {
    //       name: name,
    //     },
    //   });
    
      // if (!valdidateact) {
        const addAct = await Activity.create({
          name: name,
          difficulty: difficulty,
          duration: duration,
          season: season,
        });
        const countrymatch = await Country.findAll({
          where: {
            ID: countryID,
          },
        });
    
         console.log (countrymatch)
      await addAct.addCountries(countrymatch);

    const resact = await Activity.findOne(
      {where:{name:name},
      attributes: {
        exclude: ['updatedAt', 'createdAt'],
    },
    include: {
        model: Country,
        through: {
            attributes: []
        }
    
}})
        return res.send(resact);
}
    
      // const countrymatch = await Country.findAll({
      //   where: {
      //     ID: countryID,
      //   },
      // });
      
    
      // const resact = await valdidateact.addCountries(countrymatch);
    
      // res.send(resact);
    //}
    
    module.exports = { newAct };
