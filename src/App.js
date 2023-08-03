import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';


function App(){
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
   
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';  
      showAlert("dark mode has been enabled" , "success")

    }else{ 
      setMode('light')
      document.body.style.backgroundColor = 'white '; 
      showAlert("light mode has been enabled" , " ")
    }
  } 
  return (
     <>
            <Navbar title="textutils" mode = {mode} toggleMode={toggleMode}/> 
           <Alert alert ={alert} />
          <div className="container" >
            <TextForm showAlert = {showAlert} heading="Enter The Text" mode = {mode}/>
            {/* <About/> */}
          </div>
         </>
  );
}
export default App;
