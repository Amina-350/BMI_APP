import "./App.css";
import React, { useState } from "react";
//App function
function App() {
  // usestates
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState(0);
  const [message, setmessage] = useState(0);
  // logics
  let calc = (e) => {
    // prevent default submission
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Enter valid values");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setbmi(bmi.toFixed(1));
    }

    if (bmi < 25) {
      setmessage("you are underweight");
    } else if (bmi >= 25 && bmi <= 30) {
      setmessage("You are healthy weight");
    } else {
      setmessage("you are overweight");
    }
  };

  const reload = () => {
    window.location.reload();
  };

 const  mystyle={padding:'10px', color:'white'}
const mystyle1={
  border:'2px solid black',
  padding:'30px',
  borderRadius:'10px',
  boxShadow:'10px 10px 5px 12px blue;',
  backgroundColor:'rgb(20, 150, 20)'

  
}
  return (
    <>
    <div className="container" style={{marginTop:'10vh'}}>
      
      <div>
        <h1>B<span style={{color:'rgb(20, 150, 20)'}}>M</span>I Cal<span style={{color:'rgb(20, 150, 20)'}}>cu</span>lat<span style={{color:'rgb(20, 150, 20)'}}>o</span>r</h1>
      </div>
      <form onSubmit={calc} style={mystyle1}>
        <div className="mainl">
          <label style={mystyle}>Weight (ibs): </label>
          <input
            type="text"
            placeholder="enter your weight"
            value={weight}
            onChange={(e) => setweight(e.target.value)}
          /> <br/>
          <label style={mystyle}>Height (in): </label>
          <input 
            type="text"
            placeholder="enter your height"
            value={height}
            onChange={(e) => setheight(e.target.value)}
          />
        </div>
        <div style={{marginTop:'2vh', textAlign:'center'}}>
          <button type="submit">Submit</button>
          <br/>
          <br/>
          <button type="submit" onclick={reload}>
            Reload form
          </button>
        </div>
        <div>
          <h3 style={{textAlign:'center',color:'white'}}>Your BMI is :{bmi}</h3>
          <p style={{marginLeft:'2vw',color:'yellow'}}>You are {message}</p>
        </div>
      </form>
     
      </div>
    </>
  );
}

export default App;


