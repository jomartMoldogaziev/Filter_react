import { useState } from "react";
import { User } from "./components/user";
import { employes } from "./data";


function App() {
  const [status, setStatus]=useState("EMPLOYES")

  

    const renderUser=()=>{
       // eslint-disable-next-line 
    switch(status) { 
      case "EMPLOYES":
        let arr = employes.filter((el)=>{
          return el.status === "EMPLOYES"
        })
        return arr.map((el,id)=>{
          return<User el={el} key={id}/>
        })

        case "MANAGERS":
        let arr2 = employes.filter((el)=>{
          return el.status === "MANAGERS"
        })
        return arr2.map((el,id)=>{
          return<User el={el} key={id}/>
        })

        case "ADMINS":
        let arr3= employes.filter((el)=>{
          return el.status === "ADMINS"
        })
        return arr3.map((el,id)=>{
          return<User el={el} key={id}/>
        })
    }
  }
  return (
    <div className="App">
      <div className="btns-group">  
      <button className="btn" onClick={()=>setStatus("ADMINS")}>Show admin-teacher</button>
      <button className="btn" onClick={()=>setStatus("MANAGERS")}>Show teachers</button>
      <button className="btn" onClick={()=>setStatus("EMPLOYES")}>Show students</button>

      </div>
     
      <div className="container">
        {renderUser()}
    
      </div>
    
    </div>
  );
}

export default App;
