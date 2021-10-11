const express = require('express')
const router = express.Router()

//Get All
router.get("/", (req, resp) => {
  //resp.send("Hellow Subscriber World")  
  resp.header('Content-type', 'text/html');
  return resp.end('<h1>Hello, Sham World World!</h1>');
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
