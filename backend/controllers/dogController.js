const dogsDetails = require("../models/Dogs");

//add new dog for system
exports.addNewDog= async (req, res) => {
 
    //constant variables for the attributes
    const {dogID,dogName, ownerName,address,dob,breed,sex,image,weight,bloodGroup,disease,lastDate,nextDate,medicine,labTests,doctor} = req.body;
  
  
    dogsDetails.findOne({dogID: dogID})
      .then((savedDog) => {
          if(savedDog) {
              return res.status(422).json({error:"Dog already exists with that no"})
          }
  
          const newDog = new dogsDetails({
            dogID,
            dogName,
            ownerName,
            address,
            dob,
            breed,
            sex,
            image,
            weight,
            bloodGroup,
            disease,
            lastDate,
            nextDate,
            medicine,
            labTests,
            doctor
           
        })
    
        newDog.save().then(() => {
             res.json("Dog Added")
    
        }).catch((err) => {
            console.log(err);
        })
      
    }).catch((err) =>{
        console.log(err);
    })
    }

// //delete existing one
// exports.deleteTopicEvaluation = async (req, res) => {
//     let topicID = req.params.id;
   
//     await SendFeedbak.findByIdAndDelete(topicID).then(() => {
//       res.status(200).json({ status: "Feedback Deleted" });
//     }).catch((error) => {
//       res.status(500).json({ status: "Error with Deleting", error: error.message });
//     })
//   }
   
//   //update 
//   exports.updateEvaTopic= async (req, res) => { 
//     //fetch id from url
//     let topicID = req.params.id;
//     const {groupno,topic, staus,supervisor,feedback} = req.body;
  
//     const updateTopic = {
//       groupno,
//       topic,
//       supervisor,
//       staus,
//       feedback
//     }
  
  
//     const update = await SendFeedbak.findByIdAndUpdate(topicID, updateTopic).then(() => {
//       res.status(200).send({status: "Result updated"})
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).send({status: "Error with updating data", error: err.message});
//     })   
//   }


//view 
exports.viewDogs= async (req, res) => { 
 
    //calling  model
    dogsDetails.find().then((dogs) => {
      res.json(dogs)
  
  }).catch((err) => {
      console.log(err)
  })
  
  }
  //view one
  exports.viewOneDog = async (req, res) => {
    
    let dogid = req.params.id;
    const dog = await dogsDetails.findById(dogid).then((dog) => {
        res.status(200).send({status: "  fetched", dogid})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get " , error: err.message})
    })
  }