import React, { useState,useEffect } from 'react';
import './App.css';
import Hero from './Hero';
import Sidebar from './Sidebar';
import axios from "axios";

const App = () => {
  const [dataArray, setDataArray] = useState([]);
  const[tokenAddress,setTokenAddress]=useState('0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
  useEffect(() => {
    axios.get('https://api.dexscreener.io/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
      .then(response => {
    
        setDataArray(response.data.pairs);
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });  
  }, []); // Empty dependency array ensures this effect runs once on component mount

  useEffect(() => {
    // This will log the updated dataArray every time it changes
    // console.log(dataArray);
  }, [dataArray]);
  return (
    <div>
     <div className='main'>
       
        <Sidebar/>
        <div>
          <Hero dataArray={dataArray}/>
        </div>
     </div>
     <div className='footer'>

     </div>
    </div>
  )
}

export default App;
