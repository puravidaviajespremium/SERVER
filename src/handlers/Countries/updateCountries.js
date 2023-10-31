const updateCountriesCtlr = require("../../controllers/Countries/updateCountriesCtlr");
const updateCountries = require("../../controllers/Countries/updateCountriesCtlr")


// const updateCountriesHandler = async (req, res) => {


//   const info = req.body
//   const { id } = req.params;
//   const info2 = req.body.Destinies;

//   try {
//     if (!info.name || !info.image || !info.description || !info.experiences || !info.continent){
//       res.status(400).json({ error: "Información faltante en 'pais'" })
//       return
//     }


//     const updatePromises = info2.map(async (d) => {
      
//       console.log(d.id, d.name)

//        if (!d.id || !d.name || !d.image || !d.description){

//         throw new Error("Error, Faltan datos en destinos")



//        }

       
//       //  await Promise.all(updatePromises)

//        res.status(200).json("todo chill")

//         // const update = await updateCountries(id, info, info2);

//         // console.log(update)
       



//         //  if (update) {
//         //    res.status(200).json({ data: { id, ...info, Destinies: info2 } }); 
//         //  }
//       //  else{
//       //   res.status(400).json({ error: "Información faltante en 'info'" });

//       // }

//     })

   


//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }


// }

// module.exports = updateCountriesHandler






//----------------------------------------------------------------------------------------

const updateCountriesHandler = async (req, res) => {
  const info = req.body;
  const { id } = req.params;
  const info2 = req.body.Destinies;

  try {
    if (!info.name || !info.image || !info.description || !info.experiences || !info.continent) {
      res.status(400).json({ error: "Información faltante en 'pais'" });
      return;
    }

    const updatePromises = info2.map(async (d) => {
      console.log(d.id, d.name);

      if (!d.id || !d.name || !d.image || !d.description) {
        throw new Error("Error faltan datos en destinos")
      }
    });


    // Realiza actualizaciones en la base de datos
    await Promise.all(updatePromises);
    
    const update = await updateCountries(id, info, info2);

    if(update) res.status(200).json({ data: { id, ...info, Destinies: info2 } });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateCountriesHandler;
