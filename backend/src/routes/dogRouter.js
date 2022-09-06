const dogRouter = require("express").Router();

const {addNewDog,viewDogs,viewOneDog} = require ('../controllers/dogController')

//add new dog 
router.post("/add", addNewDog);

// //delete existing one
// router.delete("/delete/:id", deleteTopicEvaluation);

// //update existing evaluation
// router.put("/update/:id", updateEvaTopic);

//view all dogs
router.get("/", viewDogs);

//view one dog
router.get("/get/:id", viewOneDog);

module.exports = dogRouter;