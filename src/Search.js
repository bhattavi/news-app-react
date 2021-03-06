import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Card from './Card'
import Navbar from './Navbar'
const API_KEY = process.env.REACT_APP_YOUR_API_KEY_NAME;

export default function Search() {
//https://newsapi.org/v2/everything?q=Apple&from=2021-03-17&sortBy=popularity&apiKey=API_KEY
    const[search, setSearch] = useState("");
    const[result, setResult] = useState([]);
    const[index, setIndex] = useState(0);
    useEffect(() => {
        fetchResult();
    }, [search])

    const fetchResult = async() => {
        const {data} = await  axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2021-03-17&sortBy=popularity&apiKey=${API_KEY}`)
        setResult(data.articles);
    }

    const handleSubmit= (e)=> {
        e.preventDefault();
        setSearch(inputRef.current.value)

    }

    const increment = () =>{

        if(index < result.length){
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

    const inputRef = useRef();
    return (
       
        <div>
            <Navbar></Navbar>
             {console.log(search)}
            <h1>Search</h1>
           
            <form>
            <input type="text" ref={inputRef} placeholder="Search"></input>
            <button onClick={handleSubmit}>Submit</button>
            </form>

            {result.length > 1 &&(<Card decrement={decrement} increment={increment} news ={result} index = {index}></Card>)}            
        </div>
    )
}
