import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Card from './Card'
const API_KEY = process.env.REACT_APP_YOUR_API_KEY_NAME;

export default function Categories() {
    //https://newsapi.org/v2/sources?category=businessapiKey=API_KEY

    const[categories, setCategories] = useState("");
    const[result, setResult] = useState([]);
    const[index, setIndex] = useState(0);

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

    useEffect(() => {
        fetchResult();
    }, [categories])

    const handleTechnology = () => {
        setCategories("technology")
    }

    const handleBusines = () => {
        setCategories("business")
    }

    const handleGenral = () => {
        setCategories("general")
    }

    const fetchResult = async() => {
        const {data} = await  axios.get(`https://newsapi.org/v2/everything?q=${categories}&from=2021-03-17&sortBy=popularity&apiKey=${API_KEY}`)
        setResult(data.articles);
    }

    return (
        <div>
            <h1>this is categories</h1>
            <button onClick={handleTechnology}>Technology</button>
            <button onClick={handleBusines}>Business</button>
            <button onClick={handleGenral}>Genral</button>
            <Link to = "/"><button>Back</button></Link>

            {result.length > 1 &&(<Card decrement={decrement} increment={increment} news ={result} index = {index}></Card>)}
        </div>
    )
}
