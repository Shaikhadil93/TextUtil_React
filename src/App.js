import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";
import { Routes,Route } from "react-router-dom";

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
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
    <Alert alert = {alert}/>
    <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} heading = "Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}/>
      <Route path="about" element={<About mode={mode}/>}/>
    </Routes>
    </>
  );
}

export default App;
