
const express = require("express")

const cors = require("cors")

const collection = require("./mongo")

const app = express()

app.use(express.json())

app.use(express.Urlencoded({extended:true}))

app.use(cors())

app.get("/", core(), (req, res) =>{

})

app.post("/", async(req,req) =>{
  const {meg} = req.body

  const data ={
    meg:meg
  }
  await collection.inertMany({data})
})

app.listen("8000", ()=>{
  console.log("connecte to successful")
})