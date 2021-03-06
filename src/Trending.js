import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Card from './Card'
import axios from 'axios'
const API_KEY = process.env.REACT_APP_YOUR_API_KEY_NAME;



function Trending() {

    const[trending, setTrending] = useState([]);
    const[index, setIndex] = useState(0);
 
  
    const fetchTrending = async() => {
        try {
           
            const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            setTrending(data.articles)
            //console.log(data.articles)
        } catch (error) {
            
        }
       
    }
    useEffect(() => {
        fetchTrending();
        
    },[])

    const increment = () =>{
        if(index < trending.length){
        let currIndex = index;
        currIndex++;
        setIndex(currIndex);
        }
    }
    const decrement = () =>{
        if(index > 0){
        let currIndex = index;
        currIndex--;
        setIndex(currIndex);
        }else setIndex(0);
    }
   
  return (
     
   <div>
        {console.log(index)}
     <Navbar></Navbar>
     <h1>Trending</h1>
     {trending.length > 1 &&(<Card decrement={decrement} increment={increment} news ={trending} index = {index}></Card>)}
   </div>
  );
}

export default Trending;