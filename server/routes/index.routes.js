const router = require("express").Router();
const phonesDb = require("../data/phones.json")


router.get(("/phones"), (req, res) =>{
    res.json(phonesDb); 
})

router.get(("/phones/:id"), (req, res) =>{
    const {id} = req.params;
    const filteredData = phonesDb.filter(phone => phone.id == id );
    res.json(filteredData[0])
})

module.exports = router;