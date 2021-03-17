import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar'
import Card from './Card'
import Trending from './Trending';
import Search from './Search';
import Categories from './Categories';



export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path = "/" exact component = {Trending}/>
                <Route path = "/search" component = {Search}/>
                <Route path = "/categories" component = {Categories}/>
            
            </Switch>
        </Router>
    )
}
