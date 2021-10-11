const express = require('express')
const router = express.Router()

//Get All
router.get("/", (req, resp) => {
  resp.send("Hellow Subscriber World")  
})
//Get One
router.get("/:id", (req, resp) => {
  
})
//Create One
router.post("/", (req, resp) => {
  
})
//Update part of One
router.patch("/:id", (req, resp) => {
  
})
//Delete One
router.delete("/:id", (req, resp) => {
  
})

module.exports = router
