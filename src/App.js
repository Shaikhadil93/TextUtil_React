import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(() => {
      setAlert(null);
  }, 1500);
  }

  const togglemode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#041931';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <>
    <Navbar title= "Textutils" mode={mode} togglemode={togglemode} />
    <Alert alert = {alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading = "Enter the text To analyze" mode={mode}/>  
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
