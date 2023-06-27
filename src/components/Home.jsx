import React,{useState} from "react";
import axios from "axios"


export default function Home() {
  
  const [meg, setMeg] = useState("")

  submit = async(e) =>{
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/", {
        meg
      })

    }catch(e){
        console.log(e)
    }
  }

  return (
    <div>
      <form action="POST"> 
       <textarea name="" onChange={(e) =>{setMeg(e.target.value)}} placeholder="Enter your text" cols="30" rows="10"></textarea>
      
      <input type="submit" onClick={submit} value="submit" />
      </form>
    </div>
  );
}
